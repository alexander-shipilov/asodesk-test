import { ReactNodeLike } from "prop-types";
import { StyledProps } from "../../util";

export interface DialogProps extends StyledProps {
  rootId: string,
  timeout: number,
  visible: boolean,
  title: ReactNodeLike
  onVisibleChange: (visible: boolean) => void
}