import { height } from "@mui/system";
import { AboutUsData } from "../Components/AboutUsData";
let alfredosPicture = "../images/Alfredo.jpg";

const AboutUsView = () => {
  return (
    <section className="container">
      <div className="persons">
        {AboutUsData.map((person) => (
          <div className="singlePerson">
            <div
              className="picture"
              style={{
                background: `url('${person.picture}')`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                height: "80vh",
              }}
            ></div>
            <div className="name">{person.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsView;
