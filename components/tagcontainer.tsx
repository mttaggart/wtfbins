import styles from "../styles/TagContainer.module.css"

interface AppProps {
    tags: string[],
    addTagFilter: (t: string) => void
}

const TagContainer = ({ tags, addTagFilter }: AppProps) => (
    <div className={styles.tagContainer}>
        <h3>Tags</h3>
        <ul>
            {
                tags.map((tag: string, idx: number) => (
                    <li
                        key={idx.toString()}
                        className={styles.wtfBinTag}
                        onClick={() => addTagFilter(tag)}
                    >
                        {tag}
                    </li>

                ))
            }
        </ul>
    </div>
)

export default TagContainer;