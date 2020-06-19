import { ReactNodeLike } from "prop-types";
import { StyledProps } from "../../util";

export interface CheckBoxProps extends StyledProps {
  checked?: boolean,
  children?: ReactNodeLike,
  disabled?: boolean,
  onCheckedChange?: (checked: boolean) => void
}