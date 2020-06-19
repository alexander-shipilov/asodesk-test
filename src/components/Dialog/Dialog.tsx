import cx from "classnames";
import React, { PureComponent } from "react";
import { IoMdClose as CloseIcon } from "react-icons/io";
import "./Dialog.scss";
import { DialogPortal } from "./DialogPortal";
import { DialogProps } from "./DialogProps";

export class Dialog extends PureComponent<DialogProps> {
  static defaultProps: Partial<DialogProps> = {
    rootId: ""
  };

  onCloseClick = () => {
    const { onVisibleChange } = this.props;

    if (typeof onVisibleChange === "function") {
      onVisibleChange(false);
    }
  };

  renderClose() {
    return (
      <CloseIcon onClick={ this.onCloseClick } className='Dialog__close' />
    );
  }

  renderHeader() {
    const { title } = this.props;

    return (
      <header className='Dialog__header'>
        <div className='Dialog__title'>
          { title }
        </div>
        { this.renderClose() }
      </header>
    );
  }

  renderContent() {
    const { children } = this.props;

    return (
      <div className='Dialog__content'>
        { children }
      </div>
    );
  }

  renderDialog() {
    const { className } = this.props;

    return (
      <section className={ cx("Dialog", className) }>
        { this.renderHeader() }
        { this.renderContent() }
      </section>
    );
  }

  render() {
    const { rootId, timeout, visible } = this.props;

    return (
      <DialogPortal rootId={ rootId } timeout={ timeout }>
        { visible ? this.renderDialog() : null }
      </DialogPortal>
    );
  }
}
