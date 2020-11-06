import React, {useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
const DatePicker = require("reactstrap-date-picker");

const SearchBar = (props) => {
    const [fromLocations, setFromLocations] = useState([]);
    const [toLocations, setToLocations] = useState([]);
    const [fromWhispererHidden, setFromWhispererHidden] = useState(false);
    const [toWhispererHidden, setToWhispererHidden] = useState(false);

    const fetchFromLocations = async (searchString = '') => {
        const urlFrom = `https://api.skypicker.com/locations?term=${searchString}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
        
        // fetching from locations
        const responseFrom = await fetch(urlFrom);
        const locationsFrom = await responseFrom.json();
        responseFrom && locationsFrom && setFromLocations(locationsFrom);
        
   
    }

    const fetchToLocations = async (searchString = '') => {
        const urlTo = `https://api.skypicker.com/locations?term=${searchString}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
        
        // fetching to locations
        const responseTo = await fetch(urlTo);
        const locationsTo = await responseTo.json();
        responseTo && locationsTo && setToLocations(locationsTo);
    }

    const handleFromInputChange = (e) => {
        setFromWhispererHidden(false);
        if (e.target.value.length >= 3) {
            fetchFromLocations(e.target.value);
        }

    } 

    const handleToInputChange = (e) => {
        if (e.target.value.length >= 3) {
            fetchToLocations(e.target.value);
        } 
    } 
    
    const handleItemFromClick = (e) => {
        setFromWhispererHidden(!fromWhispererHidden);

    }
    
    const handleItemToClick = (e) => {
        setToWhispererHidden(!toWhispererHidden);

    }

    
    

    // useEffect(() => {
    //     fetchLocations();
    // }, [])

    return (
        
        <div className="search-bar">
        
        <div className="input">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>From</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="from where you go" onChange={handleFromInputChange} />
            </InputGroup>
            {
                fromLocations.locations && fromLocations.locations.map((location, index) => (
                            <div key={index} onClick={props.handleFromChange} id={location.code}>{location.name}</div>
                        ))
            }
        </div>

        <div className="input">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                <InputGroupText>To</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="where you wanna go" onChange={handleToInputChange} />
            </InputGroup>
            
                {
                    toLocations.locations && toLocations.locations.map((location, index) => (
                                <div key={index} onClick={props.handleToChange} id={location.code}>{location.name}</div>
                            ))
                }
        </div>

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