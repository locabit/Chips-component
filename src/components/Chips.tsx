import React from "react";
import "./chips.css";

export interface ChipsProps {
  label: string;
  size?: "small" | "medium" | "large";
  border?: "rounded" | "squared";
  iconLeft?: string;
  iconRight?: string;
  state?:
    | "info"
    | "link"
    | "primary"
    | "success"
    | "error"
    | "warning"
    | "disabled";
  outline?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Chips: React.FC<ChipsProps> = ({
  label,
  size,
  border,
  iconLeft,
  iconRight,
  state,
  outline,
  onClick,
  disabled,
}) => {
  const isOutline = (outline: boolean | undefined) => {
    return Boolean(outline) && "outline";
  };

  const isDisabled = (disabled: boolean | undefined) => {
    return Boolean(disabled) && "disabled";
  };

  return (
    <div className="chips-wrapper">
      <button
        className={`chips 
                  ${isDisabled(disabled)} 
                  ${isOutline(outline)} 
                  ${size}-chips 
                  ${border}-chips`}
        data-state={state}
        onClick={onClick}
      >
        {iconLeft && <span className={`${iconLeft} icon-left`} />}
        {label}
        {iconRight && <span className={`${iconRight} icon-right`} />}
      </button>
    </div>
  );
};

export default Chips;
