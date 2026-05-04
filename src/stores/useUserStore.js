import { create } from 'zustand'

const initialState = {
  isSignedIn: false,
  username: '',
  email: '',
  playlists: [],
  collectedPlaylists: [],
}

export const useUserStore = create((set, get) => ({
  ...initialState,

  signIn: (data) => {
    set({
      isSignedIn: true,
      username: data.username ?? '',
      email: data.email ?? '',
      playlists: data.playlists ?? [],
      collectedPlaylists: data.collectedPlaylists ?? [],
    })
  },

  signOut: () => {
    set(initialState)
  },

  newPlaylist: (playlist) => {
    set({
      playlists: [...get().playlists, playlist],
      isSignedIn: true,
    })
  },

  deletePlaylist: (playlistId) => {
    set({
      playlists: get().playlists.filter((p) => p.id !== playlistId),
      isSignedIn: true,
    })
  },

  collectPlaylist: (playlist) => {
    set({
      collectedPlaylists: [...get().collectedPlaylists, playlist],
      isSignedIn: true,
    })
  },

  uncollectPlaylist: (playlistId) => {
    set({
      collectedPlaylists: get().collectedPlaylists.filter((p) => p.id !== playlistId),
      isSignedIn: true,
    })
  },
}))

export function signInUser(data) {
  useUserStore.getState().signIn(data)
}

export function signOutUser() {
  useUserStore.getState().signOut()
}
