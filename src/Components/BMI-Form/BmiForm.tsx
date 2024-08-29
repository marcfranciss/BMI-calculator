import { ChangeEvent, useEffect, useState } from "react";
import "../bmiForm.css";
import Metric from "./Metric/Metric";
import Imperial from "./Imperial/Imperial";

const BmiForm = () => {
  const [selectedRadio, setSelectedRadio] = useState<string>("");
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [resultBMI, setResultBMI] = useState("");

  useEffect(() => {
    const calculateBMI = () => {
      const calcHeight = Number(userHeight);
      const calcWeight = Number(userWeight);

      return (calcWeight / (calcHeight / 100) ** 2).toFixed(1);
    };
    setResultBMI(calculateBMI);
  }, [userHeight, userWeight]);
  function handleRadio(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setResultBMI("");
    setUserHeight("");
    setUserWeight("");
    setSelectedRadio(value);
  }

  function handleHeightChange(value: string) {
    setUserHeight(value);
  }
  function handleWeightChange(value: string) {
    setUserWeight(value);
  }
  return (
    <div className='bmi-calculator'>
      <h2 className='heading-m'>Enter your details below</h2>
      <div className='unit-selectors'>
        <label htmlFor='units' className='body-m-b'>
          <input
            type='radio'
            name='units'
            id='metric'
            value='metric'
            onChange={handleRadio}
            defaultChecked
          />
          Metric
        </label>
        <label htmlFor='units' className='body-m-b'>
          <input
            type='radio'
            name='units'
            id='imperial'
            value='imperial'
            onChange={handleRadio}
          />
          Imperial
        </label>
      </div>
      {selectedRadio == "metric" || selectedRadio == "" ? (
        <Metric setHeight={handleHeightChange} setWeight={handleWeightChange} />
      ) : selectedRadio == "imperial" ? (
        <Imperial
          setHeight={handleHeightChange}
          setWeight={handleWeightChange}
        />
      ) : (
        ""
      )}
      <div className='bmi-result_container'>
        {userHeight == "" || userWeight == "" ? (
          <div className='bmi-welcome'>
            <h2 className='heading-m'>Welcome!</h2>
            <p className='body-s'>
              Enter your height and weight and you'll see your BMI result here.
            </p>
          </div>
        ) : (
          <div className='bmi-result'>
            <div className='bmi-result_count'>
              <h3 className='body-m-b'>Your BMI is...</h3>
              <h4 className='heading-xl'>{resultBMI}</h4>
            </div>
            <div className='bmi-result_sugg'>
              <p className='body-s'>
                Your BMI suggests you’re a healthy weight. Your ideal weight is
                between <strong>9st 6lbs - 12st 10lbs</strong>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiForm;
