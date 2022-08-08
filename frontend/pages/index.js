import Head from "next/head";
import { useState } from "react";

import { faucet } from "../helpers";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>NeuraDAO Test Faucet</title>
      </Head>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="grid max-h-96 place-items-center grid-rows-[auto_auto] gap-16 mb-[100px]">
          <h1 className="font-inter font-bold text-[50px] ">
            NeuraDAO test faucet
          </h1>
          <button
            className="button-glow font-inter"
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              await console.log("Connecting Wallet");
              setLoading(false);
            }}
          >
            Connect{loading && "ing"} wallet
          </button>
          <button
            className="button-glow font-inter"
            disabled={loading}
            onClick={() => {
              setLoading(true);
              faucet();
              setLoading(false);
            }}
          >
            Mint{loading && "ing"} tokens
          </button>
        </div>
      </div>
    </>
  );
};

export default () => <Home />;
