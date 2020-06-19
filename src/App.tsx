import React, { FunctionComponent } from "react";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Store } from "redux";
import "./App.css";
import messages from "./messages";
import { AppState } from "./modules/app";
import { StatsRoute } from "./routes/stats";

export interface AppProps {
  store: Store<AppState>
}

export const Empty = () => (
  <div />
);

export const App: FunctionComponent<AppProps> = ({ store }: AppProps) => {
  return (
    <Provider store={ store }>
      <IntlProvider locale={ "en-US" } messages={ messages }>
        <BrowserRouter>
          <div className='App'>
            <Switch>
              <Route path='/stats/' component={ StatsRoute } />
              <Route path='/explore/:keyword' component={ Empty } />
              <Redirect to='/stats/' />
            </Switch>
          </div>
        </BrowserRouter>
      </IntlProvider>
    </Provider>
  );
};
