import { ReactChildren } from "react";
import Button from "./Button";
import Form from "./Form";

// interface ILottery {
//   title: string;
//   tokenId: any;
//   //SHould tokenid be string or num?
//   participants: any;
// }

const CreateLottery = ({  }: any) => (
  <div className="container">
    <div className="title">Create Lottery</div>
    <Form labels={["NFT Address: ", "Token ID: ", "Max Paticipants: "]}>
      <Button>Go</Button>
    </Form>

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

export default CreateLottery;
