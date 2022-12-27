import Layout from "../components/layout"
export default function About() {
    return (
    <Layout>
        <div className="about">
            <h2>About</h2>
            <p>
                The Red Team gets all the cool toys. Like <a href="https://gtfobins.github.io/">GTFOBins</a> and <a href="https://lolbas-project.github.io/">LOLBAS</a>. But what about the Blue team, huh? Where&apos;s their cool stuff?
            </p>
            <p>
                <b>WTFBin(n):</b> a binary that behaves exactly 
                like malware, except, somehow, it&apos;s not?
            </p>
            <p>
                This project aims to catalogue
                benign applications that exhibit suspicious behavior. These binaries
                can emit noise and false positives in threat hunting and automated 
                detections. By cataloguing them here, the hope is to allow defenders
                to improve their detection rules and threat hunting queries.
            </p>
        </div>
    </Layout>
    )
}