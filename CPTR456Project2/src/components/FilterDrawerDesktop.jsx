import { Drawer, Checkbox, RadioGroup, FormControlLabel, Radio} from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import './FilterDrawerDesktop.css'

const FilterDrawerDesktop = (props) => {
    const {isFilterDrawerOpen, 
        filterClickHandler,
        priceFilter,
        priceFilterChangeHandler,
        durationFilter,
        durationFilterChangeHandler,
        titleFilter,
        titleFilterChangeHandler
        } = props
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
                        <RadioGroup sx={{color: "white"}} 
                            value={priceFilter}
                            onChange={priceFilterChangeHandler}
                        >
                            <FormControlLabel value="Free" control={<Radio  />} sx={{fontColor: "white"}}label="Free" />
                            <FormControlLabel value="Paid" control={<Radio  />} label="Paid" />
                            <FormControlLabel value="low to high" control={<Radio  />} label="low to high" />
                            <FormControlLabel value="high to low" control={<Radio  />} label="high to low" />
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
                            <FormControlLabel value="under 10 seconds" control={<Radio  />} label="under 10 seconds" />
                            <FormControlLabel value="11-20 seconds" control={<Radio  />} label="11-20 seconds" />
                            <FormControlLabel value="21-30 secons" control={<Radio  />} label="21-30 seconds" />
                            <FormControlLabel value="shortest to longest" control={<Radio  />} label="shortest to longest" />
                            <FormControlLabel value="longest to shortest" control={<Radio  />} label="longest to shortest" />
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
                        </RadioGroup>
                    </div>
                </div>
                    
            </Drawer>
        </>
    )
}
export default FilterDrawerDesktop