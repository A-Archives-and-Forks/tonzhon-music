import { message } from 'antd'
import { useCallback } from 'react'

function usePositionedMessage() {
  const [messageApi, contextHolder] = message.useMessage()

  const showMessage = useCallback(
    (type, content, e) => {
      messageApi[type]({
        content,
        style: {
          position: 'fixed',
          left: e.clientX,
          top: e.clientY,
        },
      })
    },
    [messageApi]
  )

  return [showMessage, contextHolder]
}

export default usePositionedMessage
