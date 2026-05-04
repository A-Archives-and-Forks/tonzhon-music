import { create } from 'zustand'

export const useSignInModalStore = create((set) => ({
  isSignInModalOpen: false,
  setIsSignInModalOpen: (open) => set({ isSignInModalOpen: open }),
}))

export function setSignInModalOpen(open) {
  useSignInModalStore.getState().setIsSignInModalOpen(open)
}
