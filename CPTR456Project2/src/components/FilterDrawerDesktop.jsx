import { Drawer, Checkbox, FormGroup, FormControlLabel} from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import './FilterDrawerDesktop.css'

const FilterDrawerDesktop = (props) => {
    const {isFilterDrawerOpen, filterClickHandler} = props
    return (
        <>
            <Drawer 
                PaperProps={{
                    sx: {backgroundColor: "#78938A"},
                }}
                anchor='left' 
                open={isFilterDrawerOpen} 
                onClose={() => filterClickHandler()}
            >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    backgroundColor: "#78938A",
                    padding: "10px",
                    height: "100%",
                    width: "15rem"
                }}>
                    {/*this is the title of the filter section*/}
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"white"}}>FILTERS</p>
                        <TuneIcon sx={{fontSize: 30, color: "white"}}/>
                    </div>

                    {/*this is the Price filter section*/}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        <p style={{margin:"0px", padding:"0px", fontWeight:"bold", color:"white"}}>PRICE</p>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} sx={{fontColor: "white"}}label="Free" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Paid" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="low to high" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="high to low" />
                        </FormGroup>
                    </div>
                    {/*this is the Duration filter section*/}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"white"}}>DURATION</p>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="under 10 seconds" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="11-20 second" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="21-30 second" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="shortest to longest" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="longest to shortes" />
                        </FormGroup>
                    </div>


                    {/*this is the Title filter section which orders videos by title*/}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                        marginBottom: "10px"
                    }}>
                        <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"white"}}>TITLE</p>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Ascending A-Z" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Descending Z-A" />
                        </FormGroup>
                    </div>
                </div>
                    
            </Drawer>
        </>
    )
}
export default FilterDrawerDesktop