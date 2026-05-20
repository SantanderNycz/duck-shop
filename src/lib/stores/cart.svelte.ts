import type { Product, CartItem } from "$lib/types";
import { writable } from "svelte/store";
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
  } catch {
    // storage full or blocked — silently ignore
  }
}

class CartStore {
  items: any;

  constructor() {
    this.items = writable(loadFromStorage());

    // Persist every change to localStorage
    this.items.subscribe((items: CartItem[]) => {
      saveToStorage(items);
    });
  }

  get totalItems(): number {
    let sum = 0;
    this.items.subscribe((items: CartItem[]) => {
      sum = items.reduce((acc, item) => acc + item.quantity, 0);
    })();
    return sum;
  }

  get totalPrice(): number {
    let sum = 0;
    this.items.subscribe((items: CartItem[]) => {
      sum = items.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
      );
    })();
    return sum;
  }

  addItem(product: Product): void {
    this.items.update((items: CartItem[]) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) {
        existing.quantity++;
        return items;
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  removeItem(productId: number): void {
    this.items.update((items: CartItem[]) =>
      items.filter((i) => i.product.id !== productId)
    );
  }

  updateQuantity(productId: number, quantity: number): void {
    this.items.update((items: CartItem[]) => {
      const item = items.find((i) => i.product.id === productId);
      if (!item) return items;
      if (quantity <= 0) return items.filter((i) => i.product.id !== productId);
      item.quantity = quantity;
      return items;
    });
  }

  clearCart(): void {
    this.items.set([]);
  }
}

export const cart = new CartStore();
