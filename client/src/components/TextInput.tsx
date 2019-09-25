import { ReactChildren } from "react";

interface ITextInput {
  label: string;
}

const TextInput = ({ label }: ITextInput) => (
  <div>
    <div className="textInput">
      <div className="label">{label}</div>
      <input className="text" name="address" type="text" />
    </div>

    <style jsx>{`
      .textInput {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 40vw;

        margin-top: 3vh;
      }
      .label {
        width: 25vh;
        justify-content: center;
        display: flex;
      }
      .text {
        height: 4vh;
        width: 35vh;
        border-radius: 12px;
        border: 1px solid #000000;
      }
    `}</style>
  </div>
);

export default TextInput;
