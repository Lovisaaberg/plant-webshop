import React from "react"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const favoriteContentStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (id) => {
        const updated = [...get().favorites, id]
        set({ favorites: updated })
      },

      removeFavorite: (id) => {
        const updated = get().favorites.filter((favId) => favId !== id)
        set({ favorites: updated })
      },

      toggleFavorite: (id) => {
        const { favorites, addFavorite, removeFavorite } = get()
        favorites.includes(id) ? removeFavorite(id) : addFavorite(id)
      },
    }),
    {
      name: "favorites-storage",
    }
  )
)
