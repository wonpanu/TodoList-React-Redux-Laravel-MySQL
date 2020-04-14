import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../reducer/rootReducer";
import HomePage from "./HomePage/HomePage";
import PageNotFound from "./NotFoundPage/PageNotFound";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";

const store = createStore(rootReducer);
const auth = false;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() =>
                                auth ? <HomePage /> : <Redirect to="/signin" />
                            }
                        />
                        <Route path="/signin" render={() => <SignInPage />} />
                        <Route path="/signup" render={() => <SignUpPage />} />
                        <Route render={() => <PageNotFound />} />
                    </Switch>
                </Provider>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
