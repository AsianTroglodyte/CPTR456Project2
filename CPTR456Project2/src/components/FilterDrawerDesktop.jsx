import { Drawer, Checkbox, FormGroup, FormControlLabel, RadioGroup} from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import './FilterDrawerDesktop.css'
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

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
                    <div style = {{
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
                    <div class = "filterDrawerSections">
                        <p style={{margin:"0px", padding:"0px", fontWeight:"bold", color:"white"}}>PRICE</p>
                        <RadioGroup sx={{color: "white"}}
                            value={priceFilter}
                            onChange={priceFilterChangeHandler}
                            >
                            <FormControlLabel value= "Free" control={<Radio />} sx={{fontColor: "white"}}label="Free" />
                            <FormControlLabel value= "Paid" control={<Radio />} label="Paid" />
                            <FormControlLabel value= "Low to high" control={<Radio />} label="Low to high" />
                            <FormControlLabel value= "High to low" control={<Radio />} label="High to low" />
                            <FormControlLabel value= "none" control={<Radio />} label="none" />
                        </RadioGroup>
                    </div>
                    {/*this is the Duration filter section*/}
                    <div class = "filterDrawerSections">
                        <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"white"}}>DURATION</p>
                        <RadioGroup sx={{color: "white"}}
                            value={durationFilter}
                            onChange={durationFilterChangeHandler}
                        >
                            <FormControlLabel value= "Free 10 seconds" control={<Radio />} label="Under 10 seconds" />
                            <FormControlLabel value= "11-20 second" control={<Radio /> } label="11-20 seconds" />
                            <FormControlLabel value= "21-30 seconds" control={<Radio />} label="21-30 seconds" />
                            <FormControlLabel value= "Shortest to longest" control={<Radio />} label="Shortest to longest" />
                            <FormControlLabel value= "Longest to shortest" control={<Radio />} label="Longest to shortest" />
                            <FormControlLabel value= "none" control={<Radio />} label="none" />
                        </RadioGroup>
                    </div>


                    {/*this is the Title filter section which orders videos by title*/}
                    <div class = "filterDrawerSections">
                        <p style={{margin: "0px", padding: "0px", fontWeight: "bold", color:"white"}}>TITLE</p>
                        <RadioGroup sx={{color: "white"}} 
                            value={titleFilter}
                            onChange={titleFilterChangeHandler}
                        >
                            <FormControlLabel value= "Ascending A-Z" control={<Radio />} label="Ascending A-Z" />
                            <FormControlLabel value= "Descending Z-A" control={<Radio />} label="Descending Z-A" />
                            <FormControlLabel value= "none" control={<Radio />} label="none" />
                        </RadioGroup>
                    </div>

                    {/*this is the section for applying changes*/}
                    <div class = "filterDrawerSections">
                        <Button style={{
                            margin: "10px 0px 0px 0px", 
                            padding: "2px 10px 2px 10px", 
                            marginTop: "25px",
                            marginBottom: "15px",
                            fontWeight: "bold", 
                            backgroundColor: "white",
                            color:"#78938A"
                        }}>
                        </Button>
                    </div>
                </div>
                    
            </Drawer>
        </>
    )
}
export default FilterDrawerDesktop