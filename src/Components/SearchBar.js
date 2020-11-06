import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Button } from 'reactstrap';
const DatePicker = require("reactstrap-date-picker");

const SearchBar = (props) => {
    const [dropdownToOpen, setDropdownToOpen] = useState(false);
    const [dropdownFromOpen, setDropdownFromOpen] = useState(false);
    const toggleTo = () => setDropdownToOpen(!dropdownToOpen);
    const toggleFrom = () => setDropdownFromOpen(!dropdownFromOpen);

    return (
        <div className="search-bar">
              
            {/* select to airport - passed as a API name of the airport   */}
            <Dropdown isOpen={dropdownToOpen} toggle={toggleTo}>
                <DropdownToggle caret>
                    To
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={props.handleToChange} name='PRG'>PRG</DropdownItem>
                    <DropdownItem onClick={props.handleToChange} name='LGW'>LGW</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            {/* select from passed as a API name of the airport*/}
            <Dropdown isOpen={dropdownFromOpen} toggle={toggleFrom}>
                <DropdownToggle caret>
                    From
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={props.handleFromChange} name='PRG'>PRG</DropdownItem>
                    <DropdownItem onClick={props.handleFromChange} name='LGW'>LGW</DropdownItem>
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