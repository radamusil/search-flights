import React, {useState} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const SearchBar = (props) => {
    const [dropdownToOpen, setDropdownToOpen] = useState(false);
    const [dropdownFromOpen, setDropdownFromOpen] = useState(false);
/*     const [to, setTo] = useState('');
    const [from, setFrom] = useState(''); */

    const toggleTo = () => setDropdownToOpen(prevState => !prevState);
    const toggleFrom = () => setDropdownFromOpen(!dropdownFromOpen);

/*     const handleToChange = (e) => {
        setTo(e.currentTarget.name);
    }

    const handleFromChange = (e) => {
        setFrom(e.currentTarget.name);
    } */

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
        </div>
    )

}

export default SearchBar;