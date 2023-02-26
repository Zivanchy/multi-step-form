import { stepsData } from 'src/resources/data/Steps';

import StepNumber from 'src/components/atoms/StepNumber/StepNumber';
import StepInfo from 'src/components/atoms/StepInfo/StepInfo';

const FormSteps = () => {
  return (
    <div className="flex flex-col gap-4">
      {stepsData.map((step) => (
        <div
          key={step.stepNumber}
          className="flex justify-between items-center gap-6 max-w-fit"
        >
          <StepNumber stepNumber={step.stepNumber} />
          <StepInfo stepNumber={step.stepNumber} stepTitle={step.stepTitle} />
        </div>
      ))}
    </div>
  );
};

export default FormSteps;
