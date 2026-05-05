import { Modal } from 'antd'
import { useState, createContext, useContext } from 'react'
import { EllipsisVertical } from 'lucide-react'

const SongSourceModalContext = createContext()

export function SongSourceModalProvider({ children }) {
  const [isVisible, setIsVisible] = useState(false)
  const [songSource, setSongSource] = useState('')
  const [position, setPosition] = useState({ top: 100, left: 100 })

  const showSongSourceModal = (source, x, y) => {
    setSongSource(source)
    setPosition({
      top: y - 170,
      left: x - 300,
    })
    setIsVisible(true)
  }

  const hideSongSourceModal = () => {
    setIsVisible(false)
  }

  return (
    <SongSourceModalContext.Provider
      value={{ showSongSourceModal, hideSongSourceModal }}
    >
      {children}
      <Modal
        title={
          <>
            点击右下角的
            <EllipsisVertical className="inline" size={16} />
            ，再点击 '下载' 按钮
          </>
        }
        open={isVisible}
        onCancel={hideSongSourceModal}
        width={350}
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
        }}
        footer={null}
      >
        <iframe src={songSource} className="w-full" />
      </Modal>
    </SongSourceModalContext.Provider>
  )
}

export function useSongSourceModal() {
  const context = useContext(SongSourceModalContext)
  if (!context) {
    throw new Error(
      'useSongSourceModal must be used within a SongSourceModalProvider'
    )
  }
  return context
}
