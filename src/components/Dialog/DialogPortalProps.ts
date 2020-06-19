import { ReactElement } from "react";
import { Nullable, StyledProps } from "../../util";

export interface DialogPortalProps extends StyledProps {
  children?: Nullable<ReactElement>,
  rootId: string,
  timeout: number
}