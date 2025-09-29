interface ProductCartItemInterface {
  id: number;
  userId: number;
  productId: number;
  productName: string;
  productPrice: number;
  productThumb: string;
}

export interface GetCartItemsInterface {
  items: ProductCartItemInterface[];
  total: number;
}
