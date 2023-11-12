import VideoBox from "./VideoBox"

const VideoAreaDesktop = (props) => {
    const {CurrentVideosData} = props
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
                    width: "100%",
                    padding: "20px",

                    gap: "20px"
            }}>
            {CurrentVideosData ? CurrentVideosData.map( (VideosDatum) => {
                return <VideoBox VideosDatum={VideosDatum} key={VideosDatum.id}/>
            }) : null}

            </div>
        </>
    )
}

export default VideoAreaDesktop