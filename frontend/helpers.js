import { ethers } from "ethers";
import { toast } from "react-hot-toast";

import NeuraTokenABI from "../hardhat/artifacts/contracts/NeuraToken.sol/NeuraToken.json";

const tokenAddress = process.env.NEXT_PUBLIC_TOKEN_ADDRESS;

/**
 * @description Get the token contract and mint it to the wallet
 * @returns {bool} true if the token was minted, false otherwise
 */
const faucet = async () => {
  if (typeof window.ethereum !== "undefined") {
    const amount = 1000;
    try {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        tokenAddress,
        NeuraTokenABI.abi,
        signer
      );
      await contract.mint(account[0], amount);
      toast.success(`Success! You have minted ${amount} tokens!`);
      return true;
    } catch (err) {
      toast.error("There was an error minting the tokens 😔");
      console.log({ err });
      return false;
    }
  }
};

export { faucet };
