import AddToListenlist from './AddToListenlist'
import { Play as PlayIcon } from 'lucide-react'
import { useSongInPlayerStore } from '@/stores/useSongInPlayerStore'

function BasicIconsInSongItem({ song }) {
  const setSongInPlayer = useSongInPlayerStore((s) => s.setSongInPlayer)
  return (
    <>
      <PlayIcon onClick={() => setSongInPlayer(song)} className="icon" />
      <AddToListenlist song={song} />
    </>
  )
}

export default BasicIconsInSongItem
