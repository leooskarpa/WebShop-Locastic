import { useState, useRef } from 'react'
import './Dropdown.css'
import DropdownIcon from '../../Images/filter_dropdown.svg'
import { useDetectClickOutside } from '../Extras/useDetectClickOutside'


const Dropdown = () => {
    const dropdownRef = useRef(null);
    const [active, setActive] = useDetectClickOutside(dropdownRef, false);
    const [filter, setFilter] = useState("All")
    const onClick = () => setActive(!active);

    const onClickDropdownMenu = (filter) => {
        setFilter(filter);
        setActive(false);
    }

    return (
        <div className="dropdown-container">
            <button onClick={onClick} className="dropdown-btn">
                <img className="dropdown-icon" src={DropdownIcon} alt="Icon" />
                <span className="dropdown-title">{filter}</span>
            </button>

            <nav ref={dropdownRef} className={`menu ${active ? 'active' : 'inactive'}`}>
                <ul>
                    <li onClick={() => onClickDropdownMenu("All")}>All</li>
                    <li onClick={() => onClickDropdownMenu("Design")}>Design</li>
                    <li onClick={() => onClickDropdownMenu("Frontend")}>Frontend</li>
                    <li onClick={() => onClickDropdownMenu("Backend")}>Backend</li>
                    <li onClick={() => onClickDropdownMenu("Marketing")}>Marketing</li>
                </ul>
            </nav>

        </div>
    );
}

export default Dropdown;