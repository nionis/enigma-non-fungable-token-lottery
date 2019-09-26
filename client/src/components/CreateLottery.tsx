import { observer } from "mobx-react";
import { types, unprotect, Instance } from "mobx-state-tree";
import Button from "./Button";
import TextInput from "./TextInput";
import Step from "../models/Step";
import web3Store from "../stores/web3";
import enigmaStore from "../stores/enigma";
import EnigmaTransaction from "../models/EnigmaTransaction";

interface ICreateLottery {
  step: Instance<typeof Step>;
}

const store = types
  .model("CreateLottery", {
    error: false,
    address: "",
    tokenId: types.maybe(types.number),
    maxParticipants: 2
  })
  .create();
unprotect(store);

const Go = (step: ICreateLottery["step"]) => async () => {
  const enigma = enigmaStore.getEnigma();
  const transaction = step.transaction as Instance<typeof EnigmaTransaction>;

  transaction.run(enigma, {
    fn: "create_lottery(address, uint256, uint256, address)",
    args: [
      [store.address, "address"],
      [store.tokenId, "uint256"],
      [store.maxParticipants, "uint256"],
      [web3Store.account, "address"]
    ],
    userAddr: web3Store.account,
    contractAddr: enigmaStore.enigmaContractAddress
  });
};

const CreateLottery = observer(({ step }: ICreateLottery) => {
  const loading = step.transaction.status === "PENDING";
  const disabled =
    loading ||
    store.error ||
    !store.address ||
    !store.tokenId ||
    store.maxParticipants <= 1;

  return (
    <div className="container">
      <div className="title">Create Lottery</div>
      <TextInput
        label="NFT Address:"
        onChange={e => (store.address = e.target.value)}
        value={store.address}
      />

      <TextInput
        label="Token ID:"
        type="number"
        onChange={e => (store.tokenId = Number(e.target.value))}
        value={String(store.tokenId)}
      />

      <TextInput
        label="Max Paticipants:"
        type="number"
        onChange={e => (store.maxParticipants = Number(e.target.value))}
        value={String(store.maxParticipants)}
      />

      <Button
        onClick={Go(step)}
        disabled={disabled}
        loading={loading}
        undertext={step.transaction.error}
      >
        Go
      </Button>
      <style jsx>{`
        .container {
          display: flex;
          height: 45vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          font-size: 3vh;
        }
      `}</style>
    </div>
  );
});

export default CreateLottery;
