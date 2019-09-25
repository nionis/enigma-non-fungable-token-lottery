import { ReactChildren } from "react";
import SvgIcon from "./SvgIcon";

interface IProgress {
  status: string;
  number: string;
}

const ProgressCircle = ({ status, number }: IProgress) => (
  <div className="container">
    {status === "completed" ? (
      <SvgIcon clickable={false} icon="done" />
    ) : (
      number
    )}

    <style jsx>{`
      .container {
        background-color: ${status === "completed" ? "#E72A9B" : "#003e86"};
        border-radius: 50%;
        border: ${status === "inactive"
          ? "solid 2px #003e86"
          : " solid 2px #E72A9B"};
        width: 5.5vh;
        height: 5.5vh;
        line-height: 5vh;
        text-align: center;
        justify-content: center;
        font-size: 3vh;
      }
    `}</style>
  </div>
);

export default ProgressCircle;
