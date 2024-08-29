import { ChangeEvent, useState } from "react";

interface InputComponentProps {
  name: string;
  maximum: number;
  setWarning: (arg: boolean) => void;
  sendValue: (value: string) => void;
}

const InputComponent = ({
  name,
  maximum,
  setWarning,
  sendValue,
}: InputComponentProps) => {
  const [value, setValue] = useState<string>("");
  function handleValue(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    const checkedValue = value.replace(/^0+/, "");

    if (checkedValue === "" || parseInt(checkedValue, 10) > maximum) {
      setValue(checkedValue);
      setWarning(true);
    } else {
      setValue(checkedValue);
      setWarning(false);
      sendValue(value);
    }
  }
  return (
    <input
      type='number'
      name={name}
      id={name}
      min='1'
      max={maximum}
      value={value}
      onChange={handleValue}
      className='heading-m'
      placeholder='0'
    />
  );
};

export default InputComponent;
