import { twMerge } from "tailwind-merge";

interface BaseTextProps {
  className?: string;
  text: string;
}
const BaseText = (props: BaseTextProps) => {
  const { className, text } = props;

  const style = twMerge("text-slate-300", className);
  return <p className={style}>{text}</p>;
};

export default BaseText;
