import "@/styles/globals.css";

import { store, persistor } from "@/common/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import type { AppProps } from "next/app";
import Layout from "@/common/components/layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider>
    );
}
