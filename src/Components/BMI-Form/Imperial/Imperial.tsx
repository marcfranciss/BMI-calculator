import { useState } from "react";
import "./imperial.css";
import InputComponent from "../../Utils/InputComponent/InputComponent";
import { unitLimits } from "../../Utils/data";

interface forCalculation {
  setHeight: (value: string) => void;
  setWeight: (value: string) => void;
}

const Imperial = ({ setHeight, setWeight }: forCalculation) => {
  const [warningHeight, setWarningHeight] = useState<boolean>(false);
  const [warningWeight, setWarningWeight] = useState<boolean>(false);
  const [feetValue, setFeetValue] = useState<string>("");
  const [inchesValue, setInchValue] = useState<string>("");
  const [stonesValue, setFStonesValue] = useState<string>("");
  const [poundsValue, setPoundsValue] = useState<string>("");

  // Converts stones(st) and pounds(lb) to kilogram
  // and sends it to BmiForm to calculate
  if (stonesValue != "" || poundsValue != "") {
    const convertToKg = () => {
      const stones = Number(stonesValue) * 6.35029;
      const pounds = Number(poundsValue) * 0.453592;
      const kilogramVal = stones + pounds;
      setWeight(String(kilogramVal));
    };
    convertToKg();
  }

  // Converts ft & inches to
  // and send it to BmiForm to calculate
  if (feetValue != "" || inchesValue != "") {
    const convertToCm = () => {
      const feet = Number(feetValue) * 0.3048;
      const inches = Number(inchesValue) * 0.0254;
      const centimeterVal = (feet + inches) * 100;

      setHeight(String(centimeterVal));
    };
    convertToCm();
  }
  return (
    <div className='imperial'>
      <div className='height'>
        <label htmlFor='height' className='body-s'>
          Height
        </label>
        <div className='container'>
          <div className='measurement-holder' aria-invalid={warningHeight}>
            <InputComponent
              name='height'
              maximum={unitLimits.height.ft}
              setWarning={setWarningHeight}
              sendValue={setFeetValue}
            />
            <span className='abbr heading-m'>ft</span>
          </div>
          <div className='measurement-holder' aria-invalid={warningHeight}>
            <InputComponent
              name='height'
              maximum={unitLimits.height.inch}
              setWarning={setWarningHeight}
              sendValue={setInchValue}
            />
            <span className='abbr heading-m'>in</span>
          </div>
        </div>
      </div>
      <div className='weight'>
        <label htmlFor='weight' className='body-s'>
          Weight
        </label>
        <div className='container'>
          <div className='measurement-holder' aria-invalid={warningWeight}>
            <InputComponent
              name='weight'
              maximum={unitLimits.weight.st}
              setWarning={setWarningWeight}
              sendValue={setFStonesValue}
            />
            <span className='abbr heading-m'>st</span>
          </div>
          <div className='measurement-holder' aria-invalid={warningWeight}>
            <InputComponent
              name='weight'
              maximum={unitLimits.weight.lb}
              setWarning={setWarningWeight}
              sendValue={setPoundsValue}
            />
            <span className='abbr heading-m'>lb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imperial;
