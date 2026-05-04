import { create } from 'zustand'

export const useTheSongToAddToPlaylistStore = create((set) => ({
  theSongToAddToPlaylist: null,
  setTheSongToAddToPlaylist: (song) => set({ theSongToAddToPlaylist: song }),
  clearTheSongToAddToPlaylist: () => set({ theSongToAddToPlaylist: null }),
}))

export function setTheSongToAddToPlaylist(song) {
  useTheSongToAddToPlaylistStore.getState().setTheSongToAddToPlaylist(song)
}

export function clearTheSongToAddToPlaylist() {
  useTheSongToAddToPlaylistStore.getState().clearTheSongToAddToPlaylist()
}
