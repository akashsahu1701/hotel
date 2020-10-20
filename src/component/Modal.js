import React from "react";
import Modal from "react-modal";
import NavbarModal from "./NavbarModal";

const NavModal = ({ show, closeNavbar }) => {
  return (
    <div>
      <Modal
        isOpen="true"
        contentLabel="navbar"
        onRequestClose="false"
        className="modal"
      >
        <NavbarModal />
      </Modal>
    </div>
  );
};

export default NavModal;
