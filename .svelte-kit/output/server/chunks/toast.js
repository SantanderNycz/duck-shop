import { w as writable } from "./index.js";
function createToastStore() {
  const { subscribe, update } = writable([]);
  let nextId = 0;
  function add(message, emoji = "🦆", type = "success") {
    const id = ++nextId;
    update((toasts2) => [...toasts2, { id, message, emoji, type }]);
    setTimeout(() => {
      update((toasts2) => toasts2.filter((t) => t.id !== id));
    }, 3e3);
  }
  function dismiss(id) {
    update((toasts2) => toasts2.filter((t) => t.id !== id));
  }
  return { subscribe, add, dismiss };
}
const toasts = createToastStore();
export {
  toasts as t
};
