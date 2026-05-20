import "clsx";
import { w as writable } from "./index.js";
function loadFromStorage() {
  return [];
}
class CartStore {
  items;
  constructor() {
    this.items = writable(loadFromStorage());
    this.items.subscribe((items) => {
    });
  }
  get totalItems() {
    let sum = 0;
    this.items.subscribe((items) => {
      sum = items.reduce((acc, item) => acc + item.quantity, 0);
    })();
    return sum;
  }
  get totalPrice() {
    let sum = 0;
    this.items.subscribe((items) => {
      sum = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    })();
    return sum;
  }
  addItem(product) {
    this.items.update((items) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) {
        existing.quantity++;
        return items;
      }
      return [...items, { product, quantity: 1 }];
    });
  }
  removeItem(productId) {
    this.items.update((items) => items.filter((i) => i.product.id !== productId));
  }
  updateQuantity(productId, quantity) {
    this.items.update((items) => {
      const item = items.find((i) => i.product.id === productId);
      if (!item) return items;
      if (quantity <= 0) return items.filter((i) => i.product.id !== productId);
      item.quantity = quantity;
      return items;
    });
  }
  clearCart() {
    this.items.set([]);
  }
}
const cart = new CartStore();
export {
  cart as c
};
