import Web3 from "../models/Web3";
import { isSSR } from "../utils"

const web3 = Web3.create();

if (!isSSR) {
  web3.sync();
  setInterval(() => web3.sync(), 1e3);
}

export default web3;
