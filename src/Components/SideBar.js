import { SideBarData } from "./SideBarData";
import "../Styles/sidebar/sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul>
        {SideBarData.map((val, key) => (
          <li key={key} onClick={() => {window.location.pathname = val.link}} id={window.location.pathname === val.link ? "active" : ""}> 
          <div id='icon'>{val.icon}</div>
          <div id='title'>{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
