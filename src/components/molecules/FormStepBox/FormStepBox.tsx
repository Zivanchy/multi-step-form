import Box from 'src/components/atoms/Box/Box';
import { formStepsData } from 'src/data/FormStepsData';
import FormStep from 'src/components/molecules/FormStep/FormStep';

const FormStepBox = () => {
  return (
    <Box
      flexDirection="col"
      justifyContent="between"
      alignItems="start"
      padding={10}
    >
      {formStepsData.map((formStep) => (
        <FormStep
          key={formStep.stepNumber}
          stepDescription={formStep.stepDescription}
          stepNumber={formStep.stepNumber}
          stepTitle={formStep.stepTitle}
        />
      ))}
    </Box>
  );
};

export default FormStepBox;
