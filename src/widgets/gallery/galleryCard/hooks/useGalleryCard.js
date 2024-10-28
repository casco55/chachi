import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";

export const useCardGallery = () => {
  const [id] = useState(uuidv4());
  const [onEffect, setOnEffect] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
  });
  const { x, y, height, width } = position;
  const openModal = () => {
    if (onEffect) return;
    console.log("openModal");
    const card = document.getElementById(`image-${id}`);
    const rect = card.getBoundingClientRect();
    const x = rect.left;
    const y = rect.top;
    const height = rect.height;
    const width = rect.width;
    setPosition({ x, y, height, width });
    setOnEffect(true);
    gsap.to(`#modal-${id}`, {
      display: "flex",
      zIndex: 10,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height: "100dvh",
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      onComplete: () => {
        setOnEffect(false);
      },
    });
  };
  const closeModal = () => {
    console.log(`closeModal`);
    if (onEffect) return;
    const tl = gsap.timeline();
    tl.to(`#modal-${id}`, {
      display: "none",
      duration: 0.5,
      ease: "power2.in",
      top: y,
      left: x,
      height: height,
      width: width,
      backgroundColor: "rgba(0, 0, 0, 0)",
    }).to(`#modal-${id}`, {
      display: "none",
      duration: 0.2,
      onComplete: () => {
        setOnEffect(false);
      },
    });
  };
  return {
    openModal,
    closeModal,
    id,
    x,
    y,
    height,
    width,
  };
};
