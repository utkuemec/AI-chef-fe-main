import { useNavigate } from "react-router-dom";
import BaseButton from "../Button/BaseButton";
import PathConstants from "../../routes/pathConstants";

export default function Header() {
  const navigate = useNavigate();
  const onButtonClick = (to: string) => {
    navigate(to);
  };
  return (
    <header className="bg-koz-black h-20">
      <div className="p-5 text-white">
        <nav className="flex justify-center">
          <ul className="flex p-0 m-0">
            <li>
              <BaseButton
                className="text-xl "
                text="Start From Beginning"
                onClick={() => onButtonClick(PathConstants.HOME)}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
