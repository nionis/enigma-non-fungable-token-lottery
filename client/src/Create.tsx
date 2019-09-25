import WhitelistAddresses from "./components/WhitelistAddresses";
import DepositToken from "./components/DepositToken";
import CreateLottery from "./components/CreateLottery";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";

const Create = () => (
  <div className="container">
    <Header homepage={false} />

    <ProgressBar status1="active" status2="inactive" status3="inactive" />

    <WhitelistAddresses />
    {/* <DepositToken />
    <CreateLottery /> */}

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        padding-left: 10vh;
        padding-right: 10vh;
        padding-top: 0;
        padding-bottom: 0;
        flex: 1;
        justify-content: center;
      }
      .circle {
        background-color: #003e86;
        border-radius: 50%;
        width: 5vh;
        height: 5vh;
        line-height: 5vh;
        text-align: center;
        justify-content: center;
      }
    `}</style>
    <style global jsx>{`
      body {
        background-color: #001c3d;
        margin: none;
        color: white;
        padding: none;
      }
    `}</style>
  </div>
);

export default Create