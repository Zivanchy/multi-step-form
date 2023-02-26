interface Props {
  stepNumber: number;
  stepTitle: string;
}

const StepInfo = ({ stepNumber, stepTitle }: Props) => {
  return (
    <div className="flex flex-col justify-between items-start">
      <p className="uppercase text-slate-400">step {stepNumber}</p>
      <p className="uppercase text-slate-50 font-bold">{stepTitle}</p>
    </div>
  );
};

export default StepInfo;
