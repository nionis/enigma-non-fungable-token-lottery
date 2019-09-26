import { observer } from "mobx-react";
import { types, unprotect, Instance } from "mobx-state-tree";
import Button from "./Button";
import Step from "../models/Step";
import web3Store from "../stores/web3";
import enigmaStore from "../stores/enigma";
import EnigmaTransaction from "../models/EnigmaTransaction";

interface IWhitelistAddresses {
  step: Instance<typeof Step>;
}

const store = types
  .model("WhitelistAddresses", {
    error: false,
    addresses: types.maybe(types.string)
  })
  .create();
unprotect(store);

const Go = (step: IWhitelistAddresses["step"]) => async () => {
  const enigma = enigmaStore.getEnigma();
  const addresses = store.addresses.split("\n");
  const transaction = step.transaction as Instance<typeof EnigmaTransaction>;

  transaction.run(enigma, {
    fn: "add_to_whitelist(address[], address)",
    args: [[addresses, "address[]"], [web3Store.account, "address"]],
    userAddr: web3Store.account,
    contractAddr: enigmaStore.enigmaContractAddress
  });
};

const updateAddresses = e => {
  const web3 = web3Store.getWeb3();
  const value: string = e.target.value || "";
  const addresses = value.split("\n");
  const isOk = addresses.every(address => web3.utils.isAddress(address));

  store.error = !isOk;
  store.addresses = value;
};

const WhitelistAddresses = observer(({ step }: IWhitelistAddresses) => {
  const loading = step.transaction.status === "PENDING";
  const disabled =
    !enigmaStore.isInstalled || loading || store.error || !store.addresses;

  return (
    <div className="container">
      <div className="content">
        <div className="title">Add addresses to whitelist</div>
        <div>(every new line in an address)</div>
      </div>
      <div className="form">
        <textarea onChange={updateAddresses} value={store.addresses} />
        <div className="buttons">
          <Button
            onClick={Go(step)}
            disabled={disabled}
            loading={loading}
            undertext={step.transaction.error}
          >
            Go
          </Button>
          <Button onClick={step.skip} disabled={loading}>
            Skip
          </Button>
        </div>
      </div>

      <style jsx>{`
        .title {
          font-size: 3vh;
        }
        .form {
          display: flex;
          height: 47vh;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .buttons {
          display: flex;
          flex-direction: row;
        }
        textarea {
          width: 70vh;
          height: 25vh;
          border-radius: 15px;
          margin-top: 2vh;
          border: ${store.error ? "1px solid red" : "none"};
        }
        .content {
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          display: flex;
        }
        .container {
          display: flex;
          height: 55vh;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          color: white;
        }
      `}</style>
    </div>
  );
});

export default WhitelistAddresses;
