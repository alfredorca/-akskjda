import axios from "axios";
import Coin from "./Coin";
import Banner from "../Components/Banner";
import { useState, useEffect } from "react";

const HomeView = () => {
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

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const featuredCoins = filteredCoins.slice(0, 3);
  return (
    <div>
      <Banner />
      <div className="card-container">
        {featuredCoins.map((coin) => {
          return <Coin featured={true} coin={coin} />;
        })}
      </div>

      <div className="card-container">
        {filteredCoins.map((coin, idx) => {
          if (idx < 3) return;
          return <Coin featured={false} coin={coin} />;
        })}
      </div>
    </div>
  );
};

export default HomeView;
