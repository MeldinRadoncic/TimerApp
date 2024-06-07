import React, { useState, useEffect } from 'react'
import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import TopBar from './components/TopBar'
import Timer from './components/Timer'

function App() {
  const [isOverlayOn, setIsOverlayOn] = useState(false)

  // Listen to the overlay mode event from the main process

  useEffect(() => {
    window.electron.ipcRenderer.on('overlay-mode', () => {
      setIsOverlayOn((prev) => !prev)
    })
    // return cleanup function
    return () => {
      window.electron.ipcRenderer.removeAllListeners('overlay-mode')
    }
  }, [])

  return (
    <>
      <div className={isOverlayOn ? 'invisible' : 'visible'}>
        <TopBar />
      </div>
      <div
        className={
          isOverlayOn
            ? 'bg-black bg-opacity-40 p-2 rounder-b-xl'
            : 'bg-black bg-opacity-40 p-2 rounder-xl'
        }
      >
        <Timer isOverlay={isOverlayOn} />
      </div>
    </>
  )
}

export default App
