import React from "react";
import "./styles/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage";
import Menubar from "./components/Menubar";
import HomePage from "./Pages/HomePage";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import ResearchPage from "./Pages/ResearchPage";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Menubar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/course" exact component={Courses} />
          <Route path="/research" exact component={ResearchPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
