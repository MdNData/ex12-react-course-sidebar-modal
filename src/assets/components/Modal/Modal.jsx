import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useAppContext } from "../../../context";

const Modal = () => {
  const {
    isSidebarOpen,
    isModalOpen,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar,
  } = useAppContext();
  return (
    <div className={isModalOpen ? "modal" : "modal-closed"}>
      <div className="tab">
        <div className="modal-close-btn">
          <GrClose onClick={isModalOpen ? closeModal : openModal} />
        </div>
        <div className="modal-display">
          <p>Modal Content</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
