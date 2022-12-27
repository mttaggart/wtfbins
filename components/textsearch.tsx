import styles from "../styles/TextSearch.module.css"

interface AppProps {
    textFilter: string,
    updateTextFilter: (e: any) => any
}

const TextSearch = ({textFilter, updateTextFilter}: AppProps) => (
    <div className={styles.searchForm}>
        <label>Search</label>
        <input type="text" value={textFilter} onInput={updateTextFilter}/>
    </div>
);

export default TextSearch;