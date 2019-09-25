import { ReactChildren } from "react";
import Button from "./Button";
import Form from "./Form";
import ProgressCircle from "./ProgressCircle";

interface IProgressBar {
  status1: string;
  status2: string;
  status3: string;
}

const ProgressBar = ({ status1, status2, status3 }: IProgressBar) => (
  <div className="progress">
    <ProgressCircle status={status1} number="1" />
    <div className="progressBars" />
    <ProgressCircle status={status2} number="2" />
    <div className="progressBars" />
    <ProgressCircle status={status3} number="3" />

    <style jsx>{`
      .progress {
        height: 2vh;
        background-color: #003e86;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 20px;
        justify-content: space-between;
        margin-bottom: 15vh;
        margin-top: 10vh;
        margin-left: 2vh;
        margin-right: 2vh;
      }
    `}</style>
  </div>
);

export default ProgressBar;
