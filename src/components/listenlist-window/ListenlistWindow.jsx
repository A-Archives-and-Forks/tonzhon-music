import { useRef, lazy, Suspense, useCallback } from 'react'
import { Button } from 'antd'
import Loading from '@/components/ui/loading'
import { useListenlistStore } from '@/stores/useListenlistStore'
import { useSongInPlayerStore } from '@/stores/useSongInPlayerStore'
const Listenlist = lazy(() => import('./Listenlist'))

function ListenlistWindow() {
  const listenlist = useListenlistStore((s) => s.listenlist)
  const clearListenlist = useListenlistStore((s) => s.clearListenlist)
  const newIdOfCurrentSong = useSongInPlayerStore((s) => s.songInPlayer?.newId)
  const listWindowRef = useRef()

  const locateCurrentSong = useCallback(() => {
    const indexOfCurrentSong = listenlist.findIndex(
      (item) => item.newId === newIdOfCurrentSong
    )
    if (indexOfCurrentSong > 4) {
      listWindowRef.current.scrollTop = (indexOfCurrentSong - 4) * 32
    }
  }, [listenlist, newIdOfCurrentSong])

  return (
    <div className="fixed w-90 right-[7vw] top-[62px] border-2 border-[#52c41a] bg-[#141414] bottom-[68px] rounded">
      <div className="flex gap-2 px-2.5 py-1 w-full">
        <strong>聆听列表</strong>
        {listenlist.length}
        <Button
          size="small"
          onClick={locateCurrentSong}
          style={{
            margin: '0 7px',
          }}
        >
          定位播放器里的歌曲
        </Button>
        <Button size="small" onClick={clearListenlist}>
          清空
        </Button>
      </div>
      <div
        className="absolute top-[34px] h-[calc(100%-34px)] overflow-auto w-full scrollbar-customization"
        ref={listWindowRef}
      >
        <Suspense fallback={<Loading />}>
          <Listenlist
            songs={listenlist}
            newIdOfCurrentSong={newIdOfCurrentSong}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default ListenlistWindow
