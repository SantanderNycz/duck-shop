import type { Product, CartItem } from "$lib/types";
import { writable } from "svelte/store";

class CartStore {
  private _items: any;
  items: any;

  constructor() {
    this._items = writable([]);
    this.items = this._items;
  }

  get totalItems(): number {
    let sum = 0;
    this.items.subscribe((items: CartItem[]) => {
      sum = items.reduce((acc, item) => acc + item.quantity, 0);
    });
    return sum;
  }

  get totalPrice(): number {
    let sum = 0;
    this.items.subscribe((items: CartItem[]) => {
      sum = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
    });
    return sum;
  }

  addItem(product: Product): void {
    this.items.update((items: CartItem[]) => {
      const existingItem = items.find((item) => item.product.id === product.id);

      if (existingItem) {
        existingItem.quantity++;
        return items;
      } else {
        return [...items, { product, quantity: 1 }];
      }
    });
  }

  removeItem(productId: number): void {
    this.items.update((items: CartItem[]) => {
      return items.filter((item) => item.product.id !== productId);
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    this.items.update((items: CartItem[]) => {
      const item = items.find((item) => item.product.id === productId);
      if (item) {
        if (quantity <= 0) {
          return items.filter((item) => item.product.id !== productId);
        } else {
          item.quantity = quantity;
          return items;
        }
      }
      return items;
    });
  }

  clearCart(): void {
    this.items.set([]);
  }
}

export const cart = new CartStore();
