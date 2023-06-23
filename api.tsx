import {
  PublicKey,
  Connection,
} from "@solana/web3.js";
import {
  dev,
  devnetRPC,
  mainnetRPC,

} from "./config";
import {
  Metaplex,
} from "@metaplex-foundation/js";
// import { TOKEN_PROGRAM_ID, Token, MINT_SIZE,
//         createAssociatedTokenAccountInstruction,
//         createInitializeMintInstruction,
//         getAssociatedTokenAddress,
//         } from("@solana/spl-token");

 
var connectionDefault: any;

if (dev) {
  connectionDefault = new Connection(devnetRPC, {
    commitment: "confirmed",
    // confirmTransactionInitialTimeout: 180000,
  });
} else {
  connectionDefault = new Connection(mainnetRPC, {
    commitment: "confirmed",
    confirmTransactionInitialTimeout: 120000,
  });
}
const TOKEN_METADATA_PROGRAM_ID = new PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

export const getAllNFTsNew = async (wallet: any) => {
  try {
    console.log("Get ALL NFT FROM WALLET");
    const techNFT = [];
    const metaplex = new Metaplex(connectionDefault);
    const owner = new PublicKey(wallet);
    const allNFTs: any = await metaplex.nfts().findAllByOwner({ owner: owner });
    console.log(allNFTs);
    for (let i = 0; i < allNFTs.length; i++) {
      if ((
        allNFTs[i].symbol == "TECH" &&
        allNFTs[i].uri.includes("ipfs?") &&
        allNFTs[i]?.collection?.key.toBase58() )||
        (allNFTs[i].symbol == "TECH" &&
        
        allNFTs[i]?.collection?.key.toBase58() )
      ) {
        techNFT.push(allNFTs[i]);
      }
    }
    return techNFT;
  } catch (err) {
    console.log(err);
    return [];
  }
};
