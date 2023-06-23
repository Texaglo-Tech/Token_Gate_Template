# Routing and Token Gating Kit. 

Thanks for participating in this Course Hosted by the Developer Dao !

We will be using this kit to creat your own Gated experienc on the Solana Blockchain. These Skills can be transfered to Eth and other blockchains as the method is very simular for other chains. 

Today we will be making a Gated frontend that is going to check and see if the person interacting ui components is a holder of your collection or a token. If they are a holder they will be permitted to go to a webpage in this application. If they are not then they will be rejected and will be kicked back to the main page. It is a very simple application but this can be used to create complex experiences for your community if used correctly. 

To Start you are going to install: 

yarn 

you can do this with the command:

curl -o- -L https://yarnpkg.com/install.sh | bash

alternatively you can install:

npm 

you can do this with the command: 

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

once you have yarn or npm installed you must then type into your cli: 

yarn install 

yarn run dev

or 

npm i 

npm run dev

choose one not both. I recomend Yarn. 

after you have done this you can start customizing the pages and the gated experience. To add your own smart contract or nft collection go to the api.tsx file and change the following: 

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


you will want to change the

allNFTs[i].symbol == "TECH" &&
        allNFTs[i].uri.includes("ipfs?") &&
        allNFTs[i]?.collection?.key.toBase58() )||
        (allNFTs[i].symbol == "TECH" &&

        to your collection symbol ie. 

        allNFTs[i].symbol == "D_D" &&
        allNFTs[i].uri.includes("ipfs?") &&
        allNFTs[i]?.collection?.key.toBase58() )||
        (allNFTs[i].symbol == "D_D" &&

changing this will allow you to check that specific collection and verify ownership for those on the page. 
to direct the users to a specific page you will want to change the routes here: 

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

  specifically the router.push("/gate")

if you have any quesitons or concerns just reach out and I will happily help you in your journey. 