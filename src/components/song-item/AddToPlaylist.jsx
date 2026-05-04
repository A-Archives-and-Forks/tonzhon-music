import { ListPlus } from 'lucide-react'
import { setPlaylistModalOpen } from '@/stores/usePlaylistModalStore'
import { useTheSongToAddToPlaylistStore } from '@/stores/useTheSongToAddToPlaylistStore'
import onlyWhenUserIsSignedIn from '@/utils/only_when_user_is_signed_in'

function AddToPlaylist({ song }) {
  const setTheSongToAddToPlaylist = useTheSongToAddToPlaylistStore(
    (s) => s.setTheSongToAddToPlaylist,
  )

  const handleClick = onlyWhenUserIsSignedIn(() => {
    if (song) {
      setTheSongToAddToPlaylist(song)
      setPlaylistModalOpen(true)
    }
  })

  return <ListPlus className="icon" title="添加到歌单" onClick={handleClick} />
}

export default AddToPlaylist
