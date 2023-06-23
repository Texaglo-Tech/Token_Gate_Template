import type { NextPage } from "next";
import  {  useEffect } from "react";
import styles from "../styles/page/solnaming.page.module.scss";

import {
  dev,
  devnetRPC,
  mainnetRPC,
} from "../config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header_BIZ from "../component/headers/header";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

import { getAllNFTsNew } from "../api";

import { Connection,  } from "@solana/web3.js";

toast.configure();

var connection: any;

if (dev) {
  connection = new Connection(devnetRPC, {
    commitment: "confirmed",
    confirmTransactionInitialTimeout: 120000,
  });
} else {
  connection = new Connection(mainnetRPC, {
    commitment: "confirmed",
    confirmTransactionInitialTimeout: 120000,
  });
}

const AppPage: NextPage = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  

  const router = useRouter();

  

  

  const checkNFT = async (data) => {
    try {
      if(data.length <= 0){
        router.push("/");
        toast.info(`You need to be a member!`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error("NFT Checking Error!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      console.log(err);
    }
  };


  useEffect(() => {
    if (wallet?.publicKey) {
      getAllNFTsNew(wallet?.publicKey.toBase58())
        .then((data) => {
          checkNFT(data);
          console.log(data);
        })
        .catch((err) => {});
    }
  }, [wallet]);

  return (
    <div className={styles.main}>
      <Header_BIZ />
      <div className={styles.main_body}>
       
        <div className={styles.subdomain_box}>
       <h1>your gated content</h1>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
