import React from "react";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className='coins'>
      <h1>{name}</h1>
      <p>{symbol}</p>
      <img src={image} alt="crypto" />
      <p>${price.toLocaleString()}</p>
      <p>${volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <p>{priceChange.toFixed(2)}%</p>
      ) : (
        <p>{priceChange.toFixed(2)}%</p>
      )}
      <p>${marketcap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
