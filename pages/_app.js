//import "@/styles/globals.css";
import Header from "@/Components/Header";
import { persistor, reduxPersistStore } from "@/Redux/ReduxPersistStore";
import Store from "@/Redux/Store";
import "bootstrap/dist/css/bootstrap.min.css";
import localFont from "next/font/local";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import * as fetchRep from "@/Repository/FetchApiRepository";
import Context from "@/ContextApi/context";

const iranFont = localFont({ src: "../public/font/IRANSansWeb.woff" });

export default function App({ Component, pageProps, props }) {
  return (
    <>
      <Provider store={reduxPersistStore}>
        <PersistGate loading={<h1>loading .... ...</h1>} persistor={persistor}>
          <div className={iranFont.className}>
            <Header />

            <Component {...pageProps} />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}
