import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import reducers from "./reducers";
import promise from "redux-promise";

import AddJobs from "./components/add-job"
import JobDisplay from "./components/jobs-display"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

    <Router>
        <Switch>
            <Route exact path="/" component={JobDisplay}/>
            < Route exact path="/add" component={AddJobs}/>
        </Switch>

    </Router>

</Provider>, document.querySelector("#root"));
