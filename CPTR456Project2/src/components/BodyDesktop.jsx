import * as React from 'react'
import { useState } from 'react'
import CartDrawerDesktop from "./CartDrawerDesktop"
import VideoAreaDesktop from "./VideoAreaDesktop"
import NavigationBar from "./NavigationBar"
import FilterDrawerDesktop from './FilterDrawerDesktop'
import "./Button.css"

const BodyDeskTop = (props) => {
    const {OriginalVideoData} = props
    const [CurrentVideoData, setCurrentVideoData] = useState(OriginalVideoData)
    const [isCartDrawerOpen, setCartIsDrawerOpen] = useState(false)
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
    const [priceFilter, setPriceFilter] = useState("none")
    const [durationFilter, setDurationFilter] = useState("none")
    const [titleFilter, setTitleFilter] = useState("none")
    const [totalCost, setTotalCost] = useState(0)

    const cartClickHandler = () => {
        setCartIsDrawerOpen(!(isCartDrawerOpen))
    }

    const filterClickHandler = () => {
        setIsFilterDrawerOpen(!(isFilterDrawerOpen))
    }

    const priceFilterChangeHandler = (event) => {
        setPriceFilter(event.target.value)
        if (priceFilter == "Free") {
            
        }
    }

    const durationFilterChangeHandler = (event) => {
        setDurationFilter(event.target.value)
    }

    const titleFilterChangeHandler = (event) => {
        setTitleFilter(event.target.value)
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
                width: "100%",
                height: "100%"
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

                    priceFilter = {priceFilter}
                    priceFilterChangeHandler = {priceFilterChangeHandler}
                    
                    durationFilter = {durationFilter}
                    durationFilterChangeHandler = {durationFilterChangeHandler}

                    titleFilter = {titleFilter}
                    titleFilterChangeHandler = {titleFilterChangeHandler}
                />

                <NavigationBar 
                    isCartDrawerOpen = {isCartDrawerOpen} 
                    cartClickHandler = {cartClickHandler} 
                    isFilterDrawerOpen = {isFilterDrawerOpen}
                    filterClickHandler = {filterClickHandler}
                    CurrentVideoData = {CurrentVideoData}
                />

                <VideoAreaDesktop CurrentVideoData={CurrentVideoData}/>
            </div>
        </>
    )
}

export default BodyDeskTop