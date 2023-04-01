import "@/styles/globals.css";

import { store } from "@/common/store";
import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import Layout from "@/common/components/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
