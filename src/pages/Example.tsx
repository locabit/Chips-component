import React, { useState } from "react";
import "./Example.css";
import Chips from "../components/Chips";

const Example: React.FC = () => {
  const [active, setActive] = useState<number[]>([]);

  const labels = [
    "Mozzarella",
    "Tomato sauce",
    "Pepperoni",
    "Basil",
    "Cheese",
    "Garlic",
    "Pineapple",
    "Oregano",
    "Onion",
    "Tuna",
    "Fries",
    "Wurstel",
    "Ham",
  ];

  const renderChips = () => {
    return labels.map((label, index) => {
      const isActive = active.includes(index);
      const isDisabled = label === "Pineapple";
      const outline = isActive || isDisabled ? false : true;
      const iconRight = isActive ? "fa-solid fa-check" : undefined;
      const activeState = isActive ? "success" : "info";
      const state = !isDisabled ? activeState : "disabled";

      return (
        <Chips
          key={index}
          label={label}
          state={state}
          outline={outline}
          iconRight={iconRight}
          disabled={isDisabled}
          onClick={() => handleClick(index, label)}
        />
      );
    });
  };

  const handleClick = (key: number, label: string) => {
    if (label !== "Pineapple") {
      if (!active.includes(key)) {
        setActive((prevState) => [...prevState, key]);
      } else {
        setActive((prevState) => prevState.filter((index) => index !== key));
      }
    }
  };

  return (
    <div className="example-wrapper">
      <h2>Select your pizza topping</h2>
      <div className="preferences">{renderChips()}</div>
    </div>
  );
};

export default Example;
