import styles from "../styles/ActiveTagContainer.module.css"

interface AppProps {
    tags: string[],
    removeTagFilter: (t: string) => void
}

const ActiveTagContainer = ({ tags, removeTagFilter }: AppProps) => (
    <>
        <div>
            <h4>
                Active Tags
            </h4>
        </div>
        <ul>
            {
                tags.map((t: string, idx: number) => (
                    <li 
                        key={idx}
                        className={styles.activeTag}
                        onClick={() => removeTagFilter(t)}
                    >
                        {t}
                    </li>
                ))
            }
        </ul>
    </>
)

export default ActiveTagContainer