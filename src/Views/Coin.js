import React from "react";
import { Paper } from "@mui/material";

const Coin = ({ featured, coin }) => {
  return (
    <Paper
      onClick={() => {
        window.location.href = `/coins/${coin.id}`;
      }}
      className={featured ? "featured-card" : "card"}
    >
      <div className="card-top">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: `url(${coin.image})`,
              backgroundSize: "cover",
              height: "35px",
              width: "35px",
            }}
          />
          <div className="card-name">{coin.name}</div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-row">
          <div className="card-text title">Price</div>
          <div className="card-text reg">{coin.current_price}</div>
        </div>
        <div className="card-row">
          <div className="card-text title">High</div>
          <div className="card-text reg">{coin.high_24h}</div>
        </div>
        <div className="card-row">
          <div className="card-text title">Symbol</div>
          <div className="card-text reg">{coin.symbol}</div>
        </div>
      </div>
    </Paper>
  );
};

export default Coin;

// <div className="coins">
//   <a href={`/coins/${id}`}>
//     <h1>{name}</h1>
//   </a>
//   <p>{symbol}</p>
//   <a href={`/coins/${id}`}>
//     <img src={image} alt="crypto" />
//   </a>
//   <p>${price.toLocaleString()}</p>
//   <p>${volume.toLocaleString()}</p>
//   {priceChange < 0 ? (
//     <p>{priceChange.toFixed(2)}%</p>
//   ) : (
//     <p>{priceChange.toFixed(2)}%</p>
//   )}
//   <p>${marketcap.toLocaleString()}</p>
// </div>
