import { create } from 'zustand'

const STORAGE_KEY = 'listenlist'

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveToStorage(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

export const useListenlistStore = create((set, get) => ({
  listenlist: loadFromStorage(),

  setListenlist: (list) => {
    saveToStorage(list)
    set({ listenlist: list })
  },

  addSongToListenlist: (song) => {
    const list = [...get().listenlist, song]
    saveToStorage(list)
    set({ listenlist: list })
  },

  addListToListenlist: (songs) => {
    const state = get().listenlist
    const filtered = songs.filter((song) => state.every((item) => item.newId !== song.newId))
    const list = state.concat(filtered)
    saveToStorage(list)
    set({ listenlist: list })
  },

  clearListenlist: () => {
    saveToStorage([])
    set({ listenlist: [] })
  },
}))
