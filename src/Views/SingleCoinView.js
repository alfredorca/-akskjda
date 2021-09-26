import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleView from "../Components/SingleView";

const SingleCoinView = ({ match }) => {
  const [coin, setCoin] = useState([]);
  const { id } = match.params;

  useEffect(() => {
    getSingleCoin();
  }, [id]);

  const getSingleCoinFromApi = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`
    );
    return response;
  };

  const getSingleCoin = async () => {
    const response = await getSingleCoinFromApi(id);
    setCoin(response.data[0]);
  };
  console.log(coin);
  // console.log(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`);

  return (
    <div style={{ marginLeft: "200px" }}>
      {coin && <SingleView coin={coin} />}
    </div>
  );
};

export default SingleCoinView;
