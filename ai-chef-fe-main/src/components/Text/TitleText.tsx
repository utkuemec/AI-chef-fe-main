import { twMerge } from "tailwind-merge";
import BaseText from "./BaseText";

interface TitleTextProps {
  text: string;
  className?: string;
}

const TitleText = (props: TitleTextProps) => {
  const { className, ...rest } = props;
  const titleStyle = `text-4xl sm:text-5xl font-medium`;
  const style = twMerge(titleStyle, className);

  return <BaseText className={style} {...rest} />;
};

export default TitleText;
