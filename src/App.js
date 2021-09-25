//Import functionality
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import axios from "axios";
import Coin from "./Views/Coin";
import "./App.css";
import AboutUsView from "./Views/AboutUsView";

//Import Views
import HomeView from "./Views/HomeView";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => alert("error"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SideBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/aboutus" component={AboutUsView} />
          {/* <Route exact path = "/" component={HomeView}/> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
