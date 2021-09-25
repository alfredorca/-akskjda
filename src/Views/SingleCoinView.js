import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleCoinView = ({match}) => {
  const [coin, setCoin] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    getSingleCoin();
  }, [id]);

  const getSingleCoinFromApi = async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`);
    return response;
  }

  const getSingleCoin = async () => {
    const response = await getSingleCoinFromApi(id);
    setCoin(response.data[0]);
  }
console.log(coin)
  // console.log(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`);

  return (
    <>
    
    {coin &&
  (<div style={{marginLeft: '300px'}}>
     <h2>{coin.name}</h2>
      <img src={coin.image} alt="logo" />
      <p>Price: ${coin.current_price}</p> 
      <p>Market Cap: ${coin.market_cap}</p> 
      <p>Market Cap Rank: {coin.market_cap_rank}</p> 
      <p>Total Volume: {coin.total_volume}</p> 
      <p>24 Hour High: ${coin.high_24h}</p> 
      <p>24 Hour Low: ${coin.low_24h}</p> 
      <p>24 Hour Price Change: ${coin.price_change_24h}</p>
      <p>Price Change Percent: {coin.price_change_percentage_24h}%</p>
      <p>24 Hour Market Cap Change: ${coin.market_cap_change_24h}%</p> 
      <p>Market Cap Change Percent: {coin.market_cap_change_percentage_24h}%</p> 
      <p>Circulating Supply: {coin.circulating_supply}</p> 
      <p>Total Supply: {coin.total_supply}</p> 
      <p>Max Supply: {coin.max_supply}</p> 
    </div>)}
   </>
  )
}

export default SingleCoinView;