import { Drawer, Checkbox, RadioGroup, FormControlLabel, Radio} from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import './FilterDrawerDesktop.css'
import TextField from '@mui/material/TextField';

const FilterDrawerDesktop = (props) => {
    const {isFilterDrawerOpen, 
        filterClickHandler,
        priceFilter,
        priceFilterChangeHandler,
        durationFilter,
        durationFilterChangeHandler,
        titleFilter,
        titleFilterChangeHandler,} = props
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
                {/*this div is a container for all the items contained within the filter drawer*/}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    backgroundColor: "#78938A",
                    padding: "10px",
                    height: "100%",
                    width: "15rem"
                }}>
                    {/*this div contains the title of the filter section*/}
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
                        <RadioGroup sx={{color: "white"}} 
                            value={priceFilter}
                            onChange={priceFilterChangeHandler}
                        >
                            <FormControlLabel value="Free" control={<Radio  />} sx={{fontColor: "white"}}label="Free" />
                            <FormControlLabel value="Paid" control={<Radio  />} label="Paid" />
                            <FormControlLabel value="Low to high" control={<Radio  />} label="Low to high" />
                            <FormControlLabel value="High to low" control={<Radio  />} label="High to low" />
                            <FormControlLabel value="None" control={<Radio  />} label="none" />
                        </RadioGroup>
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
                        <RadioGroup sx={{color: "white"}} 
                            value={durationFilter}
                            onChange={durationFilterChangeHandler}
                        >
                            <FormControlLabel value="Under 10 seconds" control={<Radio  />} label="Under 10 seconds" />
                            <FormControlLabel value="10-20 seconds" control={<Radio  />} label="10-20 seconds" />
                            <FormControlLabel value="Over 20 seconds" control={<Radio  />} label= "Over 20 seconds" />
                            <FormControlLabel value="Shortest to longest" control={<Radio  />} label="Shortest to longest" />
                            <FormControlLabel value="Longest to shortest" control={<Radio  />} label="Longest to shortest" />
                            <FormControlLabel value="None" control={<Radio  />} label="none" />
                        </RadioGroup>
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
                        <RadioGroup sx={{color: "white"}} 
                            value={titleFilter}
                            onChange={titleFilterChangeHandler}
                        >
                            <FormControlLabel value="Ascending A-Z" control={<Radio  />} label="Ascending A-Z" />
                            <FormControlLabel value="Descending Z-A" control={<Radio  />} label="Descending Z-A" />
                            <FormControlLabel value="None" control={<Radio  />} label="none" />
                        </RadioGroup>
                    </div>
                </div>
                    
            </Drawer>
        </>
    )
}
export default FilterDrawerDesktop