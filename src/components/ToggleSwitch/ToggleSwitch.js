import React, { useContext, useState } from "react";
import './ToggleSwitch.css'
import { CurrentTemperatureUnitContext } from '../contexts/CurrentTemperatureUnitContext';

const ToggleSwitch = () => {
    // const [currentTemperatureUnit, handleToggleSwitchChange] = useState("C")

    // const handleChange = (e) => {
    //     if (currentTemperatureUnit === 'C') handleToggleSwitchChange('F')
    //     if (currentTemperatureUnit === 'F') handleToggleSwitchChange('C')

    const {currentTemperatureUnit, handleToggleSwitchChenge} = useContext(CurrentTemperatureUnitContext)
   
     return (
        <label className="switch">
            <input type='checkbox'
                className="switch__box"
                onChange={handleToggleSwitchChenge} />
            <span className="switch__slider"></span>
            <p className={`switch__temp-F ${currentTemperatureUnit === 'F' && "switch__active"}`}>F</p>
            <p className={`switch__temp-C ${currentTemperatureUnit === 'C' && "switch__active"}`}>C</p>
        </label>
    )
};

export default ToggleSwitch