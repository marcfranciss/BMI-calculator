import { useState } from "react";
import "./metric.css";
import InputComponent from "../../Utils/InputComponent/InputComponent";

interface forCalculation {
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
}

const Metric = ({ setHeight, setWeight }: forCalculation) => {
  const [warningHeight, setWarningHeight] = useState<boolean>(false);
  const [warningWeight, setWarningWeight] = useState<boolean>(false);

  return (
    <div className='metric'>
      <div className='height'>
        <label htmlFor='height' className='body-s'>
          Height
        </label>
        <div className='measurement-holder' aria-invalid={warningHeight}>
          <InputComponent
            name='height'
            maximum={280}
            setWarning={setWarningHeight}
            sendValue={setHeight}
          />
          <span className='abbr heading-m'>cm</span>
        </div>
      </div>
      <div className='weight'>
        <label htmlFor='weight' className='body-s'>
          Weight
        </label>
        <div className='measurement-holder' aria-invalid={warningWeight}>
          <InputComponent
            name='weight'
            maximum={700}
            setWarning={setWarningWeight}
            sendValue={setWeight}
          />
          <span className='abbr heading-m'>kg</span>
        </div>
      </div>
    </div>
  );
};

export default Metric;
