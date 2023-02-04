import Box from 'src/components/atoms/Box/Box';
import RoundIcon from 'src/components/atoms/RoundIcon/RoundIcon';
import Text from 'src/components/atoms/Text/Text';
import { IStepData } from 'src/data/FormStepsData';

const FormStep = ({ stepDescription, stepTitle, stepNumber }: IStepData) => {
  return (
    <Box justifyContent="between" alignItems="center">
      <RoundIcon
        formNumberStep={stepNumber}
        borderColor="strawberryRed"
        padding={10}
      />
      <Box flexDirection="col" justifyContent="center" alignItems="center">
        <Text text={stepTitle} uppercase color="marineBlue" fontSize="md" />
        <Text
          text={stepDescription}
          uppercase
          color="marineBlue"
          fontSize="md"
        />
      </Box>
    </Box>
  );
};

export default FormStep;
