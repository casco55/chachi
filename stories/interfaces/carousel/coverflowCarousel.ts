export interface CoverflowCarouselProps {
  slideShadows?: boolean;
  children: React.ReactNode;
}

export interface CoverflowCarouselItemProps {
  children: React.ReactNode;
  itemWidth?: number;
  className?: string;
}
