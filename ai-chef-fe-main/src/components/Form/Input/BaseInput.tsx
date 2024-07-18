import React, { ChangeEvent } from "react";
import TitleText from "../../Text/TitleText";
import { twMerge } from "tailwind-merge";

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputStyle?: string;
}

const BaseInput: React.FC<BaseInputProps> = (props: BaseInputProps) => {
  const { title, placeholder, value, onChange, inputStyle, ...rest } = props;

  const finalInputStyle = twMerge(
    "text-koz-dust text-xl yarn sm:text-2xl rounded-lg block w-full p-2.5 bg-koz-black placeholder-slate-700 border-koz-dust focus:ring-koz-dust focus:border-koz-dust",
    inputStyle
  );
  return (
    <div>
      <TitleText
        className="text-center block my-6 text-2xl sm:text-4xl text-slate-300"
        text={title}
      />
      <input
        className={finalInputStyle}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        {...rest}
      />
    </div>
  );
};

export default BaseInput;
