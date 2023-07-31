import Home from "./components/Home";
import PropertiesList from "./components/PropertiesList";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/houses">
          <PropertiesList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
