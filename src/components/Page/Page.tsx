import cx from "classnames";
import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import "./Page.scss";
import { PageProps } from "./PageProps";

export class Page extends PureComponent<PageProps> {
  renderLoading() {
    const { loading } = this.props;

    return (
      <div className={ cx("Page__loader", { "Page__loader_visible": loading }) }>
        <FormattedMessage id={ "data-page.loading.text" } defaultMessage={ "Loading..." } />
      </div>
    );
  }

  renderHeader() {
    const { title, actions } = this.props;

    return (
      <header className='Page__header'>
        <h1 className='Page__title'>{ title }</h1>
        <div className='Page__actions'>{ actions }</div>
      </header>
    );
  }

  renderMenu() {
    const { menu } = this.props;

    return (
      <aside className='Page__menu'>
        { menu }
      </aside>
    );
  }

  renderContent() {
    const { children } = this.props;

    return (
      <div className='Page__content'>
        { children }
      </div>
    );
  }

  render() {
    const { children, loading, ...rest } = this.props;
    const className = cx(rest.className, "Page", {
      "Page_loading": loading
    });

    return (
      <main className={ className }>
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderMenu()}
        { this.renderLoading() }
      </main>
    );
  }
}