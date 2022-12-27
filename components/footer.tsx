import styles from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                <a href="https://github.com/mttaggart/wtfbins">Made</a> with 💜 by <a href="https://taggartinstitute.com">The Taggart Institute</a>
            </p>
        </footer>
    );
}