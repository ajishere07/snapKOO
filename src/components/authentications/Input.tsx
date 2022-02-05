import React, { FC } from "react";

type Props = {
  typeOfInput: string;
  titleOfInput: string;
  placeholder?: string;
  data: string;
  setData: any;
};

const Input: FC<Props> = ({
  typeOfInput,
  titleOfInput,
  placeholder,
  data,
  setData,
}) => {
  return (
    <div className="inputContainerAuth">
      <label className="title">{titleOfInput}</label>
      <input
        value={data || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setData(e.target.value)
        }
        type={typeOfInput}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
