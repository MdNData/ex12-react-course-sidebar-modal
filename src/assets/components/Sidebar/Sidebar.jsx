import React from "react";
import { GrClose } from "react-icons/gr";
import logo from "../../../logo.svg";
import { useAppContext } from "../../../context";
import { links, social } from "../../../data";

function Sidebar() {
  const {
    isSidebarOpen,
    isModalOpen,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar,
  } = useAppContext();

  return (
    <div
      className={
        isSidebarOpen
          ? "sidebar-container sidebar-container-open"
          : "sidebar-container sidebar-container-close"
      }
    >
      <div className="header">
        <img src={logo} alt="" />
        <GrClose onClick={isSidebarOpen ? closeSidebar : openSidebar} />
      </div>
      <div className="items">
        {links.map((item) => {
          return (
            <a className="link" href={item.url} key={item.id}>
              {item.icon}
              <p>{item.text}</p>
            </a>
          );
        })}
      </div>
      <div className="socials">
        {social.map((item) => {
          return (
            <a href={item.url} key={item.id}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
