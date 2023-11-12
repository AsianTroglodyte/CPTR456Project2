import { useState } from 'react'
import './App.css'
import BodyDesktop from './components/BodyDesktop'
import FooterDesktop from './components/FooterDesktop'
import HeaderDesktop from './components/HeaderDesktop'
import {Stack} from '@mui/material'
import data from './data/videoData.json'

function App() {
  const [count, setCount] = useState(0)
  const [videoData, setvideoData] = useState(data)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
    <div style={{
      width: "100%",
      height: "100%",
      top: "0px",
      left:"0px"
    }}>
      <HeaderDesktop/>
      <BodyDesktop videoData={videoData}/>
    </div>

    {/* <FooterDesktop />  */}
    </>
  )
}

export default App