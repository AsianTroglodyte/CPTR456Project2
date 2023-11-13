import useState from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';
const CartItemCard = (props) => {
    const {cartItem, removeItemHandler} = props
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "white",
                height: "60px",
                width: "100%"
            }}>
                <div style={{padding: "5px", flexDirection: "column", justifyContent: "space-between"}}>
                    <p style={{
                        margin: "0px", 
                        padding: "0px", 
                        fontWeight: "bold", 
                        fontSize:"10px", 
                        color:"black",
                        width: "100%",

                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        webkitLineClamp: "3",
                        webkitBoxOrient: "vertical"
                    }}>{cartItem.name}</p>
                    <p style={{margin: "0px", 
                        padding: "0px", 
                        fontWeight: "bold", 
                        fontSize:"10px", 
                        color:"grey",
                        width: "100%",
                        
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        webkitLineClamp: "3",
                        webkitBoxOrient: "vertical"
                        }}>${cartItem.price}</p>
                </div>
                <div>
                        <Button style={{
                            margin: "0px", 
                            padding: "0px", 
                            maxWidth: '35px', 
                            maxHeight: '60px', 
                            minWidth: '35px', 
                            minHeight: '60px'
                        }}
                        onClick={() => {
                            removeItemHandler(cartItem.id)
                        }}
                        >
                            <ClearIcon style={{
                            }}
                            sx={{ color: "red"}}
                            />
                        </Button>
                </div>
            </div>
        </>
    )
}
export default CartItemCard