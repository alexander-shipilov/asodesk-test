import cx from "classnames";
import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import { Button } from "../Button";
import "./DataPage.scss";
import { DataPageProps } from "./DataPageProps";

export class DataPage<T> extends PureComponent<DataPageProps<T>> {
  componentDidMount(): void {
    const { onReady } = this.props;

    if (onReady) {
      onReady();
    }
  }

  renderLoading() {
    const { loading } = this.props;

    return (
      <div className={ cx("DataPage__loading", { "DataPage__loading_visible": loading }) }>
        <FormattedMessage id={ "data-page.loading.text" } defaultMessage={ "Loading..." } />
      </div>
    );
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
    const { data, error, loading, children, onReady, onLoad, ...rest } = this.props;
    const className = cx(rest.className, "DataPage", {
      "DataPage_loading": loading,
      "DataPage_error": error != null,
      "DataPage_data": data != null
    });

    return (
      <div { ...rest } className={ className }>
        { children }
        { this.renderLoading() }
        { this.renderError() }
      </div>
    );
  }
}