import { useState } from 'react'
import './App.css'
import BodyDesktop from './components/BodyDesktop'
import HeaderDesktop from './components/HeaderDesktop'
import {Stack} from '@mui/material'
import data from './data/videoData.json'

function App() {
  const [count, setCount] = useState(0)
  const [videoData, setvideoData] = useState(data)
  const OriginalVideoData = data
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",

      minWidth: "100vw",
      minHeight: "100vh",

      top: "0px",
      left:"0px",
      backgroundColor: "white"
    }}>
      <HeaderDesktop/>
      <BodyDesktop videoData={videoData} OriginalVideoData={OriginalVideoData}/>
    </div>

    {/* <FooterDesktop />  */}
    </>
  )
}

export default App