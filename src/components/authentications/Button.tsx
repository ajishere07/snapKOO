import React, { FC } from "react";

type Props = {
  buttonName: string;
  fun: any;
};

const Button: FC<Props> = ({ buttonName, fun }) => {
  return (
    <button className="authBtn" onClick={() => fun()}>
      {buttonName}
    </button>
  );
};

export default Button;
