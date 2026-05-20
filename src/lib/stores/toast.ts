import { writable } from 'svelte/store';

export interface ToastItem {
  id: number;
  message: string;
  type: 'success' | 'info';
}

function createToastStore() {
  const { subscribe, update } = writable<ToastItem[]>([]);
  let nextId = 0;

  function add(message: string, type: ToastItem['type'] = 'success') {
    const id = ++nextId;
    update(toasts => [...toasts, { id, message, type }]);
    setTimeout(() => {
      update(toasts => toasts.filter(t => t.id !== id));
    }, 3000);
  }

  function dismiss(id: number) {
    update(toasts => toasts.filter(t => t.id !== id));
  }

  return { subscribe, add, dismiss };
}

export const toasts = createToastStore();
