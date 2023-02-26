import FormSteps from 'src/components/molecules/FormSteps/FormSteps';

const MainForm = () => {
  return (
    <section className="artoboard artboard-horizontal phone-5 p-6 rounded-lg bg-slate-50">
      <div className="bg-formPattern-desktop bg-contain bg-no-repeat bg-origin-border w-[274px] h-[568px] p-6">
        <FormSteps />
      </div>
    </section>
  );
};

export default MainForm;
