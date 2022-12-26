import { GetStaticPaths, GetStaticProps } from 'next'
import { AppProps } from 'next/app';
import Layout from '../../components/layout';
import { WtfBin } from "../../interfaces/WtfBin";
import styles from "../../styles/WtfBinDetailView.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
    const wtfBinsData = await fetch("https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json");
    const wtfBins: WtfBin[] = await wtfBinsData.json();
    return {
        paths: wtfBins.map(wtfBin => ({
            params: { id: wtfBin.id.toString() }
        })),
        fallback: false
    } 
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const wtfBinsData = await fetch("https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json");
    const wtfBins: WtfBin[] = await wtfBinsData.json();
    const wtfBin =  wtfBins.filter((wtfBin: WtfBin) => (
        wtfBin.id.toString() == params.id
    ))[0];
    return {
        props: {
            wtfBin
        }
    }
}

export default function WtfBinDetailView({wtfBin}) {
    return (
        <Layout>
        <li className={styles.binItem}>
            <h2>{ wtfBin.name }</h2>
            <hr />
            <p>
                <b>Contributed By: </b>{ wtfBin.contributor }
            </p>
            <div className="markdown"></div>
            <a href={wtfBin.imageURL} target="_blank">
                <img src={wtfBin.imageUrl}/>
            </a>
            <footer>
                <a href={wtfBin.documentation}>Documentation</a>
                {/* <TagContainer :tags="wtfbin.tags" :add-tag="() => { }" /> */}
            </footer>
        </li>
        </Layout>
    )
} 