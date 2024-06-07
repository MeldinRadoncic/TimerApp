# Timer App

## Overview

The Timer App is a lightweight desktop application built with Electron, Vite, React, and TailwindCSS. It allows users to set a countdown timer and receive an audible alert when the time expires. A unique feature of the app is the "overlay mode," which makes the timer clickable while removing the control buttons from the view.

## Features

- **Set and Edit Timer:** Users can set the desired countdown time and modify it as needed.
- **Audible Alert:** An applause sound plays when the timer reaches zero.
- **Overlay Mode:** Activates with `Command (⌘) + 6` on Mac or `Control + 6` on Windows/Linux. In this mode:
  - The timer is always on top of other windows.
  - Control buttons disappear, allowing interaction through clicks on the timer itself.
  - Reset, Pause functionality

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/MeldinRadoncic/TimerApp.git
   cd timer-app
   npm install
   npm run dev


   