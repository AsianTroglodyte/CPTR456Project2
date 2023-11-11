import * as React from 'react'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '@mui/material/Button';
import CartDrawerDesktop from "./CartDrawerDesktop"
import VideoAreaDesktop from "./VideoAreaDesktop"
import FilterDesktop from "./FilterDesktop"

const BodyDeskTop = (props) => {
    const {videoData} = props
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [totalCost, setTotalCost] = useState(0)

    const cartClickHandler = () => {
        setIsDrawerOpen(!(isDrawerOpen))
    }

    const costHandler = () => {
        setTotalCost(0)
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                top: "100px",
                width: "100%"
            }}>

            <CartDrawerDesktop 
                isDrawerOpen = {isDrawerOpen} 
                cartClickHandler = {cartClickHandler} 
                totalCost = {totalCost}
                costHandler = {costHandler}
            />

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundColor: "#78938A",
                size: "auto"
            }}>
                <Button style={{
                    margin: "15px 0px 0px 0px", 
                    padding: "0px 0px 0px 0px", 
                    fontWeight: "bold", 
                    backgroundColor: "#78938A",
                    fontSize: "50",
                    color:"#78938A"
                }}
                onClick={() => cartClickHandler()}
                >
                    <ShoppingCartIcon sx={{fontSize: 30, color: "white"}}/>
                </Button>
            </div>

            <VideoAreaDesktop videoData={videoData}/>
            <FilterDesktop />
            </div>
        </>
    )
}

export default BodyDeskTop