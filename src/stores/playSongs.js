import { useListenlistStore } from './useListenlistStore'
import { useSongInPlayerStore } from './useSongInPlayerStore'

export default function playSongs(data) {
  useSongInPlayerStore.getState().setSongInPlayer(data[0])
  useListenlistStore.getState().setListenlist(data)
}
