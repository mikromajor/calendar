import {
  ControlPanel,
  Display,
  AlcoHeader,
  Calendar,
} from "./index";

export const AlcoCounter = () => {
  return (
    <section className='alco-counter '>
      <AlcoHeader />
      <Display />
      <Calendar />
      <ControlPanel />
    </section>
  );
};
