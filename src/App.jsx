import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activeKey, setActivekey] = useState('')
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const id = event.key.toUpperCase()
      playSound(id)
    })
  }, [])
  const audioClips = [
    {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

  const playSound = (selector) => {
    const audio = document.getElementById(selector)
    setActivekey(selector)
    audio.play()
  }

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
    <div className='font-light  mb-5'>Let's Play Drum 🥁</div>
      <div id='drum-machine'>
        <div id='display' className='text-center border p-3 text-lg font-bold rounded-lg shadow-lg mb-5'>{activeKey}</div>
        <div className='grid grid-cols-3 gap-2'>
          {audioClips.map((key) => (
            <div className='drum-pad p-5 bg-sky-600 rounded-lg active:bg-sky-400 active:scale-105 transition-all text-slate-50 font-bold text-lg drop-shadow-lg' key={key.keyCode} id={key.id} onClick={() => {playSound(key.keyTrigger)}}>
              {key.keyTrigger}
              <audio className='clip' id={key.keyTrigger} src={key.url}></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
