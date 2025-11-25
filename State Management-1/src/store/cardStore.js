import { create } from "zustand";

export const useStore = create((set) => ({
  cart: ["a", "b"],
  num: 1,

  addtocart: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () =>
    set({
      cart: [],
    }),

    addnum : () => set((state) => ({num : state.num + 1}))
}));
