interface Props {
  stepNumber: number;
}

const StepNumber = ({ stepNumber }: Props) => {
  return (
    <div className="btn btn-circle btn-outline font-bold text-md text-slate-50 ">
      {stepNumber}
    </div>
  );
};

export default StepNumber;
