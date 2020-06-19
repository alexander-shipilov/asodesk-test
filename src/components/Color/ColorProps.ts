import { HTMLAttributes } from "react";

export interface ColorProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
}