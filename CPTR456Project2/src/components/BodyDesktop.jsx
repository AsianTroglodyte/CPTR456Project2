import * as React from 'react'
import { useState, useEffect} from 'react'
import CartDrawerDesktop from "./CartDrawerDesktop"
import VideoAreaDesktop from "./VideoAreaDesktop"
import NavigationBar from "./NavigationBar"
import FilterDrawerDesktop from './FilterDrawerDesktop'
import "./Button.css"

const BodyDeskTop = (props) => {
    const {videoData, setVideoData} = props

    // filter related states
    const [priceFilter, setPriceFilter] = useState("none")
    const [durationFilter, setDurationFilter] = useState("none")
    const [titleFilter, setTitleFilter] = useState("none")

    // drawer related states
    const [isCartDrawerOpen, setCartIsDrawerOpen] = useState(false)
    const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

    // state for liked videos
    const [isLiked, setIsLiked] = useState(new Array(videoData.length))

    // state for querying videos
    const [query, setQuery] = useState("")

    // state for items in cart
    const [cartItems, setCartItems] = useState([])


    const cartClickHandler = () => {
        setCartIsDrawerOpen(!(isCartDrawerOpen))
    }

    const filterClickHandler = () => {
        setIsFilterDrawerOpen(!(isFilterDrawerOpen))
    }

    const priceFilterChangeHandler = (event) => {
        setPriceFilter(event.target.value)
    }

    const durationFilterChangeHandler = (event) => {
        setDurationFilter(event.target.value)
    }

    const titleFilterChangeHandler = (event) => {
        setTitleFilter(event.target.value)
    }

    const queryChangeHandler = (event) => {
        setQuery(event.target.value)
    }

    const isLikedHandler = (id) => {
        
    }

    const addItemHandler = (itemId, itemName, itemPrice) => {
        for (let i = 0; i < cartItems.length; i++){
            if (cartItems[i].id == itemId){
                return 0;
            }
        }
        setCartItems([...cartItems, {"id": itemId, "name": itemName, "price": itemPrice}])
    }   

    const removeItemHandler = (itemId) => {
        setCartItems(cartItems.filter(cartItem => {
            return cartItem.id != itemId
        }))
    }

    return (
        <>
            {cartItems ? cartItems.map((cartItem) =>{return cartItem.itemName}): null}
            <div style={{
                display: "flex",
                flexDirection: "row",
                width: "auto",
                minWidth: "100vw",
                top: "100px",
                left: "0",
            }}>

                <CartDrawerDesktop 
                    isCartDrawerOpen = {isCartDrawerOpen} 
                    cartClickHandler = {cartClickHandler} 

                    cartItems = {cartItems}

                    removeItemHandler = {removeItemHandler}
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

                    query = {query}
                    setQuery = {setQuery}
                />

                <NavigationBar 
                    isCartDrawerOpen = {isCartDrawerOpen} 
                    cartClickHandler = {cartClickHandler} 
                    isFilterDrawerOpen = {isFilterDrawerOpen}
                    filterClickHandler = {filterClickHandler}
                    videoData = {videoData}
                />



                <VideoAreaDesktop 
                    videoData={videoData} 
                    priceFilter={priceFilter} 
                    durationFilter={durationFilter} 
                    titleFilter={titleFilter} 
                    query={query}
                    queryChangeHandler={queryChangeHandler}
                    addItemHandler = {addItemHandler}
                />

            </div>
        </>
    )
}

export default BodyDeskTop