import Link from "next/link"

export default function Navbar () {
    return (
        <>
            <h1>WTFBins</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contribute">Contribute</Link>
            </nav>
        </>
    );
}