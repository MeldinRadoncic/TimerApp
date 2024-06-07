import React from 'react';

function TopBar() {
  const handleCloseWindow = () => {
    window.electron.ipcRenderer.send('close-window');
  };

  const handleMinimizeWindow = () => {
    window.electron.ipcRenderer.send('minimize-window');
  };

  return (
    <div className="bg-blue-500 w-full h-8 flex justify-between items-center">
      <div
        className="h-full flex-grow"
        style={{ webkitAppRegion: 'drag' }}
      ></div>
      
      <div id="control-buttons" className="h-full flex items-center" style={{ webkitAppRegion: 'no-drag' }}>
        <button
          onClick={handleMinimizeWindow}
          className="px-2"
          id="minimize"
        >
          -
        </button>
        <button
          onClick={handleCloseWindow}
          className="px-2"
          id="close"
        >
          &#x2715;
        </button>
      </div>
    </div>
  );
}

export default TopBar;
