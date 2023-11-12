import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const VideoBox = (props) => {
    const {videoDatum} = props
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <div style={{
                    display: "flex",
                    

                    width: "150px",
                    height: "100px",

                    backgroundColor: "#525E75",
                    BorderStyle: "solid",
                    borderColor: "white"
                }}>
                    <video  style={{
                        width:"150px", 
                        height:"100px",
                        }}
                        crossOrigin="anonymous"
                        controls
                    >
                        <source src={videoDatum.url} />
                    </video >
                </div>

                <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between", height: "50px"}}>
                    <div style={{width: "120px", height: "30px"}}>
                        <p style={{
                            color: "black", 
                            margin: "0px", 
                            padding: "0px",
                            alignContent: "left",

                            fontSize: "10px",
                            fontWeight: "bold"
                        }}>
                            {videoDatum.name}
                        </p>
                        <p style={{
                            color: "black", 
                            margin: "0px", 
                            padding: "0px",

                            fontSize: "10px",
                            fontWeight: "normal"
                        }}>
                            {videoDatum.duration}
                        </p>
                    </div>

                    <div style={{display: "flex", flexDirection: "column", height:"100%"}}>
                        <AddShoppingCartIcon style={{color: 'black'}}/>
                        <FavoriteIcon style={{color: 'black'}}/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default VideoBox