import { v4 as uuidv4 } from 'uuid';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './product';

export interface IBasket {
  id: string;
  items: IBasketItem[];
}

export interface IBasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export class Basket implements IBasket {
  id = uuidv4();
  items: IBasketItem[] = [];
}

export interface IBasketTotals {
  shipping: number;
  subtotal: number;
  total: number;
}

export interface IBasketService {
  getBasket(id: string): Observable<any>;
  setBasket(basket: IBasket): Subscription;
  getCurrentBasketValue(): IBasket;
  addItemToBasket(item: IProduct, quantity: number);
  incrementItemQuantity(item: IBasketItem): void;
  decrementItemQuantity(item: IBasketItem): void;
  removeItemFromBasket(item: IBasketItem): void;
  deleteBasket(basket: IBasket): void;
}
