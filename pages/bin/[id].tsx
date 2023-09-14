import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/layout';
import { WtfBin } from "../../interfaces/WtfBin";
import styles from "../../styles/WtfBinDetailView.module.css";
import TagContainer from '../../components/tagcontainer';
import {marked} from "marked";

const wtfBinsUrl = "https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json";

interface AppProps {
    wtfBin: WtfBin,
}

export const getStaticPaths: GetStaticPaths = async () => {
    const wtfBinsData = await fetch(wtfBinsUrl);
    const wtfBins: WtfBin[] = await wtfBinsData.json();
    return {
        paths: wtfBins.map(wtfBin => ({
            params: { id: wtfBin.id.toString() }
        })),
        fallback: false
    } 
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const wtfBinsData = await fetch(wtfBinsUrl);
    const wtfBins: WtfBin[] = await wtfBinsData.json();
    const wtfBin =  wtfBins.find((wtfBin: WtfBin) => (
        wtfBin.id.toString() == params?.id
    ));
    return {
        props: {
            wtfBin
        }
    }
}

export default function WtfBinDetailView({wtfBin}: AppProps) {
    return (
        <Layout>
        <li className={styles.binItem}>
            <h2>{ wtfBin.name }</h2>
            <hr />
            <p>
                <b>Contributed By: </b>{ wtfBin.contributor }
            </p>
            <div className="markdown"
                dangerouslySetInnerHTML={{__html: marked.parse(wtfBin.description)}}
            >
                
            </div>
            <a href={wtfBin.imageURL} target="_blank" rel="noreferrer">
                <img src={wtfBin.imageURL}/>
            </a>
            <footer>
                <a href={wtfBin.documentation}>Documentation</a>
                <TagContainer tags={wtfBin.tags} addTagFilter={() => {}}/>
            </footer>
        </li>
        </Layout>
    )
} 