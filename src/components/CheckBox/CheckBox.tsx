import cx from "classnames";
import React, { ChangeEvent, createRef, PureComponent, RefObject } from "react";
import "./CheckBox.scss";
import { CheckBoxProps } from "./CheckBoxProps";

export class CheckBox extends PureComponent<CheckBoxProps> {
  private inputRef: RefObject<HTMLInputElement> = createRef();

  public componentDidMount(): void {
    this.setIndeterminateProp();
  }

  public componentDidUpdate(prevProps: CheckBoxProps): void {
    if (this.props.checked !== prevProps.checked) {
      this.setIndeterminateProp();
    }
  }

  renderInput() {
    const { checked, disabled, onCheckedChange, ...props } = this.props;

    return (
      <input
        { ...props }
        ref={ this.inputRef }
        type='checkbox'
        checked={ checked == null ? undefined : checked }
        disabled={ disabled }
        className={ cx("CheckBox__input") }
        onChange={ this.onChange }
      />
    );
  }

  renderMark() {
    const { checked } = this.props;
    const className = cx("CheckBox__mark", {
      "CheckBox__mark_checked": checked === true,
      "CheckBox__mark_indeterminate": checked == null
    });

    return (
      <span className={ className } />
    );
  }

  render() {
    const { checked, disabled, children, onCheckedChange, ...props } = this.props;
    const className = cx(props.className, "CheckBox", {
      "CheckBox_disabled": disabled,
      "CheckBox_checked": checked === true,
      "CheckBox_indeterminate": checked == null
    });

    return (
      <label { ...props } className={ className }>
        { this.renderInput() }
        { this.renderMark() }
        <span className={"CheckBox__label"}>
          { children }
        </span>
      </label>
    );
  }

  private onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onCheckedChange } = this.props;

    if (onCheckedChange) {
      onCheckedChange(event.target.checked);
    }
  };

  private setIndeterminateProp() {
    const { current: inputEl } = this.inputRef;

    if (inputEl) {
      const { checked } = this.props;

      inputEl.indeterminate = (checked == null);
    }
  }
}

