import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  disabled?: boolean;
}

const BaseButton = (props: BaseButtonProps) => {
  const { className, text, disabled = false, ...rest } = props;

  const style = twMerge(
    "text-white bg-lime-600	hover:bg-lime-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2",
    className,
    disabled ? "opacity-50 cursor-not-allowed" : ""
  );

  return (
    <button type="button" className={style} {...rest}>
      {text}
    </button>
  );
};

export default BaseButton;
