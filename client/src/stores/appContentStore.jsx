import { create } from "zustand"
import { persist } from "zustand/middleware"

export const appContentStore = create(
  persist((set, get) => ({
    cart: [],
    numberOfItems: () => {
      const cart = get().cart
      if (cart.length === 0) {
        return 0
      } else {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
      }
    },
    totalPrice: () => {
      const cart = get().cart
      if (cart.length === 0) {
        return 0
      } else {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      }
    },

    addToCart: (item, numberOfItems) =>
      set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id)
        const itemsIncrease = numberOfItems || 1
        if (existingItem) {
          return {
            cart: state.cart.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + itemsIncrease }
                : i
            ),
          }
        } else {
          return {
            cart: [...state.cart, { ...item, quantity: itemsIncrease }],
          }
        }
      }),
    changeQuantityInCart: (item, newQuantity) => {
      set((state) => {
        const existingItem = state.cart.find((i) => i.id === item.id)
        if (existingItem) {
          if (newQuantity <= 0) {
            return {
              cart: state.cart.filter((i) => i.id !== item.id),
            }
          } else {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: newQuantity } : i
              ),
            }
          }
        } else {
          return {
            cart: [...state.cart, { ...item, quantity: newQuantity }],
          }
        }
      })
    },
    removeFromCart: (itemId) =>
      set((state) => {
        const existingItem = state.cart.find((i) => i.id === itemId)
        if (existingItem) {
          return {
            cart: state.cart.filter((i) => i.id !== itemId),
          }
        }
      }),
    clearCart: () => set({ cart: [] }),
  }))
)
