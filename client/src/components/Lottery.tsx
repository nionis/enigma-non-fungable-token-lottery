import { ReactChildren } from "react";
import LotteryButton from "./LotteryButton";

type Status = Parameters<typeof LotteryButton>[0]["status"];

interface ILottery {
  title: string;
  tokenId: any;
  participants: any;
  maxParticipants: any;
  status: Status;
}

const Lottery = ({
  title,
  tokenId,
  participants,
  maxParticipants,
  status
}: ILottery) => (
  <div className="lottery">
    <div className="left">
      <div className="top">
        <div className="title">{title}</div>
        <div className="tokenId">Token Id: {tokenId}</div>
        <div className="participants">
          Participants: {`${participants}/${maxParticipants}`}
        </div>
      </div>
      <div className="bottom">
        <LotteryButton status={status} />
      </div>
    </div>
    <div className="right">
      <img
        className="center"
        src="https://friendlystock.com/wp-content/uploads/2018/05/4-cute-cat-cartoon-clipart.jpg"
        alt="Smiley face"
        width="100vw"
      />
    </div>

    <style jsx>{`
      .lottery {
        font-size: 2.5vh;
        display: flex;
        height: 25vh;
        width: 37vw;
        background-color: #003e86;
        border-radius: 15px;
        color: white;
        margin: 2vh;
        margin-top: 4vh;
        margin-bottom: 4vh;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .left {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        margin-left: 2vh;
        margin-right: 2vh;
        margin-top: 2vh;
        margin-bottom: 2vh;
        border-right: 1px solid #001c3d;
      }
      .right {
        justify-content: center;
        align-items: center;
        flex: 1;
      }
      .top {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .bottom {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-size: 3.5vh;
      }
      .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3.5vh;
        margin-bottom: 3.5vh;
        width: 50%;
      }
    `}</style>
  </div>
);

export default Lottery;
