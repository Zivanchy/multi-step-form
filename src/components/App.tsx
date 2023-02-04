import Box from 'src/components/atoms/Box/Box';
import FormStepBox from './molecules/FormStepBox/FormStepBox';

const App = () => {
  return (
    <Box flexDirection="col" borderColor="coolGray" borderStyle="solid">
      <FormStepBox />
    </Box>
  );
};

export default App;
