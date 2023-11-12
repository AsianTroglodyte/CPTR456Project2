import VideoBox from "./VideoBox"

const VideoAreaDesktop = (props) => {
    const {videoData} = props
    return (
        <>
            <div 
                style= {{
                    backgroundColor: "white",

                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",

                    top: "100px",
                    left: "0px",

                    height: "100%",
                    width: "auto",
                    padding: "20px",

                    gap: "20px"
            }}>
            {videoData ? videoData.map( (videoDatum) => {
                return <VideoBox videoDatum={videoDatum} key={videoDatum.id}/>
            }) : null}

            </div>
        </>
    )
}

export default VideoAreaDesktop