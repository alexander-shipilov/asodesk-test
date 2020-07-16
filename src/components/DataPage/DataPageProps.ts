import { Nullable } from "../../util";
import { PageProps } from "../Page";

export interface DataPageProps extends PageProps {
  error: Nullable<Error>;
  onReady?: () => void;
  onLoad: () => void;
}