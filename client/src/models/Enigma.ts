import { when } from "mobx"
import { types } from "mobx-state-tree"
import { Enigma } from 'enigma-js';
import web3Store from "../stores/web3"
import {
  networks as EnigmaSimulationNetworks
} from "../build/enigma_contracts/EnigmaSimulation.json"
import {
  networks as EnigmaTokenNetworks
} from "../build/enigma_contracts/EnigmaToken.json"

const EnigmaModel = types.model("Enigma", {
  initialized: false,
}).actions(self => ({
  setInitialized(initialized: boolean) {
    self.initialized = initialized;
  }
}))
  .actions(self => {
    let enigma: any | undefined;

    return {
      _getEnigma() {
        return enigma;
      },
      getEnigma() {
        if (!enigma) {
          throw Error("enigma not initialized");
        }

        return enigma;
      },
      setEnigma(_enigma: any) {
        enigma = _enigma;
      }
    };
  }).actions(self => {
    when(() => web3Store.isLoggedIn && web3Store.networkId !== null, async () => {
      const web3 = web3Store.getWeb3();
      const networkId = String(web3Store.networkId);

      const enigma = new Enigma(
        web3,
        EnigmaSimulationNetworks[networkId].address,
        EnigmaTokenNetworks[networkId].address,
        'http://localhost:3346',
        {
          gas: 4712388,
          gasPrice: 100000000000,
          from: web3Store.account,
        },
      );
      enigma.admin();

      self.setEnigma(enigma);
      self.setInitialized(true);
    })

    return {}
  })

export default EnigmaModel