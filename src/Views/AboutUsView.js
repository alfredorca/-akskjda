import { AboutUsData } from "../Components/AboutUsData";

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
            <div className="age">Age: {person.age}</div>
            <div className="description">{person.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsView;
