import { create } from 'zustand'

export const usePlaylistModalStore = create((set) => ({
  isPlaylistModalOpen: false,
  setIsPlaylistModalOpen: (open) => set({ isPlaylistModalOpen: open }),
}))

export function setPlaylistModalOpen(open) {
  usePlaylistModalStore.getState().setIsPlaylistModalOpen(open)
}
