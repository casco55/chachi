export interface colsInterface {
  colsXs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colsSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colsMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colsLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colsXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}
export interface marginInterface {
  marginY?: 1 | 2 | 3 | 4 | 5;
  marginX?: 1 | 2 | 3 | 4 | 5;
}
export interface paddingInterface {
  paddingY?: 1 | 2 | 3 | 4 | 5;
  paddingX?: 1 | 2 | 3 | 4 | 5;
}
export interface borderInterface {
  borderRadius?: 1 | 2 | 3 | 4 | 5;
  borderWidth?: 1 | 2 | 3 | 4 | 5;
}
export interface basicInterfaces
  extends colsInterface,
    marginInterface,
    paddingInterface,
    borderInterface {}
