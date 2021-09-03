import News from "./components/News";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(25);

  const updateProgress = (progress) => {
    setProgress(progress);
  };

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
        <Switch>
          <Route exact path="/">
            <News setProgress={updateProgress} key="general" apiKey={apiKey} country="in" category="general" />
          </Route>
          <Route exact path="/entertainment">
            <News setProgress={updateProgress} key="entertainment" apiKey={apiKey} country="in" category="entertainment" />
          </Route>
          <Route exact path="/sports">
            <News setProgress={updateProgress} key="sports" apiKey={apiKey} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News setProgress={updateProgress} key="technology" apiKey={apiKey} country="in" category="technology" />
          </Route>
          <Route exact path="/health">
            <News setProgress={updateProgress} key="health" apiKey={apiKey} country="in" category="health" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
