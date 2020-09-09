import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path={["/about", "/"]}>
            <About />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          {/* <Route exact path="/contact">
            <Contact />
          </Route> */}
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
