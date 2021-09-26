import Paper from "@mui/material/Paper";


const News = ({ source, headline, body, time, link }) => {
  return (
    <div style={{ marginLeft: "50px", marginRight: "50px", cursor: "pointer" }}>
      <Paper variant={"outlined"} style={{ padding: "20px" }}>
        <div></div>
        <div></div>
        <div></div>
      </Paper>
    </div>
  );
};

export default News;
