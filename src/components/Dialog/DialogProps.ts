import { ReactNode } from "react";
import { StyledProps } from "../../util";

export interface DialogProps extends StyledProps {
  rootId: string,
  timeout: number,
  visible: boolean,
  title: ReactNode
  onVisibleChange: (visible: boolean) => void
}