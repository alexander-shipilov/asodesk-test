import { ReactNodeLike } from "prop-types";
import { Nullable, StyledProps } from "../../util";

export interface DataPageProps<T> extends StyledProps {
  children?: ReactNodeLike;
  data: T;
  error: Nullable<Error>;
  loading: boolean;
  onReady?: () => void;
  onLoad: () => void;
}