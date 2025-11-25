import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useStore = create(
  persist(
    (set) => ({
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

      addnum: () => set((state) => ({ num: state.num + 1 })),
    }),
    {
      name: "store-data",
    }
  )
);
