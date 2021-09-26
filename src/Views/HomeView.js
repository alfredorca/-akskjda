import axios from "axios";
import Coin from "./Coin";
import Banner from "../Components/Banner";
import { useState, useEffect } from "react";
import { filter } from "dom-helpers";

import CarouselComponent from "../Components/CarouselComponent";


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

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const featuredCoins = filteredCoins.slice(0, 3);

  console.log(featuredCoins.length);
  console.log(filteredCoins.length);
  return (
    <div className="home-main">
      <Banner />
      <div
        style={{
          marginLeft: "200px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          width: "auto",
        }}
      >
        <form>
          <input
            style={{
              width: "500px",
              borderRadius: "15px",
              border: "none",
              outline: "none",
              height: "20px",
              padding: "25px",
            }}
            type="text"
            placeholder="Search Crypto"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>

      {filteredCoins.length === 0 && featuredCoins.length === 0 ? (
        <div
          style={{
            marginLeft: "200px",
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            width: "auto",
            fontFamily: "Poppins",
          }}
        >
          No coin matches your search
        </div>
      ) : (
        <>
          <div className="card-container">
            {featuredCoins.map((coin) => {
              return <Coin key={coin.id} featured={true} coin={coin} />;
            })}
          </div>

          <div className="card-container">
            {filteredCoins.map((coin, idx) => {
              if (idx < 3) return;
              return <Coin key={coin.id} featured={false} coin={coin} />;
            })}
          </div>
        </>
      )}
<>

    <CarouselComponent/>
    <div className="card-container">
      {filteredCoins.map((coin) => {
        console.log(coin);
        return <Coin coin={coin} />;
      })}
    </div>
    </>
  );
};

export default HomeView;
