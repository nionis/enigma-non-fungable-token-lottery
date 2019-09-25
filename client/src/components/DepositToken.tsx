import { ReactChildren } from "react";
import Button from "./Button";
import Form from "./Form";

// interface ILottery {
//   title: string;
//   tokenId: any;
//   //SHould tokenid be string or num?
//   participants: any;
// }

const DepositToken = ({  }: any) => (
  <div className="container">
    <div className="title">Approve token so it can be deposited</div>
    <Form labels={["NFT Address: ", "Token ID: "]}>
      <div className="buttons">
        <Button>Go</Button>
        <Button>Skip</Button>
      </div>
    </Form>

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

export default DepositToken;
