import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { Home } from "./pages/Home";
import View from "./pages/View";
import Add from "./pages/Add";
import { Loader } from "./pages/Loader";

import "./i18n";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const App = () => (
  <Suspense fallback={<Loader />}>
    <Provider store={Store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={Add} />
          <Route path="/view/:id" component={View} />
        </Router>
      </div>
    </Provider>
  </Suspense>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
