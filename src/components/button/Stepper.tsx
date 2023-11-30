import React, { ReactNode, useState } from "react";
import "./stepper.css";
import Button from "../button/Button";

export interface Step {
  title: string;
  content: ReactNode;
  icon?: string;
}

export interface StepperProps {
  initialStep?: number;
  steps: Array<Step>;
  updateStep?: (step: number) => void;
}

const stepperProgress = (currentStep: number, stepperLength: number) => {
  return (100 / (stepperLength - 1)) * currentStep + "%";
};

const Stepper: React.FC<StepperProps> = ({
  initialStep,
  steps,
  updateStep,
}) => {
  const [activeStep, setActiveStep] = useState(initialStep || 0);

  const renderStepItems = () => {
    return steps.map((step, index) => (
      <div className={`stepper-item ${activeStep === index && "active"}`}>
        <div className="stepper-item-counter">
          <div className="icon-box">
            {step.icon ?? <span>{index + 1}</span>}
          </div>
          <h4 className="stepper-item-title">{step.title}</h4>
        </div>
      </div>
    ));
  };

  const goNext = () => {
    setActiveStep((currentStep: number) => currentStep + 1);
    if (updateStep) {
      updateStep(activeStep + 1);
    }
  };

  const goBack = () => {
    setActiveStep((currentStep: number) => currentStep - 1);
    if (updateStep) {
      updateStep(activeStep - 1);
    }
  };

  const isDone = () => {
    alert("the steps are finish");
  };

  return (
    <>
      <div className="stepper">
        <div className="header">
          {/* <!-- Progress --> */}
          <div className="stepper-nav">
            <div className="stepper-progress">
              <div
                className="stepper-progress-bar"
                style={{ width: stepperProgress(activeStep, steps.length) }}
              ></div>
            </div>
            {renderStepItems()}
          </div>
        </div>

        <div className="stepper-content">{steps[activeStep].content}</div>

        <div className="stepper-buttons">
          <Button
            text="Back"
            color="info"
            outlined
            onClick={goBack}
            isDisabled={activeStep === 0}
          />
          {activeStep !== steps.length - 1 && (
            <Button text="Next" color="info" outlined onClick={goNext} />
          )}
          {activeStep === steps.length - 1 && (
            <Button text="Done" color="success" outlined onClick={isDone} />
          )}
        </div>
      </div>
    </>
  );
};

export default Stepper;
