import shrek1 from "../image/shrek1.jpg";

const CarouselComponent = () => {
  return (
    <div className="shrekCard">
      <img
        src={shrek1}
        alt="shrekCardImage"
        height="450vh"
        width='1319vw'
        className="shrekCardImage"
      />
    </div>
  );
};

export default CarouselComponent;
