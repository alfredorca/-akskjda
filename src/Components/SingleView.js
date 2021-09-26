import Paper from "@mui/material/Paper";

const SingleView = ({ coin }) => {
  return (
    <div className="single-view-main">
      <div className="single-view-section left">
        <Paper className="single-view-card main">
          <div className="header-container">
            {coin.image ? (
              <div
                style={{
                  background: `url(${coin.image})`,
                  backgroundSize: "cover",
                  height: "35px",
                  width: "35px",
                }}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "white",
                  height: "35px",
                  width: "35px",
                }}
              />
            )}
            <div />
            <div className="text title">{coin.name}</div>
          </div>
          <div className="main-details">
            <div className="main-left">
              <div className="text seven title">Price</div>
              <div className="text seven title">Symbol</div>
              <div className="text seven title">High</div>
            </div>
            <div className="main-right">
              <div className="text seven">{coin.current_price}</div>
              <div className="text seven">{coin.symbol}</div>
              <div className="text seven">{coin.high_24h}</div>
            </div>
          </div>
        </Paper>
        <Paper className="single-view-card news">
          <div className="header-container">
            <div className="text three">News</div>
          </div>
        </Paper>
      </div>
      <div className="single-view-section right">
        <Paper className="single-view-details">
          <div className="header-container">
            <div className="text five"> Details</div>
          </div>

          <div className="main-details">
            <div className="main-left">
              <div className="text seven title">Price</div>
              <div className="text seven title">Symbol</div>
              <div className="text seven title">High</div>
              <div className="text seven title">Price</div>
              <div className="text seven title">Symbol</div>
              <div className="text seven title">High</div>
            </div>
            <div className="main-right">
              <div className="text seven">{coin.current_price}</div>
              <div className="text seven">{coin.symbol}</div>
              <div className="text seven">{coin.high_24h}</div>
              <div className="text seven">{coin.current_price}</div>
              <div className="text seven">{coin.symbol}</div>
              <div className="text seven">{coin.high_24h}</div>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default SingleView;

// {coin &&
//   (<div style={{marginLeft: '300px'}}>
//      <h2>{coin.name}</h2>
//       <img src={coin.image} alt="logo" />
//       <p>Price: ${coin.current_price}</p>
//       <p>Market Cap: ${coin.market_cap}</p>
//       <p>Market Cap Rank: {coin.market_cap_rank}</p>
//       <p>Total Volume: {coin.total_volume}</p>
//       <p>24 Hour High: ${coin.high_24h}</p>
//       <p>24 Hour Low: ${coin.low_24h}</p>
//       <p>24 Hour Price Change: ${coin.price_change_24h}</p>
//       <p>Price Change Percent: {coin.price_change_percentage_24h}%</p>
//       <p>24 Hour Market Cap Change: ${coin.market_cap_change_24h}%</p>
//       <p>Market Cap Change Percent: {coin.market_cap_change_percentage_24h}%</p>
//       <p>Circulating Supply: {coin.circulating_supply}</p>
//       <p>Total Supply: {coin.total_supply}</p>
//       <p>Max Supply: {coin.max_supply}</p>
//     </div>)}
