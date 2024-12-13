import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Hello = () => {
    return (
        <div>
            <Head>
                <title>Hello World Page</title>
                <meta property="og:title" content="Hello World" key="title" />
            </Head>
            <div>Hello World!</div>
            <div>
                Use the HTML anchor for an
                <a href="https://nostarch.com"> external link </a>
                and the Link component for an
                <Link href="/components/weather"> internal page </Link>.
            </div>
            <Image src="/vercel.svg" alt="Vercel logo" width={72} height={16} />
        </div>
    );
};

export default Hello;
