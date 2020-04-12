import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducer/rootReducer";
import HomePage from "./HomePage";
import PageNotFound from "./PageNotFound";

const store = createStore(rootReducer);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage />} />
                        <Route render={() => <PageNotFound />} />
                    </Switch>
                </Provider>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
