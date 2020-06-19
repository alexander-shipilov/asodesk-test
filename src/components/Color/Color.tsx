import cx from "classnames";
import React from "react";
import { ColorProps } from "./ColorProps";
import "./Color.scss";

export const Color = ({ value, className }: ColorProps) => (
  <div className={ cx("color", `color_${ value }`, className) } />
);
