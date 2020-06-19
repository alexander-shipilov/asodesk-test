import { HTMLAttributes } from "react";

export interface NumericalProps extends HTMLAttributes<HTMLSpanElement> {
  value: number;
}