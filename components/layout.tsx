import Navbar from "./navbar";
import Footer from "./footer";
import Head from "next/head"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="description" content="WTFBins: benign applications that exhibit suspicious behavior" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{ children }</main>
            <Footer />
        </>
    )

}