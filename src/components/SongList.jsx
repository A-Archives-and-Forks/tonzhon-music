import SongItemWithCover from '@/components/song-item/SongItemWithCover'

function SongList({ songs }) {
  return (
    <ol>
      {songs.map((song) => (
        <SongItemWithCover key={song.newId} song={song} />
      ))}
    </ol>
  )
}

export default SongList
