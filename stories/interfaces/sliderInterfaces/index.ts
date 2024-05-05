import { basicInterfaces } from "../basicInterfaces/basicInterfaces";

export interface TestimonySliderProps extends basicInterfaces, SlideItemProps {
  slideShadows?: boolean;
  testimonies: TestimonyInterface[];
}
export interface SlideItemProps {
  slideColsXs: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  slideColsSm: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  slideColsMd: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  slideColsLg: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  slideColsXl: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  slideMarginY: 1 | 2 | 3 | 4 | 5;
  slideBorderRadius: 1 | 2 | 3 | 4 | 5;
  slidePaddingX: 1 | 2 | 3 | 4 | 5;
  slidePaddingY: 1 | 2 | 3 | 4 | 5;
}

export interface TestimonyInterface {
  title: string;
  text: string;
  name: string;
}
