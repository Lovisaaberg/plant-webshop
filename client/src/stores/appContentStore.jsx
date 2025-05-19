import { create } from 'zustand'

export const appContentStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      console.log('state.cart', state.cart)
      console.log('item', item)
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        }
      }
    }),
  removeFromCart: (itemId) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === itemId)
      if (existingItem) {
        console.log('existingItem', existingItem)
        if (existingItem.quantity > 1) {
          return {
            cart: state.cart.map((i) =>
              i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
            ),
          }
        } else {
          return {
            cart: state.cart.filter((i) => i.id !== itemId),
          }
        }
      }
    }),
  clearCart: () => set({ cart: [] }),
}))
