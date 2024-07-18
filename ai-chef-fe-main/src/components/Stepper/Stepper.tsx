import { ChangeEvent, useState } from "react";
import BaseButton from "../Button/BaseButton";
import BaseInput from "../Form/Input/BaseInput";
import "./stepper.css";

export interface StepperField {
  type: string;
  name: string;
  placeholder: string;
  title: string;
  validations?: {
    validate: (value: string) => boolean;
    message: string;
  }[];
}

export interface StepperStep {
  fields: StepperField[];
}

export interface FormData {
  [x: string]: string;
}

interface StepperProps {
  steps: StepperStep[];
  onSubmit: (formData: FormData) => void;
}

const Stepper = ({ steps, onSubmit }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    const isLastStep = currentStep === steps.length - 1;
    if (isLastStep) {
      handleSubmit();
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (currentStep === steps.length - 1) {
      // Submit form data
      onSubmit(formData);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      handleNext();
    }
  };

  return (
    <div className="w-[90svw] sm:w-[80svw] md:w-[65svw] lg:w-[45svw] xl:w-[35svw]">
      {steps[currentStep] && (
        <div>
          <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
            {steps[currentStep].fields.map((field, index) => {
              const animation = index === 0 ? "fade-in" : "fade-out";
              return (
                <div
                  key={`${field.name}-${currentStep}`}
                  className={`${animation}`}
                >
                  <BaseInput
                    title={field.title}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={handleInputChange}
                    name={field.name}
                    type={field.type}
                    inputStyle="text-center"
                    autoFocus
                    required
                  />
                </div>
              );
            })}

            <div
              className={`flex flex-1 flex-row justify-center my-4 gap-x-4 fade-in`}
            >
              {currentStep > 0 && (
                <BaseButton
                  text={"Previous"}
                  type="button"
                  onClick={handlePrevious}
                />
              )}

              <BaseButton text={"Next"} type="button" onClick={handleNext} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Stepper;
