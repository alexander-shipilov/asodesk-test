import cx from "classnames";
import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "../Button";
import "./DataPage.scss";
import { Page } from "../Page";
import { DataPageProps } from "./DataPageProps";

export class DataPage extends PureComponent<DataPageProps> {
  componentDidMount(): void {
    const { onReady } = this.props;

    if (onReady) {
      onReady();
    }
  }

  renderError() {
    const { error, loading, onLoad } = this.props;

    if (error) {
      return (
        <div className={ cx("DataPage__error") }>
          <div className={ cx("DataPage__error-message") }>
            { error.message || String(error) }
          </div>

          <Button disabled={ loading } className={ cx("DataPage__reload") } onClick={ onLoad }>
            <FormattedMessage id={ "data-page.reload.text" } defaultMessage={ "Reload" } />
          </Button>
        </div>
      );
    }
  }

  render() {
    const { error, children, onReady, onLoad, ...rest } = this.props;
    const className = cx(rest.className, "DataPage", {
      "DataPage_error": error != null
    });

    return (
      <Page { ...rest } className={ className }>
        { children }
        { this.renderError() }
      </Page>
    );
  }
}