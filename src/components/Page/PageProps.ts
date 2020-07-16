import { ReactNode } from "react";
import { StyledProps } from "../../util";

export interface PageProps extends StyledProps {
  title?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  menu?: ReactNode;
  loading: boolean;
}