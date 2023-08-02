import Home from "./components/Home";
import PropertiesList from "./components/PropertiesList";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import DetailView from "./components/DetailView";
import { useEffect, useState } from "react";
import { baseUrl } from "./global_vars";

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/properties`)
      .then((response) => response.json())
      .then((data) => setProperties(data));
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/houses">
          <PropertiesList properties={properties} />
        </Route>
        <Route path="/houses/:propertyId">
          <DetailView properties={properties} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
