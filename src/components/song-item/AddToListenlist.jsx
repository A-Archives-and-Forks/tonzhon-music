import { Plus } from 'lucide-react'
import usePositionedMessage from '@/hooks/usePositionedMessage'
import { useListenlistStore } from '@/stores/useListenlistStore'

function AddToListenlist({ song }) {
  const [showMessage, contextHolder] = usePositionedMessage()
  const listenlist = useListenlistStore((s) => s.listenlist)
  const addSongToListenlist = useListenlistStore((s) => s.addSongToListenlist)

  function handleClick(e) {
    if (listenlist.every((item) => item.newId !== song.newId)) {
      addSongToListenlist(song)
      showMessage('success', 'Added to Listenlist', e)
    } else {
      showMessage('info', '歌曲已存在', e)
    }
  }

  return (
    <>
      {contextHolder}
      <Plus
        onClick={handleClick}
        // title="添加到聆听列表"
        className="icon"
      />
    </>
  )
}

export default AddToListenlist
