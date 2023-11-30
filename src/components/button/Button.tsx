import React from "react";
import "./button.css";
import classNames from "classnames";

interface ButtonProps {
  text?: string;
  size?: "small" | "medium" | "large";
  borders?: "squared" | "rounded";
  isDisabled?: boolean;
  load?: boolean;
  color?: "primary" | "link" | "info" | "success" | "warning" | "danger";
  outlined?: boolean;
  iconPosition?: "left" | "right" | "no-text";
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  size,
  borders,
  isDisabled = false,
  load = false,
  color,
  outlined = false,
  iconPosition,
  children,
  onClick,
}) => {
  const btnStyle = classNames(
    "button-style",
    { "btn-primary": color === "primary" && outlined == false },
    { "btn-link": color === "link" && outlined == false },
    { "btn-success": color === "success" && outlined == false },
    { "btn-info": color === "info" && outlined == false },
    { "btn-warning": color === "warning" && outlined == false },
    { "btn-danger": color === "danger" && outlined == false },

    { "out-normal": outlined == true },
    { "out-primary": color === "primary" && outlined == true },
    { "out-link": color === "link" && outlined == true },
    { "out-info": color === "info" && outlined == true },
    { "out-success": color === "success" && outlined == true },
    { "out-warning": color === "warning" && outlined == true },
    { "out-danger": color === "danger" && outlined == true },

    { "txt-small": size === "small" },
    { "txt-medium": size === "medium" },
    { "txt-large": size === "large" },

    { "disabled-style": isDisabled === true },
    { "btn-loading": load === true },

    { "squared-style": borders === "squared" },
    { "rounded-style": borders === "rounded" },

    { "btn-icon-left": iconPosition === "left" },
    { "btn-icon-right": iconPosition === "right" },
    { "no-text": iconPosition === "no-text" }
  );

  return (
    <>
      <button className={btnStyle} disabled={isDisabled} onClick={onClick}>
        {text} {children}
      </button>
    </>
  );
};

export default Button;
