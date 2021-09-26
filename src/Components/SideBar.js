import { SideBarData } from "./SideBarData";

const SideBar = () => {
  return (
    <div className="sidebar">
      {SideBarData.map((val, key) => (
        <div>
          {val.title === "Crypto Sherk" ? (
            <div className="SherkGrid">
              <div className="icon">{val.icon}</div>
              <div key={key} id="sherkTitle">
                {" "}
                {val.title}
              </div>
            </div>
          ) : (
            <ul>
              <li
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
                id={window.location.pathname === val.link ? "active" : ""}
              >
                <div className="icon">{val.icon}</div>

                <div className="title">{val.title}</div>
              </li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
