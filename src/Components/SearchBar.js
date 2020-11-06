import React, {useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Button } from 'reactstrap';
const DatePicker = require("reactstrap-date-picker");

const SearchBar = (props) => {
    const [dropdownToOpen, setDropdownToOpen] = useState(false);
    const [dropdownFromOpen, setDropdownFromOpen] = useState(false);
    const [fromLocations, setFromLocations] = useState([]);
    const [toLocations, setToLocations] = useState([]);
    // cosnt [loading, setLoading] = useState(true);

    const toggleTo = () => setDropdownToOpen(!dropdownToOpen);
    const toggleFrom = () => setDropdownFromOpen(!dropdownFromOpen);

    const fetchLocations = async () => {
        const urlFrom = `https://api.skypicker.com/locations?term=praha&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
        const urlTo = `https://api.skypicker.com/locations?term=PRG&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
        
        // fetching from locations
        const responseFrom = await fetch(urlFrom);
        const locationsFrom = await responseFrom.json();
        responseFrom && locationsFrom && setFromLocations(locationsFrom);
        
        // fetching to locations
        const responseTo = await fetch(urlTo);
        const locationsTo = await responseTo.json();
        responseTo && locationsTo && setToLocations(locationsTo);
    }

    useEffect(() => {
        fetchLocations();
    }, [])

    return (
        
        <div className="search-bar">
          
            {/* select to airport - passed as a API name of the airport   */}
            <Dropdown isOpen={dropdownToOpen} toggle={toggleTo}>
                <DropdownToggle caret>
                    To
                </DropdownToggle>
                <DropdownMenu>
                    {
                        // displaying all locations matching the search string, TODO input for search string
                        fromLocations.locations && fromLocations.locations.map((location, index) => (
                            <DropdownItem key={index} onClick={props.handleFromChange} name={location.code}>{location.name}</DropdownItem>
                        ))
                        
                    }
                </DropdownMenu>
            </Dropdown>

            {/* select from passed as a API name of the airport*/}
            <Dropdown isOpen={dropdownFromOpen} toggle={toggleFrom}>
                <DropdownToggle caret>
                    From
                </DropdownToggle>
                <DropdownMenu>
                    {
                        // displaying all locations matching the search string, TODO input for search string
                        toLocations.locations && toLocations.locations.map((location, index) => (
                            <DropdownItem key={index} onClick={props.handleToChange} name={location.code}>{location.name}</DropdownItem>
                        ))
                    }

                </DropdownMenu>
            </Dropdown>

            <FormGroup>
                <Label>Select date FROM</Label>
                <DatePicker id = "date-from" value = {props.dateFromValue} onChange= {(v,f) => props.handleFromDateChange(v, f)} />
            </FormGroup>

            <FormGroup>
                <Label>Select date TO</Label>
                <DatePicker id = "date-to" value = {props.dateToValue} onChange= {(v,f) => props.handleToDateChange(v, f)} />
            </FormGroup>

            <Button color="success" onClick={props.handleSubmit}>Search</Button>



        </div>

                
    )

}

export default SearchBar;