import { ComponentType, ReactNode } from "react";
import { RouteChildrenProps, RouteComponentProps } from "react-router-dom";

export type DialogRouteRenderer = (props: RouteChildrenProps<any>) => ReactNode;

export interface DialogRouteProps extends RouteComponentProps {
  title: ReactNode;
  rootId: string;
  path: string;
  closePath: string;
  component?: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  render?: DialogRouteRenderer;
  children?: ReactNode | DialogRouteRenderer;
  timeout: number
}