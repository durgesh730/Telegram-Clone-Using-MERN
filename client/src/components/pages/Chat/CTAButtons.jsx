import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useSendMessage from "../../../hooks/useSendMessage";
import { modalActions } from "../../../store/modalSlice";
import CTAIconWrapper from "../../globals/CTAIconWrapper";

function CTAButtons({
  isTyping,
  isRecording,
  endRecording,
  startRecording,
  setMessageEmpty,
  pauseRecording,
}) {
  const { sendMessage } = useSendMessage(setMessageEmpty);
  const dispatch = useDispatch();

  const isSending = useSelector(
    (state) =>
      state.chatReducer.mode === "sending" ||
      state.chatReducer.mode?.endsWith("Upload")
  );

  return (
    <div className="shrink-0 relative">
      {/* Start recording  or send message*/}
      {(isTyping || isSending) && (
        <CTAIconWrapper
          onClick={() => { sendMessage() }}
          className={`relative ${isRecording && "animate-wave"}`}
        >
          {/* Sending message Icon */}
          {isSending && (
            <AnimatePresence>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="4"
                  cy="12"
                  r="3"
                  fill="currentColor"
                  className="fill-white stroke-transparent"
                >
                  <animate
                    id="svgSpinners3DotsBounce0"
                    attributeName="cy"
                    begin="0;svgSpinners3DotsBounce1.end+0.25s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    values="12;6;12"
                  />
                </circle>
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="currentColor"
                  className="fill-white stroke-transparent"
                >
                  <animate
                    attributeName="cy"
                    begin="svgSpinners3DotsBounce0.begin+0.1s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    values="12;6;12"
                  />
                </circle>
                <circle
                  cx="20"
                  cy="12"
                  r="3"
                  fill="currentColor"
                  className="fill-white stroke-transparent"
                >
                  <animate
                    id="svgSpinners3DotsBounce1"
                    attributeName="cy"
                    begin="svgSpinners3DotsBounce0.begin+0.2s"
                    calcMode="spline"
                    dur="0.6s"
                    keySplines=".33,.66,.66,1;.33,0,.66,.33"
                    values="12;6;12"
                  />
                </circle>
              </motion.svg>
            </AnimatePresence>
          )}

          {/* Send icon */}
          {isTyping && (
            <AnimatePresence>
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                className="absolute"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"
                  className="fill-white stroke-white"
                />
              </motion.svg>
            </AnimatePresence>
          )}
        </CTAIconWrapper>
      )}

    </div>
  );
}

export default CTAButtons;
