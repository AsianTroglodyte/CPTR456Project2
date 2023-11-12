import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TuneIcon from '@mui/icons-material/Tune';
import Button from '@mui/material/Button';
// import "./NavigationBar.css"

const NavigationBar = (props) => {
    const { isCartDrawerOpen, cartClickHandler, isFilterDrawerOpen, filterClickHandler, videoData} = props
    return (
    <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",

                height: "100%",

                backgroundColor: "#78938A",
                size: "auto"
            }}>
                <Button style={{
                    margin: "15px 0px 0px 0px", 
                    padding: "0px 0px 0px 0px", 
                    fontWeight: "bold", 
                    backgroundColor: "#78938A",
                    fontSize: "50",
                    color:"#78938A",
                    height: "50px",
                    '&:hover': {
                        backgroundColor: "#002ead",
                        transition: "0.7s"
                    },
                    "button:focus": { outline: "none !important;;"}
                }}
                onClick={() => cartClickHandler()}
                >
                    <ShoppingCartIcon sx={{fontSize: 30, color: "white"}}/>
                </Button>

                <Button style={{
                    margin: "0px 0px 0px 0px", 
                    padding: "0px 0px 0px 0px", 
                    fontWeight: "bold", 
                    backgroundColor: "#78938A",
                    fontSize: "50",
                    color:"#78938A",
                    height: "50px",
                }}
                onClick={() => filterClickHandler()}
                >
                    <TuneIcon sx={{fontSize: 30, color: "white"}}/>
                </Button>
            </div>
    </>
    )
}

export default NavigationBar;