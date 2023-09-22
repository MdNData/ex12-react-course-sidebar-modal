import React from "react";
import { useAppContext } from "../../../context";
import MenuButton from "../MenuButton/MenuButton";

function Home() {
  const {
    isSidebarOpen,
    isModalOpen,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar,
  } = useAppContext();

  return (
    <div className="btns-container">
      <button onClick={isSidebarOpen ? closeSidebar : openSidebar}>
        <MenuButton color="#49a6e9" />
      </button>
      <button onClick={isModalOpen ? closeModal : openModal}>Show Modal</button>
    </div>
  );
}

export default Home;
