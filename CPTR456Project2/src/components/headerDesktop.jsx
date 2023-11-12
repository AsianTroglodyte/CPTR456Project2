import StarIcon from '@mui/icons-material/Star';
import { Stack } from '@mui/material';
const HeaderDesktop = () => {
    return (
    <>

        <nav style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",

            left: "0px",
            top: "0px",
            width: "100%",
            height: "70px",
            backgroundColor: "#525E75"
        }}>
            <StarIcon sx={{fontSize: 60}}/>

            <h1>Video Star</h1>
        </nav>
    </>
    )
}
export default HeaderDesktop;