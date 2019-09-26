import Router from "next/router";
import Button from "./Button";

const Complete = () => {
  return (
    <div className="container">
      <h1>complete</h1>
      <Button onClick={() => Router.replace("/")}>Go to homepage</Button>

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
};

export default Complete;
