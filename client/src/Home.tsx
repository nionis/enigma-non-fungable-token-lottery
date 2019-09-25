import Lottery from "./components/Lottery";
import Header from "./components/Header";
import LotteryButton from "./components/LotteryButton";

type Status = Parameters<typeof LotteryButton>[0]["status"];

const title = "CryptoKitties";
const tokenId = 1;
const participants = "1";
const maxParticipants = "10";
let status: Status = "WON";

const Home = () => (
  <div className="container">
    <Header homepage={true} />

    <div className="title">
      <p>
        Encrypted NFT lotteries using the{" "}
        <a href="https://enigma.co/">Enigma Protocol</a>
      </p>
    </div>
    <div className="lotteries">
      <Lottery
        title={title}
        tokenId={tokenId}
        participants={participants}
        maxParticipants={maxParticipants}
        status={status}
      />
      <Lottery
        title={title}
        tokenId={tokenId}
        participants={participants}
        maxParticipants={maxParticipants}
        status={status}
      />
      <Lottery
        title={title}
        tokenId={tokenId}
        participants={participants}
        maxParticipants={maxParticipants}
        status={status}
      />
      <Lottery
        title={title}
        tokenId={tokenId}
        participants={participants}
        maxParticipants={maxParticipants}
        status={status}
      />
    </div>
    <style jsx>{`
      .lotteries {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        margin-left: 2vw;
        margin-right: 2vw; 
      }
      a {
        color: #e72a9b;
        text-decoration: none;
      }
      .title {
        display: flex;
        justify-content: center;
        margin-top: 3vh;
        margin-bottom: 2vh:
      }
      .container {
        display: flex;
        flex-direction: column;
        margin: none;
        color: white;
        padding-left: 10vh;
        padding-right: 10vh;
        padding-top: 0;
        padding-bottom: 0;
      }
      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1vh;
      }
    `}</style>
    <style global jsx>{`
      body {
        background-color: #001c3d;
        margin: none;
        padding: none;
      }
    `}</style>
  </div>
);

export default Home