import Home from "./components/Home";
import PropertiesList from "./components/PropertiesList";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import DetailView from "./components/DetailView";

function App() {
  const house = {
    id: 1,
    house_type: "One Bedroom",
    rent: 10000,
    city: "Nairobi",
    location: "Buruburu",
    building: "Jimlizer Apartment",
    floor: 2,
    coordinates: "https://map.google.com/",
    other_info: "24 hour security, water and parking available",
    phone: "+254711223344",
    owner: "Brian",
  };
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/houses">
          <PropertiesList house={house} />
        </Route>
        <Route path={`/houses/:propertyId`}>
          <DetailView house={house} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
