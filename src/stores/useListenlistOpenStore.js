import { create } from 'zustand'

export const useListenlistOpenStore = create((set) => ({
  isListenlistOpen: false,
  setIsListenlistOpen: (open) => set({ isListenlistOpen: open }),
}))

export function setListenlistOpen(open) {
  useListenlistOpenStore.getState().setIsListenlistOpen(open)
}
