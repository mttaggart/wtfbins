import styles from "../styles/ActiveTagContainer.module.css"

interface AppProps {
    tags: string[],
    removeTagFilter: (t: string) => void
}

const ActiveTagContainer = ({ tags, removeTagFilter }: AppProps) => (
    tags.length == 0 ? <></> :
    <>
        <div>
            <h4>
                Active Tags
            </h4>
        </div>
        <div className={styles.activeTag}>
            <ul>
                {
                    tags.map((t: string, idx: number) => (
                        <li 
                            key={idx}
                            onClick={() => removeTagFilter(t)}
                        >
                            {t} [x]
                        </li>
                    ))
                }
            </ul>
        </div>
    </>
)

export default ActiveTagContainer