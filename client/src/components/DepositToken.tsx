import { observer } from "mobx-react";
import { types, unprotect, Instance } from "mobx-state-tree";
import Button from "./Button";
import TextInput from "./TextInput";
import Step from "../models/Step";
import web3Store from "../stores/web3";
import Transaction from "../models/Transaction";

interface IDepositToken {
  step: Instance<typeof Step>;
}

const store = types
  .model("DepositToken", {
    error: false,
    address: "",
    tokenId: types.maybe(types.number)
  })
  .create();
unprotect(store);

const Go = (step: IDepositToken["step"]) => async () => {
  const deposit = await web3Store.getContract("Deposit");
  const nftContract = await web3Store.getContract("NFT", store.address);
  const transaction = step.transaction as Instance<typeof Transaction>;

  console.log(web3Store.account, store.tokenId);

  // await nftContract.methods.mint(web3Store.account, store.tokenId).send({
  //   from: web3Store.account
  // });

  transaction.run(() => {
    return nftContract.methods
      .approve(deposit.options.address, store.tokenId)
      .send({
        from: web3Store.account
      });
  });
};

const DepositToken = observer(({ step }: IDepositToken) => {
  const loading = step.transaction.status === "PENDING";
  const disabled = loading || store.error || !store.address || !store.tokenId;

  return (
    <div className="container">
      <div className="title">Approve token so it can be deposited</div>

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
      <style jsx>{`
        .title {
          font-size: 3vh;
        }
        .buttons {
          display: flex;
          flex-direction: row;
        }
        .container {
          display: flex;
          height: 45vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
});

export default DepositToken;
