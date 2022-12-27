import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head"

export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <meta name="description" content="WTFBins: benign applications that exhibit suspicious behavior" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:url" content="https://wtfbins.wtf/" />
                <meta property="og:card" content="summary_large_image" />
                <meta property="og:title" content="WTFBins"/>
                <meta property="og:author" content="Michael Taggart" />
                <meta property="og:description" content="WTF, Bin?! This project aims to catalogue benign applications that exhibit suspicious behavior. These binaries can emit noise and false positives in threat hunting and automated detections. By cataloguing them here, the hope is to allow defenders to improve their detection rules and threat hunting queries."/>
                <meta property="og:image" content="https://wtfbins.wtf/wtfbin.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="WTFBins"/>
                <meta name="twitter:site" content="@mttaggart" />
                <meta name="twitter:creator" content="@mttaggart" />
                <meta name="twitter:description" content="WTF, Bin?! This project aims to catalogue benign applications that exhibit suspicious behavior. These binaries can emit noise and false positives in threat hunting and automated detections. By cataloguing them here, the hope is to allow defenders to improve their detection rules and threat hunting queries."/>
                <meta name="twitter:image" content="https://wtfbins.wtf/wtfbin.png" />
            </Head>
            <Navbar />
            <main>{ children }</main>
            <Footer />
        </>
    )

}