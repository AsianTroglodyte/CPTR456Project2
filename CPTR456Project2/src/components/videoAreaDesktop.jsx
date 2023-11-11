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
                    justifyContent: "left",

                    height: "400px",
                    width: "500px",
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