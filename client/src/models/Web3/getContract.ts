import Web3 from "web3"
import {
  abi as NFTAbi,
  bytecode as NFTBytecode
} from "../../build/smart_contracts/NFT.json";

const definitions = {
  NFT: {
    abi: NFTAbi,
    bytecode: NFTBytecode
  },
};

const getContract = (web3: Web3, name: keyof typeof definitions) => {
  const contract = new web3.eth.contract(
    definitions[name].abi,
  );
  contract.options.data = definitions[name].bytecode;

  return contract;
};

const getContractAt = (
  eth: any,
  name: keyof typeof definitions,
  address: string
) => {
  const contract = getContract(eth, name)
  contract.options.address = address;

  return contract;
};

export { getContract, getContractAt, };
