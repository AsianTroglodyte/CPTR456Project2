import * as React from 'react'
import { useState } from 'react'
import CartDrawerDesktop from "./CartDrawerDesktop"
import VideoAreaDesktop from "./VideoAreaDesktop"
import NavigationBar from "./NavigationBar"
import FilterDrawerDesktop from './FilterDrawerDesktop'
import "./Button.css"

const BodyDeskTop = (props) => {
    const {videoData} = props
    const [isCartDrawerOpen, setCartIsDrawerOpen] = useState(false)
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
    const [totalCost, setTotalCost] = useState(0)

    const cartClickHandler = () => {
        setCartIsDrawerOpen(!(isCartDrawerOpen))
    }

    const filterClickHandler = () => {
        setIsFilterDrawerOpen(!(isFilterDrawerOpen))
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
                left: "0",
                width: "100%"
            }}>

                <CartDrawerDesktop 
                    isCartDrawerOpen = {isCartDrawerOpen} 
                    cartClickHandler = {cartClickHandler} 
                    totalCost = {totalCost}
                    costHandler = {costHandler}
                />

                <FilterDrawerDesktop 
                    isFilterDrawerOpen = {isFilterDrawerOpen} 
                    filterClickHandler = {filterClickHandler} 
                />

                <NavigationBar 
                    isCartDrawerOpen = {isCartDrawerOpen} 
                    cartClickHandler = {cartClickHandler} 
                    isFilterDrawerOpen = {isFilterDrawerOpen}
                    filterClickHandler = {filterClickHandler}
                    videoData = {videoData}
                />

                <VideoAreaDesktop videoData={videoData}/>
            </div>
        </>
    )
}

export default BodyDeskTop