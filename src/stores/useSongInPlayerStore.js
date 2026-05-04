import { create } from 'zustand'

const STORAGE_KEY = 'songInPlayer'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveToStorage(song) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(song))
}

export const useSongInPlayerStore = create((set) => ({
  songInPlayer: loadFromStorage(),
  setSongInPlayer: (song) => {
    saveToStorage(song)
    set({ songInPlayer: song })
  },
}))

export function setSongInPlayer(song) {
  useSongInPlayerStore.getState().setSongInPlayer(song)
}
