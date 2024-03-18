export interface CardProps {
  cardTitle: string;
  cardText: string;
  cardImg: string;
  cardImgAlt: string;
  cardOnClick: () => void;
  cardButtonText: string;
  cols?: string;
}

export interface ProductCardProps extends CardProps {
  productQuantity: number;
  productPrice: string;
  addProdduct: () => void;
  subtractProduct: () => void;
}
