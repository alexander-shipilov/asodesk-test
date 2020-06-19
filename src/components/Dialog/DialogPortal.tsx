import cx from "classnames";
import React, { Children, cloneElement, PureComponent, ReactElement } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Portal } from "../Portal";

import "./DialogPortal.scss";
import { DialogPortalProps } from "./DialogPortalProps";

export class DialogPortal extends PureComponent<DialogPortalProps> {
  renderElement(element: ReactElement) {
    const { className, style } = element.props;
    const { timeout } = this.props;

    return (
      <CSSTransition timeout={ timeout } classNames='DialogPortal__dialog'>
        {
          cloneElement(element, {
            className: cx("DialogPortal__dialog", className),
            style: { ...style, transitionDuration: `${ timeout }ms` }
          })
        }
      </CSSTransition>
    );
  }

  render() {
    const { children, className, rootId, timeout } = this.props;

    return (
      <Portal rootId={ `dialog${ rootId }` }
        className={ cx("DialogPortal", { "DialogPortal_hidden": children == null }, className) }
        style={ { transitionDuration: `${ timeout }ms` } }>

        <TransitionGroup component={ null } className='DialogPortal__dialogs'>
          { children ? this.renderElement(Children.only(children)) : null }
        </TransitionGroup>

      </Portal>
    );
  }
}
