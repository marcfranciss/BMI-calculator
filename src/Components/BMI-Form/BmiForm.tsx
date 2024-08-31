import { ChangeEvent, useEffect, useState } from "react";
import "../bmiForm.css";
import Metric from "./Metric/Metric";
import Imperial from "./Imperial/Imperial";
import { idealWeightChecker } from "../Utils/idealWeight";

interface idealW {
  female: { min: string; max: string };
  male: { min: string; max: string };
}
const BmiForm = () => {
  const [selectedRadio, setSelectedRadio] = useState<string>("metric");
  const [userHeight, setUserHeight] = useState<string>("");
  const [userWeight, setUserWeight] = useState<string>("");
  const [resultBMI, setResultBMI] = useState<string>("");
  const [classification, setClassification] = useState<string>("");
  const [idealWeight, setIdealWeight] = useState<idealW | undefined>(undefined);

  useEffect(() => {
    const calculateBMI = (height: string, weight: string) => {
      if (height != "" && weight != "") {
        const calcHeight = Number(height);
        const calcWeight = Number(weight);
        const result = (calcWeight / (calcHeight / 100) ** 2).toFixed(1);
        setResultBMI(result);
      }
    };
    calculateBMI(userHeight, userWeight);
  }, [userHeight, userWeight]);

  useEffect(() => {
    const checkClassification = (userBMI: string) => {
      if (userBMI != "") {
        const convertedBMI = Number(userBMI);
        if (convertedBMI < 18.5) {
          setClassification("underweight");
        } else if (convertedBMI >= 18.5 && convertedBMI < 24.9) {
          setClassification("healthy weight");
        } else if (convertedBMI >= 25 && convertedBMI <= 29.9) {
          setClassification("overweight");
        } else if (convertedBMI > 29.9) {
          setClassification("obese");
        } else {
          console.error("BMI is out of range.");
        }
      }
    };
    checkClassification(resultBMI);
  }, [resultBMI]);

  useEffect(() => {
    const suggestedWeight = idealWeightChecker(Number(userHeight));
    console.log(`Your ideal weight is ${suggestedWeight}`);
    setIdealWeight(suggestedWeight);
  }, [userHeight]);
  const handleRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelectedRadio(value);
    setResultBMI("");
    setUserHeight("");
    setUserWeight("");
  };

  const handleHeightChange = (value: string) => {
    setUserHeight(value);
  };
  const handleWeightChange = (value: string) => {
    setUserWeight(value);
  };
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
              {idealWeight ? (
                <p className='body-s'>
                  Your BMI suggests you’re {classification}. Your ideal weight
                  is between
                  <strong>
                    {" "}
                    {idealWeight.female.min} to {idealWeight.female.max} for
                    female
                  </strong>{" "}
                  and{" "}
                  <strong>
                    {" "}
                    {idealWeight.male.min} to {idealWeight.male.max} for male
                  </strong>
                  .
                </p>
              ) : (
                "Your height or weight is not in the range for BMI calculations"
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BmiForm;
