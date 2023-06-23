import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

require("@solana/wallet-adapter-react-ui/styles.css");
toast.configure();

const Wallet_connect = ({ ShowWallectConnect }) => {
  const router = useRouter();
  // const [isNFT, setIsNFT] = useState(false);

  const solClick = () => {
    ShowWallectConnect(false);
  };

  
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "rgb(45 29 113 / 73%)",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "1000",
      }}
    >
      <div
        style={{
          height: "25vh",
          width: "25%",
          background: "black",
          position: "fixed",
          top: "50%",
          left: "75%",
          transform: "translate(-10%, -175%)",
          padding: "15px",
        }}
      >
        <button
          onClick={() => ShowWallectConnect(false)}
          style={{
            position: "absolute",
            top: "10%",
            left: "90%",
            transform: "translate(-50%, -50%)",
          }}
        >
          close
        </button>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
          <WalletMultiButtonDynamic onClick={solClick} />
        </div>
      </div>
    </div>
  );
};

export default Wallet_connect;
