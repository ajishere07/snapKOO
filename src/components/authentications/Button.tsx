import React, { FC } from "react";

type Props = {
  buttonName: string;
  fun: any;
  whileLoading: any;
  loading: boolean;
};

const Button: FC<Props> = ({ buttonName, fun, whileLoading, loading }) => {
  return (
    <button className="authBtn" onClick={() => fun()}>
      {loading ? whileLoading : buttonName}
    </button>
  );
};

export default Button;
