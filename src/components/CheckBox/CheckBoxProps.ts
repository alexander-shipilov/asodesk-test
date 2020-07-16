import { ReactNode } from "react";
import { StyledProps } from "../../util";

export interface CheckBoxProps extends StyledProps {
  checked?: boolean,
  children?: ReactNode,
  disabled?: boolean,
  onCheckedChange?: (checked: boolean) => void
}