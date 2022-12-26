import Layout from "../components/layout"

export default function Contribute() {
    return (
        <Layout>
            <h2>Contribute</h2>
            <p>
                Got a WTFBin to add? Create a new <a href="https://github.com/mttaggart/wtfbins/issues/new?assignees=&labels=new+wtfbin&template=custom.md&title=%5BNew+WTFBin%5D%3A+WTFBIN+Here">GitHub Issue</a> for it! The submission will be reviewed and adopted if it passes scrutiny.
            </p>
            <p>
                We're looking for applications (on any platform) that exhibit behavior which could be considered suspicious or malicious during threat hunting or incident response.
            </p>
            <p>
                And hey—thank you for the contribution!
            </p>
        </Layout>
    )
}