interface Props {
  contentTitle: string;
  contentDescription: string;
}

const MainContentTitle = ({ contentDescription, contentTitle }: Props) => {
  return (
    <div className="flex flex-col items-start justify-between gap-2">
      <p className="text-2xl font-bold text-slate-900">{contentTitle}</p>
      <p className="text-md text-slate-500">{contentDescription}</p>
    </div>
  );
};

export default MainContentTitle;
