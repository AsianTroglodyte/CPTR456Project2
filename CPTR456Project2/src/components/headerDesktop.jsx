import StarIcon from '@mui/icons-material/Star';

const HeaderDesktop = () => {
    return (
    <>

        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",

            // position: "fixed",
            left: "0px",
            top: "0px",

            height: "70px",
            width: "100%",
            backgroundColor: "#525E75"
        }}>
            <StarIcon sx={{fontSize: 60}}/>

            <h1>Video Star</h1>
        </div>
    </>
    )
}
export default HeaderDesktop;