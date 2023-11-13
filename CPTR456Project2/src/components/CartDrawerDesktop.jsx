import { Drawer, Box, Typography, } from '@mui/material'
import { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItemCard from './CartItemCard';
import Button from '@mui/material/Button';

const CartDrawerDesktop = (props) => {
    const {isCartDrawerOpen, 
            cartClickHandler, 
            cartItems,
            removeItemHandler} = props
    
    return (
        <>
            <Drawer 
                PaperProps={{
                    sx: {backgroundColor: "#78938A"},
                }}
                anchor='left' 
                open={isCartDrawerOpen} 
                onClose={() => cartClickHandler()}
            >
                
                {/*this div contains all the elements within the drawer*/}
                <div style={{       
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    backgroundColor: "#78938A",
                    height: "100%",
                    width: "15rem"
                }}>

                    {/*this div contains the cart title and the cart icon*/}
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"white"}}>CART</p>
                        <ShoppingCartIcon style={{fontSize: 30, color: "white"}}/>
                    </div>

                    {/*this div contains the cart items*/}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        backgroundColor: "Gainsboro",
                        overflow: "auto",
                        height: "75%",
                        width: "100%",
                        gap: "3px"
                    }}>
                    {cartItems.map((cartItem) => {
                        return <CartItemCard 
                            cartItem={cartItem} 
                            key={cartItem.id} 
                            removeItemHandler={removeItemHandler} />
                    })}
                    </div>

                    <p style={{
                        margin: "10px 0px 0px 0px", 
                        padding: "0px", 
                        fontWeight: "bold", 
                        color:"white",
                        textAlign: "center"
                    }}>
                        Total cost: ${cartItems.reduce((accumulator, currentValue) => {
                                        console.log(currentValue.price)
                                        return accumulator + currentValue.price
                                    },0).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}
                    </p>

                    <Button style={{
                        margin: "10px 0px 0px 0px", 
                        padding: "2px 10px 2px 10px", 
                        fontWeight: "bold", 
                        backgroundColor: "white",
                        color:"#78938A",
                    }}>
                        purchase
                    </Button>
                </div>
            </Drawer>
        </>
    )
}
export default CartDrawerDesktop