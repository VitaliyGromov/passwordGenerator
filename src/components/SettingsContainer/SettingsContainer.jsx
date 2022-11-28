import React from 'react';

const SettingsContainer = () => {
    return (
        <div className="box-content flex">
            <label htmlFor="symbols">Использовать символы: </label>
            <div>
                <input type="checkbox" id="numeric"/>
                <label htmlFor="numeric">12345</label>
            </div>
            <div>
                <input type="checkbox" id="letters"/>
                <label htmlFor="letters">abc</label>
            </div>
            <div>
                <input type="checkbox" id="upperCase"/>
                <label htmlFor="upperCase">ABC</label>
            </div>
            <div>
                <input type="checkbox" id="SpecialSymbols"/>
                <label htmlFor="SpecialSymbols">$@#&</label>
            </div>
        </div>
    );
};

export default SettingsContainer;