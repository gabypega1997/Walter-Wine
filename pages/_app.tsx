import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import { stripePromise } from "@/common/utils/stripe";
import { store, persistor } from "@/common/store";

import Layout from "@/common/components/layout";

import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Layout>
                    <Elements stripe={stripePromise}>
                        <Component {...pageProps} />
                    </Elements>
                </Layout>
            </PersistGate>
        </Provider>
    );
}
