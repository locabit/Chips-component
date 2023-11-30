import React, { useState } from "react";
import "./Example.css";
import Chips from "../components/Chips";
import Button from "../components/button/Button";
import TextField from "../components/textfield/TextField";

const Example2: React.FC = () => {
  const [value, setValue] = useState("");
  const [labels, setLabels] = useState<string[]>([]);
  const uniqueLabels = Array.from(new Set(labels));

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.currentTarget.value;
    setValue(currentValue.toLowerCase());
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setLabels((prevState) => [...prevState, value]);
    setValue("");
  };

  const handleClickDelete = (label: string) => {
    setLabels((prevState) => prevState.filter((item) => item !== label));
  };

  const renderChips = () => {
    return uniqueLabels.map((label, index) => {
      if (
        label.trim().length !== 0 &&
        label !== "pineapple" &&
        label !== "ananas"
      ) {
        return (
          <div className="chip-button">
            <Chips key={index} label={label} state="primary" />
            <div className="btn-x">
              <Button
                text="X"
                color="danger"
                onClick={() => handleClickDelete(label)}
              />
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div className="example-wrapper">
      <h2>Type your pizza topping</h2>
      <p>Don't type pineapple or ananas</p>
      <div className="text-button">
        <TextField
          label="Type your preference"
          placeHolder="Type here"
          inputValue={value}
          size="medium"
          state="primary"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(e)
          }
        />
        <div className="submit-button">
          <Button text="submit" color="primary" onClick={handleClick} />
        </div>
      </div>
      <div className="preferences">{renderChips()}</div>
    </div>
  );
};

export default Example2;
