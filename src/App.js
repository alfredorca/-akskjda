//Import functionality
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar";
// import "./App.css";
import AboutUsView from "./Views/AboutUsView";
import SingleCoinView from './Views/SingleCoinView'

//Import Views
import HomeView from "./Views/HomeView";

function App() {
  return (
    <>
      <SideBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/aboutus" component={AboutUsView} />
          <Route exact path="/coins/:id" component={SingleCoinView} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
