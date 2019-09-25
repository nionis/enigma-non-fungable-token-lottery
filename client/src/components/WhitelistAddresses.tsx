import { ReactChildren } from "react";
import Button from "./Button";

// interface ILottery {
//   title: string;
//   tokenId: any;
//   //SHould tokenid be string or num?
//   participants: any;
// }

const WhitelistAddresses = ({  }: any) => (
  <div className="container">
    <div className="title">Add addresses to whitelist</div>
    <div>(every new line in an address)</div>
    <div className="form">
      <textarea />
      <Button>Go</Button>
    </div>

    <style jsx>{`
      .title {
        font-size: 3vh;
      }
      .form {
        display: flex;
        height: 35vh;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      textarea {
        width: 70vh;
        height: 25vh;
        border-radius: 15px;
        margin-top: 2vh;
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

export default WhitelistAddresses;
