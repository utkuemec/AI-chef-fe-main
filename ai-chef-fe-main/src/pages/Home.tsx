import { useNavigate } from "react-router-dom";
import Stepper, { FormData, StepperStep } from "../components/Stepper/Stepper";
import { CategoryWithItems } from "../hooks/useGroupedMenu";
import PathConstants from "../routes/pathConstants";

export interface PageDataType {
  header: string;
  categoryWithItems: CategoryWithItems[];
}

const Home = () => {
  const navigate = useNavigate();

  const steps: StepperStep[] = [
    {
      fields: [
        {
          title: "Whatever food you desire?",
          type: "text",
          name: "food",
          placeholder: "Please enter the name of a single dish...",
        },
      ],
    },
    {
      fields: [
        {
          title: "Whatever drink you desire?",
          type: "text",
          name: "drink",
          placeholder:
            "For beverages, please enter the name of a single drink.",
        },
      ],
    },
  ];

  const handleSubmit = (formData: FormData) => {
    if (!formData?.food || !formData?.drink) return;

    navigate(PathConstants.RECOMMENDATION, {
      state: { food: formData?.food, drink: formData?.drink },
    });
  };

  return (
    <div className="flex bg-koz-black-secondary w-[100vw] h-[100vh] flex-grow flex-col items-center justify-center gap-y-6">
      <Stepper steps={steps} onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
