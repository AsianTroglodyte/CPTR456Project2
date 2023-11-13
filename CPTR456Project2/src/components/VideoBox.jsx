import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import { useState } from 'react';
const VideoBox = (props) => {
    const {videoDatum, addItemHandler} = props
    const {videoIsLiked, setVideoIsLiked} = useState("")
    
    return (
        <>
            {/*the following div contains all the video cards*/}
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                {/*the following div contains the video url*/}
                <div style={{
                    margin: "0px",
                    padding: "0px",

                    display: "flex",

                    width: "236px",
                    height: "133px",

                    backgroundColor: "#525E75",
                    BorderStyle: "solid",
                    borderColor: "white"
                }}>
                    <video  style={{
                        width:"236px", 
                        height:"133px",
                        }}
                        crossOrigin="anonymous"
                        controls
                    >
                        <source src={videoDatum.url} />
                    </video >
                    {/* <img
                        src={videoDatum.url}
                        alt="bruh"
                        width="400"
                        height="341" 
                    /> */}
                </div>

                {/*the following div contains all the textual content of the video cards along with the buttons 
                containing the like button and add to cart feature*/}
                <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between", height: "50px"}}>
                    <div style={{width: "120px", height: "30px"}}>
                        <p style={{
                            color: "black", 
                            margin: "0px", 
                            padding: "0px",
                            // maxHeight: "45px",
                            // width: "auto",
                            textAlign: "left",

                            fontSize: "10px",
                            fontWeight: "bold",

                            // the following should handle overflowing text
                            display: "-webkit-box",
                            overflow: "hidden",

                            textOverflow: "ellipsis",
                            webkitLineClamp: "3",
                            webkitBoxOrient: "vertical",
                        }}>
                            {videoDatum.name}{/*daft pneumonoultramicroscopicsilicovolcanoconiosis*/}
                        </p>
                        <div style={{
                            color: "black", 
                            margin: "0px", 
                            padding: "0px",
                            textAlign: "left",

                            fontSize: "10px",
                            fontWeight: "normal",

                            // the following should handle overflowing text
                            display: "-webkit-box",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            webkitLineClamp: "3",
                            webkitBoxOrient: "vertical"
                        }}>
                            {videoDatum.duration}
                        </div>
                    </div>

                {/*the following div contains all the textual content of the video cards along with the buttons 
                containing the like button and add to cart feature*/}
                    <div style={{display: "flex", flexDirection: "column", height:"100%"}}>
                        <Button style={{
                            margin: "0px", 
                            padding: "0px", 
                            maxWidth: '34px', 
                            maxHeight: '30px', 
                            minWidth: '40px', 
                            minHeight: '30px'
                        }}
                        onClick={() => {
                            addItemHandler(videoDatum.id, videoDatum.name, videoDatum.price)
                        }}>
                            <AddShoppingCartIcon style={{color: 'black'}}/>
                        </Button>

                        <Button style={{
                            margin: "0px", 
                            padding: "0px", 
                            maxWidth: '40px', 
                            maxHeight: '30px', 
                            minWidth: '40px', 
                            minHeight: '30px'
                        }}
                        >
                            <FavoriteIcon style={{color: 'black'}}/>
                        </Button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default VideoBox