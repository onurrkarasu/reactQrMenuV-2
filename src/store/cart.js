import { create } from "zustand";

export const useCart = create((set, get) => ({
  items: {},
  add: (item) =>
    set((s) => {
      const prev = s.items[item.id];
      const nextQty = (prev?.qty ?? 0) + 1;
      return { items: { ...s.items, [item.id]: { ...item, qty: nextQty } } };
    }),
  dec: (id) =>
    set((s) => {
      const cur = s.items[id];
      if (!cur) return s;
      const nextQty = cur.qty - 1;
      const next = { ...s.items };
      if (nextQty <= 0) delete next[id];
      else next[id] = { ...cur, qty: nextQty };
      return { items: next };
    }),
  clear: () => set({ items: {} }),
  total: () =>
    Object.values(get().items).reduce((sum, i) => sum + i.price * i.qty, 0),
}));
