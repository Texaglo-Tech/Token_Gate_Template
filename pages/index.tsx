import styles from "../styles/page/texaglo.module.scss";
import React, { useState } from "react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useRouter } from "next/router";
import WalletContext from "../context/WalletContext";
import APP_SELECCTOR from "../component/sections/hero";
import CopyrightsFooter from "../component/copyrightsFooter";

type DisplayEncoding = "utf8" | "hex";
type PhantomEvent = "disconnect" | "connect" | "accountChanged";
type PhantomRequestMethod =
  | "connect"
  | "disconnect"
  | "signTransaction"
  | "signAllTransactions"
  | "signMessage";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  publicKey: PublicKey | null;
  isConnected: boolean | null;
  signTransaction: (transaction: Transaction) => Promise<Transaction>;
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>;
  signMessage: (
    message: Uint8Array | string,
    display?: DisplayEncoding,
  ) => Promise<any>;
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, handler: (args: any) => void) => void;
  request: (method: PhantomRequestMethod, params: any) => Promise<unknown>;
}

const index = ({ Component, pageProps }: any) => {
  const router = useRouter();
  const setWallet = React.useContext(WalletContext);

  const [provider, setProvider] = useState<PhantomProvider | undefined>(
    undefined,
  );
  const [walletKey, setWalletKey] = useState<PhantomProvider | undefined>(
    undefined,
  );

  /**
   * @description gets Phantom provider, if it exists
   */
  

  /**
   * @description prompts user to connect wallet if it exists
   */
  
  

  /**
   * @description disconnect Phantom wallet
   */
  

  return (
    <div className={styles.main}>
      <APP_SELECCTOR />
      <CopyrightsFooter /> 
    </div>
  );
};

export default index;
