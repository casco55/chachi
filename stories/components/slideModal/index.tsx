import React from "react";
import { SlideModalProps } from "../../interfaces/modalInterfaces";
import { useSlideModal } from "./hooks/useSlideModal";
export const SlideModal = ({
  children,
  showModal = false,
  slideDirection = "vertical",
}: SlideModalProps) => {
  const { displayModal, showDirection, hideDirection } = useSlideModal({
    showModal,
    slideDirection,
  });
  return (
    <>
      {displayModal && (
        <div
          className={`position-fixed bg-light vh-100 top-0 start-0 col-12 z-index-10 slide slide-${
            showModal ? showDirection : hideDirection
          }`}
        >
          <div className="h-100 col-12 position-relative d-flex flex-column justify-content-center">
            {children}
          </div>
        </div>
      )}
    </>
  );
};
