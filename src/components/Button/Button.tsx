import cx from "classnames";
import React from "react";
import { ButtonProps } from "./ButtonProps";
import "./Button.scss";

export const Button = ({ asLink, ...rest }: ButtonProps) => {
  const className = cx(asLink ? "Link" : "Button", rest.className);

  return (
    <button { ...rest } className={ className } />
  );
};
