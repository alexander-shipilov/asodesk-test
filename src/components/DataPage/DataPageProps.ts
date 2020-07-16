import { ReactNode } from "react";
import { Nullable, StyledProps } from "../../util";

export interface DataPageProps<T> extends StyledProps {
  children?: ReactNode;
  data: T;
  error: Nullable<Error>;
  loading: boolean;
  onReady?: () => void;
  onLoad: () => void;
}