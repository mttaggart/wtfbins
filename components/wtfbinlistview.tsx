import { WtfBin } from "../interfaces/WtfBin";
import Link from "next/link";
import styles from "../styles/WtfBinListView.module.css";
import TagContainer from "./tagcontainer";

interface AppProps {
    wtfBins: WtfBin[],
    tagFilter: string[]
    textFilter: string,
    addTagFilter: (t: string) => void
}

export default function WtfBinListView({ wtfBins, tagFilter, addTagFilter, textFilter }: AppProps) {

    const tagMatch = (
        binTags: string[], 
        tagFilter: string[]
    ): boolean => {
        if (tagFilter.length == 0) return true;
        return binTags.some((t: string): boolean => tagFilter.indexOf(t) >= 0);
    };
      
    const textMatch = (
        bin: WtfBin,
        textFilter: string
    ): boolean => {
        if (textFilter == "") return true;
        const lowerName = bin.name.toLowerCase();
        const lowerDesc = bin.description.toLowerCase();
        const lowerContrib = bin.contributor.toLowerCase();
        return (
            lowerName.indexOf(textFilter) >= 0 ||
            lowerDesc.toLowerCase().indexOf(textFilter) >= 0 ||
            lowerContrib.toLowerCase().indexOf(textFilter) >= 0
        );
    };

    const filteredBins: WtfBin[] = wtfBins.filter((wtfBin: WtfBin) => (
        tagMatch(wtfBin.tags, tagFilter) && textMatch(wtfBin, textFilter)
    ))

    return (
        filteredBins.length == 0 ? 
            <p>I got no bins for you!</p>
        :
        <ul className={styles.binContainer}>
            {
                filteredBins.map((wtfBin: WtfBin) => (
                    <li key={wtfBin.name} className={styles.binItem}>
                        <Link href={`/bin/${wtfBin.id}`}>
                            <h2>{ wtfBin.name }</h2>
                        </Link>
                        <hr />
                        <p>
                            <b>Contributed By:</b> { wtfBin.contributor }
                        </p>
                        <p>
                            {wtfBin.preview}
                        </p>
                        <div className="markdown" v-html="Marked.parse(wtfbin.preview)"></div>
                        <footer>
                            <a href={wtfBin.documentation}>Documentation</a>
                            <TagContainer tags={wtfBin.tags} addTagFilter={addTagFilter}/>
                        </footer>
                    </li>
                ))
            }
        </ul>
    );
}
    