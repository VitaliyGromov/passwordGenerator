import React, {useState} from 'react';
import {options} from "../../API/Servecies";

const PasswordLength = () => {
    const [length, setPasswordLength] = useState('12');
    function setLength(){
        options.params.length = length;
    }
    return (
        <div className="items-center box-border flex break-words text-center">
            <span className="mr-2.5">Длина пароля:</span>
            <input type="range"
                   name="length"
                   className="bg-very-light-grey"
                   min="1"
                   max="60"
                   value={length}
                   onChange={(event) => setPasswordLength(event.target.value)}/>
            <input type="number"
                   name="length"
                   className="bg-very-light-grey w-16 h-9 ml-2.5 p-1 outline-0 rounded"
                   min="1"
                   max="60"
                   value={length}
                   onChange={(event) => setPasswordLength(event.target.value)}/>
        </div>
    );
};

export default PasswordLength;