import Home from "@/common/components/home";
import Head from "next/head";

const Index = () => {
    return (
        <>
            <Head>
                <title>Walter Wine</title>
                <meta
                    name="description"
                    content="Walter Wine, wine for a good reason!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* logo png don't work */}
                <link rel="png" href="/LogoWeb.png" />
            </Head>
            <Home />
        </>
    );
};

export default Index;
