import type { Product, CartItem } from "$lib/types";
import { browser } from "$app/environment";

const STORAGE_KEY = "duck-shop-cart";

function loadFromStorage(): CartItem[] {
  if (!browser) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(items: CartItem[]) {
  if (!browser) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

let items = $state<CartItem[]>(loadFromStorage());

function removeItem(productId: number) {
  items = items.filter((i) => i.product.id !== productId);
  saveToStorage(items);
}

export const cart = {
  get items() {
    return items;
  },

  get totalItems() {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  },

  get totalPrice() {
    return items.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  },

  addItem(product: Product) {
    const existing = items.find((i) => i.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      items = [...items, { product, quantity: 1 }];
    }
    saveToStorage(items);
  },

  removeItem(productId: number) {
    removeItem(productId);
  },

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    const item = items.find((i) => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      saveToStorage(items);
    }
  },

  clearCart() {
    items = [];
    saveToStorage(items);
  },
};
