import { useState, useEffect } from 'react'

export function useLongPress(callback: Function) {
  const [startLongPress, setStartLongPress] = useState<boolean>()
  useEffect(() => {
    if (startLongPress) callback(startLongPress)
    return () => {
      callback(false)
    }
  }, [callback, startLongPress])

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  }
}
