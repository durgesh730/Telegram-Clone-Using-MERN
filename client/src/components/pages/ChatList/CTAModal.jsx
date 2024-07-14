import React from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/modalSlice";
import { sidebarActions } from "../../../store/sidebarSlice";
import Modal from "../../globals/Modal";
import ModalChild from "../../globals/ModalChild";

function CTAModal() {
  const dispatch = useDispatch();
  return (
    <Modal className="origin-bottom-right" typeValue="ctaModal">
      {/* Create Group chat */}
      <ModalChild
        onClick={() => {
          dispatch(modalActions.closeModal());
          dispatch(
            sidebarActions.changeActivePage({ newActivePage: "contacts" })
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10z"
            className="!stroke-transparent"
          />
        </svg>
        New Private Chat
      </ModalChild>
    </Modal>
  );
}

export default CTAModal;
