import Button from "./Button";
import { CSSProperties } from "@material-ui/styles";

enum Status {
  JOIN = "JOIN",
  LOGIN = "LOGIN",
  JOINED = "JOINED",
  FULL = "FULL",
  WON = "WON",
  LOST = "LOST"
}

interface IButton {
  status: keyof typeof Status;
  onClick?: any;
}

const getText = (status: IButton["status"]) => {
  if (status === Status.JOIN) {
    return "JOIN";
  }
  if (status === Status.LOGIN) {
    return "LOGIN";
  }
  if (status === Status.JOINED) {
    return "JOINED 👍";
  }
  if (status === Status.FULL) {
    return "FULL";
  }
  if (status === Status.WON) {
    return "WON! 🎉";
  }
  if (status === Status.LOST) {
    return "LOST 😔";
  }

  throw Error("should't be here");
};

const getStyle = (disabled: boolean): CSSProperties => {
  const backgroundColor = disabled ? "grey" : "#e72a9b"
  const width = "12vh";

  return {
    backgroundColor,
    width
  };
};

const LotteryButton = ({ status, onClick }: IButton) => {
  const shouldBeEnabled: string[] = [Status.JOIN, Status.LOGIN];
  const disabled = !shouldBeEnabled.includes(status);

  return (
    <Button onClick={onClick} disabled={disabled} style={getStyle(disabled)}>
      {getText(status)}
    </Button>
  );
};

export default LotteryButton;
