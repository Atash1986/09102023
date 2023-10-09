import React from "../";
import logoDefaultImg from "../LDI.png";

function Sidbar({ appTitleDynamic, logoDynamic }) {
  const appTitleDefault = "Ati project";
  const appTitle = appTitleDynamic ? appTitleDynamic : appTitleDefault;
  const logoDefault = logoDefaultImg;
  const logo = logoDynamic ? logoDynamic : logoDefault;
  return (
    <div className="menu">
      <h1 text="To Do List">{appTitle}</h1>
      <img src={logo} />
      <h1>To Do </h1>
      <div className="1">
        <span>Home Task</span>
      </div>
      <div className="1">
        <span>Home Task</span>
      </div>
      <div className="2">
        <span>Out Task</span>
      </div>
      <div className="3">
        <span>PC Needed</span>
      </div>
      <h1>The Work Done </h1>
      <div className="1">
        <span>Home Task</span>
      </div>
      <div className="1">
        <span>Home Task</span>
      </div>
      <div className="2">
        <span>Out Task</span>
      </div>
      <div className="3">
        <span>PC Needed</span>
      </div>
    </div>
  );
}
export default Sidbar;
