import { SlideModalHookProps } from "../../../interfaces/modalInterfaces";
import { useState, useEffect } from "react";
export const useSlideModal = ({
  showModal = false,
  slideDirection = "vertical",
}: SlideModalHookProps) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [modalDisplay, setModalDisplay] = useState({
    showDirection: "",
    hideDirection: "",
  });
  useEffect(() => {
    setModalDisplay({
      showDirection:
        (slideDirection === "vertical" && "down") ||
        (slideDirection === "horizontal" && "right") ||
        "down",
      hideDirection:
        (slideDirection === "vertical" && "up") ||
        (slideDirection === "horizontal" && "left") ||
        "up",
    });
  }, [slideDirection]);
  useEffect(() => {
    if (!showModal) {
      setTimeout(() => {
        setDisplayModal(false);
      }, 1000);
      return;
    }
    setDisplayModal(true);
  }, [showModal]);
  const { showDirection, hideDirection } = modalDisplay;
  return { displayModal, showDirection, hideDirection };
};
