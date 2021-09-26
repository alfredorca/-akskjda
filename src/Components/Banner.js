const Banner = () => {
  return (
    <div
      onClick={() => {
        window.location.href = "/coins/miamicoin";
      }}
      style={{
        background: "url(/images/miamicoin.PNG)",
        backgroundSize: "cover",
        cursor: "pointer",
        marginTop: "60px",
        backgroundColor: "white",
        height: "300px",
        width: "100%",
      }}
    />
  );
};

export default Banner;
