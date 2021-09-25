//Import functionality
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import axios from "axios";
import Coin from "./Views/Coin";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import SideBar from './Components/SideBar';
import AboutUsView from './Views/AboutUsView';

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
      <>
        <SideBar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeView} />
            {/* <Route exact path = "/" component={HomeView}/> */}
          </Switch>
        </BrowserRouter>
      </>
      {filteredCoins.map((coin) => {
        console.log(coin);
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}

    <SideBar/>
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component={HomeView}/>
        <Route exact path = "/aboutus" component={AboutUsView}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
