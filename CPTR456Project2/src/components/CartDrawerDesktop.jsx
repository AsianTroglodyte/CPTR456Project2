import { Drawer, Box, Typography, } from '@mui/material'
import useState from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartItemCard from './CartItemCard';
import Button from '@mui/material/Button';

const CartDrawerDesktop = (props) => {
    const {isDrawerOpen, cartClickHandler, totalCost, setTotalCost} = props
    return (
        <>
            <Drawer 
                PaperProps={{
                    sx: {backgroundColor: "#78938A"},
                }}
                anchor='left' 
                open={isDrawerOpen} 
                onClose={() => cartClickHandler()}
            >

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    backgroundColor: "#78938A",
                    height: "100%",
                    width: "15rem"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"white"}}>Cart</p>
                        <ShoppingCartIcon style={{fontSize: 30, color: "white"}}/>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        backgroundColor: "Gainsboro",
                        overflow: "auto",
                        height: "75%",
                        gap: "3px"
                    }}>
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />
                        <CartItemCard />

                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                        <p style={{
                            margin: "10px 0px 0px 0px", 
                            padding: "0px", 
                            fontWeight: "bold", 
                            color:"white"
                        }}>
                            total cost: ${totalCost}
                        </p>
                    </div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}>
                        <Button style={{
                            margin: "10px 0px 0px 0px", 
                            padding: "2px 10px 2px 10px", 
                            fontWeight: "bold", 
                            backgroundColor: "white",
                            color:"#78938A"
                        }}>
                            purchase
                        </Button>
                    </div>
                </div>
            </Drawer>
        </>
    )
}
export default CartDrawerDesktop