import useState from 'react'
import ClearIcon from '@mui/icons-material/Clear';

const CartItemCard = () => {
    // const {} = props
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "white",
                height: "50px"
            }}>
                <div style={{padding: "5px  "}}>
                    <p style={{margin: "0px", padding: "0px", fontWeight: "bold", fontSize:"14px", color:"black"}}>Title</p>
                    <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"grey", fontSize:"14px"}}>price</p>
                </div>
                <div>
                    <ClearIcon style={{
                    }}
                    sx={{ color: "red"}}
                    />
                </div>
            </div>
        </>
    )
}
export default CartItemCard