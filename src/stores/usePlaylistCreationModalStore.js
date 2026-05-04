import { create } from 'zustand'

export const usePlaylistCreationModalStore = create((set) => ({
  isPlaylistCreationModalOpen: false,
  setIsPlaylistCreationModalOpen: (open) => set({ isPlaylistCreationModalOpen: open }),
}))

export function setPlaylistCreationModalOpen(open) {
  usePlaylistCreationModalStore.getState().setIsPlaylistCreationModalOpen(open)
}
