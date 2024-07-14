import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modalSlice";
import Modal from "../../globals/Modal";
import ModalChild from "../../globals/ModalChild";

function ActionsModal() {
  const dispatch = useDispatch();
  const chatRoom = useSelector((state) => state.chatReducer.currentChatRoom);
  return (
    <Modal typeValue="actionsModal" className="origin-top-right !w-[18rem]">
      <ModalChild
        onClick={() => {
          dispatch(
            modalActions.openModal({
              type: chatRoom.roomType ? "deleteChatModal" : "leaveGroupModal",
              payload: { chatData: chatRoom },
              positions: {},
            })
          );
        }}
        className="text-danger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 7v0a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0M9 7h6M9 7H6m9 0h3m2 0h-2M4 7h2m0 0v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"
            className="!fill-transparent !stroke-danger"
          />
        </svg>
        {chatRoom.roomType === "Private" ? "Delete Chat" : "Leave Group"}
      </ModalChild>
    </Modal>
  );
}

export default ActionsModal;
