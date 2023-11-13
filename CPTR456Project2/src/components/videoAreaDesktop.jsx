import VideoBox from "./VideoBox"
import { TextField } from "@mui/material"
const VideoAreaDesktop = (props) => {
    const {videoData, 
        priceFilter,
        durationFilter, 
        titleFilter,
        query,
        queryChangeHandler,
        addItemHandler} = props


    const timeConverter = (time) => {
        return Number(time.slice(6.11))
    }

    const filterSortFunction = (data) => {
        let filteredData = data.filter((filteredVideoDatum)=> filteredVideoDatum.name.toLowerCase().includes(query.toLowerCase()))
        if (priceFilter == "Free"){
            filteredData = filteredData.filter((filteredVideoDatum)=> 
            filteredVideoDatum.isFree == true)
        }
        else if (priceFilter == "Paid"){
            filteredData = filteredData.filter((filteredVideoDatum)=> 
            filteredVideoDatum.isFree == false)
        }

        if (priceFilter == "Low to high"){
            filteredData = filteredData.sort((a, b)=>{
                return b.price - a.price
            })
        }
        else if (priceFilter == "High to low"){
            filteredData = filteredData.sort((a, b)=>{
                return a.price - b.price
            })
        }

        if (durationFilter == "Under 10 seconds"){
            filteredData = filteredData.filter((filteredVideoDatum)=> 
            timeConverter(filteredVideoDatum.duration) < 10)
        }
        else if (durationFilter == "10-20 seconds"){
            filteredData = filteredData.filter((filteredVideoDatum)=> 
            ((timeConverter(filteredVideoDatum.duration) >= 10) && (timeConverter(filteredVideoDatum.duration) <= 20)))
        }
        else if (durationFilter == "Over 20 seconds"){
            filteredData = filteredData.filter((filteredVideoDatum)=> 
            timeConverter(filteredVideoDatum.duration) > 20)
        }
        if (durationFilter == "Shortest to longest"){
            filteredData = filteredData.sort((a, b) => {
                return timeConverter(a.duration) - timeConverter(b.duration)
            })
        }
        if (durationFilter == "Longest to shortest"){
            filteredData = filteredData.sort((a, b) => {
                return timeConverter(b.duration) - timeConverter(a.duration)
            })
        }

        if (titleFilter == "Ascending A-Z"){
            filteredData = filteredData.sort((a, b) => {return 1})
        }
        if (titleFilter == "Descending Z-A"){
            filteredData = filteredData.sort((a, b) => {return -1})
        }

        return filteredData
    }
    
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                width: "94vw",
            }}>
                {/*this div contains the search bar*/}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    backgroundColor: "white",
                }}>
                    <TextField value={query} label="Search..." variant="standard" 
                    style={{marginTop: "10px", marginBottom: "40px", width: "300px"}}
                    onChange={queryChangeHandler}/>
                </div>

                {/*this div contains the recommended section*/}
                <p style={{
                        color: "black",
                        fontWeight: "bolder",
                        alignContent: "center"
                }}>
                Recommended for you
                </p>
                <div style={{
                        backgroundColor: "white",

                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",

                        // height: "auto",
                        // width: "auto",
                        maxWidth: "1100px",
                        padding: "20px",

                        gap: "20px"
                }}>
                    {videoData ? filterSortFunction(videoData).slice(0,3).map((videoDatum) => {
                        return <VideoBox 
                            videoDatum={videoDatum} 
                            key={videoDatum.id} 
                            addItemHandler={addItemHandler} 
                            />
                    }) : null}
                </div>



                {/*this div contains all the videos*/}
                <p style={{
                        color: "black",
                        fontWeight: "bolder",
                        alignContent: "center"
                }}>
                Other videos
                </p>

                <div 
                    style= {{
                        backgroundColor: "white",

                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",

                        // height: "auto",
                        // width: "auto",
                        maxWidth: "1100px",
                        padding: "20px",

                        gap: "20px"
                }}>
                {videoData ? filterSortFunction(videoData).map((videoDatum) => 
                    {
                        return <VideoBox 
                                videoDatum={videoDatum} 
                                key={videoDatum.id} 
                                addItemHandler={addItemHandler} 
                                />
                    }) : null}

                </div>
            </div>
        </>
    )
}

export default VideoAreaDesktop