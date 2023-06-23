import styles from "../../styles/page/texaglo.layout.module.scss";
import Header from "../headers/header";

import { useWallet } from "@solana/wallet-adapter-react";
import { getAllNFTsNew } from "../../api";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const main_layout = () => {

  const wallet = useWallet();
  const router = useRouter();

  const startHandle = async() => {

    if(!wallet?.publicKey) {
      toast.info(`You need to connect the wallet!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }

    await getAllNFTsNew(wallet?.publicKey.toBase58())
    .then((data) => {
      if(data.length >= 1){
        router.push("/gate");
      }else{
        router.push("/404");
      }
      console.log(data);
    })
    .catch((err) => {});
  }


  return (
    <>
      <Header />
      <header
        className="text-center text-white masthead"
        style={{
          background: "linear-gradient(black, white)",
          paddingTop: 0,
          paddingBottom: 0,
        }}
      >
        <div
          className="masthead-content"
          style={{
            height: "100vh",
            background: 'url("/img/main_new.png") center / cover no-repeat',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            
          }}
        >
          <div
            className="container"
          >
            <h1
              className="masthead-heading mb-0"
              style={{ fontFamily: "Red Rose, sans-serif", fontSize: "6rem" , fontWeight: "bold",  }}
            >
              {/* MODERN TECH &amp; OUR BEST */}
              Web3 Is For Everyone            </h1>
            <p
              className="masthead-subheading mb-0"
              style={{
                fontSize: "1.6rem",
                fontFamily: "Red Rose, sans-serif",
                width: "100%",
                lineHeight: "1.005",
                letterSpacing: "0.07em",
               
              }}
            >
             Gate your pages with Web3 | Token Gate kit
            </p>
            <p
              className="masthead-subheading mb-0"
              style={{
                fontSize: "0.7rem",
                fontFamily: "Inter, sans-serif",
                width: "100%",
                lineHeight: "1.01",
                marginTop: "1rem"
              }}
            >
            Web 3 routing and Token Gating kit
            </p>
          </div>
             <p onClick={startHandle} style={{padding : "0.7rem 4rem" , marginTop: "1rem", backgroundColor : "#5B52AD" , borderRadius : "5px" , cursor:"pointer"}}>Start Here</p>
        </div>
      </header>
    </>
  );
};

export default main_layout;
