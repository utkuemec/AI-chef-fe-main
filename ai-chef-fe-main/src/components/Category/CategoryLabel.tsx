import { Link as ScrollLink } from "react-scroll";
import { twMerge } from "tailwind-merge";
import TitleText from "../Text/TitleText";

interface CategoryLabelProps {
  name: string;
  isSelected: boolean;
  onClick: (category: string) => void;
}
const CategoryLabel = (props: CategoryLabelProps) => {
  const { isSelected, onClick, name } = props;
  const baseStyle = `py-2 px-3 my-4 select-none rounded-xl bg-transparent bg-clip-border shadow-none transition-all cursor-pointer group`;
  const activeContainerStyle = `rounded-xl bg-clip-border shadow-md transition-all`;
  const inActiveContainerStyle = ``;
  const hoverStyle = `hover:bg-clip-border hover:shadow-md `;
  const activationStyle = isSelected
    ? activeContainerStyle
    : inActiveContainerStyle;
  const textStyles = twMerge(
    `text-lg sm:text-xl text-nowrap whitespace-nowrap  group-hover:text-koz-dust transition-all`,
    isSelected && `text-koz-dust`
  );

  return (
    <ScrollLink
      className={twMerge(baseStyle, hoverStyle, activationStyle)}
      activeClass="active"
      to={name}
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      onClick={() => onClick(name)}
    >
      <TitleText className={textStyles} text={name} />
    </ScrollLink>
  );
};

export default CategoryLabel;
