import { IoMdCloseCircleOutline } from "react-icons/io";
import { useCardGallery } from "./hooks/useGalleryCard";

export const GalleryCard = ({
  state,
  CardContent,
  ModalContent,
  scrollingAppear,
}) => {
  const { openModal, closeModal, id, x, y, height, width } = useCardGallery();

  return (
    <>
      <div
        className={`col mb-4 ${scrollingAppear && "scrolling-appear"}`}
        onClick={() => openModal()}
        id={`image-${id}`}
      >
        <CardContent state={state} />
      </div>
      <div
        style={{
          display: "none",
          top: y,
          left: x,
          height: height,
          width: width,
        }}
        id={`modal-${id}`}
      >
        <IoMdCloseCircleOutline
          className="position-absolute top-0 end-0 cursor-pointer me-2 mt-2 text-white z-index-10"
          size={36}
          onClick={() => closeModal()}
        />
        <ModalContent state={state} />
      </div>
    </>
  );
};
