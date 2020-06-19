import cx from "classnames";
import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import { Nullable } from "../../util";
import "./Portal.scss";
import { PortalProps } from "./PortalProps";

const { assign } = Object;

const getRoot = (rootId: string): Nullable<HTMLElement> => document.getElementById(rootId);

const createRoot = (rootId: string, className: string): HTMLElement =>
  assign(document.body.appendChild(document.createElement("div")), { id: rootId, className });

const removeRoot = (rootEl: HTMLElement) => {
  if (rootEl.parentNode) {
    rootEl.parentNode.removeChild(rootEl);
  }

  return null;
};

export class Portal extends PureComponent<PortalProps> {
  private currRoot: Nullable<HTMLElement>;

  componentWillUnmount() {
    const { rootId } = this.props;

    if (rootId) {
      const root = getRoot(rootId);

      if (root) {
        removeRoot(root);
      }
    }
  }

  getRoot() {
    const { rootId } = this.props;
    const { currRoot } = this;
    let root: Nullable<HTMLElement>;

    if (rootId) {
      root = getRoot(rootId);

      if (!root || (currRoot && currRoot.id !== rootId)) {
        if (currRoot) {
          removeRoot(currRoot);
        }

        root = createRoot(rootId, cx("Portal__root", `Portal__root_${ rootId }`));
      }
    } else if (currRoot) {
      root = removeRoot(currRoot);
    }

    return root;
  }

  render() {
    const { className, rootId, style, ...rest } = this.props;
    const root = this.getRoot();

    if (!root) {
      return null;
    }

    return createPortal(<div { ...rest } className={ cx("Portal", className) } style={ style } />, root);
  }
}
