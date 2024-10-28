import React from "react";

import { GalleryCard } from "./galleryCard";
import "./styles/style.scss";

export const GalleryWithModal = ({
  list,
  columns = 4,
  CardContent,
  ModalContent,
  scrollingAppear,
}) => {
  return (
    <div className={`row row-cols-1 row-cols-sm-2 row-cols-md-${columns}`}>
      {list.map((item, index) => (
        <GalleryCard
          key={index}
          state={item}
          CardContent={CardContent}
          ModalContent={ModalContent}
          scrollingAppear={scrollingAppear}
        />
      ))}
    </div>
  );
};
