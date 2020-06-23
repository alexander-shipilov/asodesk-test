import React, { Children, cloneElement, Component, ComponentClass, createElement, ReactElement } from "react";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import { Dialog } from "./Dialog";
import { DialogRouteProps, DialogRouteRenderer } from "./DialogRouteProps";
import { DialogRouteState } from "./DialogRouteState";

export const DialogRoute = withRouter<DialogRouteProps, ComponentClass<DialogRouteProps>>(
  class DialogRoute extends Component<DialogRouteProps, DialogRouteState> {
    static defaultProps = {
      timeout: 300
    };

    state: DialogRouteState = { visible: false };

    componentDidMount() {
      this.setShowTimeout();
    }

    componentWillUnmount() {
      this.clearHideTimeout();
      this.clearShowTimeout();
    }

    hideTimeout: NodeJS.Timeout | null = null;

    showTimeout: NodeJS.Timeout | null = null;

    close() {
      const { history, closePath } = this.props;

      setTimeout(() => Promise.resolve().then(() => history.push(closePath)), 0);
    }

    open() {
      const { visible } = this.state;

      if (!visible) {
        this.setState({ visible: true });
      }
    }

    handleHideTimeout = () => {
      this.hideTimeout = null;
      this.close();
    };

    setHideTimeout() {
      const { timeout } = this.props;

      this.clearShowTimeout();

      if (!this.hideTimeout) {
        this.hideTimeout = setTimeout(this.handleHideTimeout, timeout);
      }
    }

    clearHideTimeout() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    }

    handleShowTimeout = () => {
      this.showTimeout = null;
      this.open();
    };

    setShowTimeout() {
      this.clearHideTimeout();

      if (!this.showTimeout) {
        this.showTimeout = setTimeout(this.handleShowTimeout, 0);
      }
    }

    clearShowTimeout() {
      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = null;
      }
    }

    handleDialogVisibleChange = (visible: boolean) => {
      if (!visible) {
        this.setState({ visible });
        this.setHideTimeout();
      }
    };

    handleComponentClose = () => {
      this.handleDialogVisibleChange(false);
    };

    renderChild = (routeProps: RouteComponentProps) => {
      const { children, component, render } = this.props;
      const childProps = { ...routeProps, onClose: this.handleComponentClose };

      if (component) {
        return createElement(component, childProps);
      }
      if (render) {
        return render(childProps);
      }

      if (typeof children === "function") {
        return (children as DialogRouteRenderer)(childProps);
      }

      if (children && Children.count(children) !== 0) {
        return cloneElement(Children.only(children) as ReactElement, childProps);
      }
    };

    renderDialog = (routeProps: RouteComponentProps) => {
      const { visible } = this.state;
      const { rootId, timeout, title } = this.props;

      return (
        <Dialog rootId={ rootId } title={ title } timeout={ timeout } visible={ visible }
          onVisibleChange={ this.handleDialogVisibleChange }>
          { this.renderChild(routeProps) }
        </Dialog>
      );
    };

    render() {
      return <Route render={ this.renderDialog } />;
    }
  }
);
