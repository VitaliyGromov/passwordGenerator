import React, {useState} from 'react';

const PasswordLength = (props) => {
    const [length, setLength] = useState('6');
    return (
        <div className="box-content flex">
            <label htmlFor="length" className="mx-1.5">Длина пароля: </label>
            <input type="range"
                   min="1"
                   max="100"
                   id="length"
            onChange={(event) => setLength(event.target.value)}/>
            <h4 className="ml-2.5 bg-blue-100 p-1.5 rounded-xl">{length}</h4>
        </div>
    );
};

export default PasswordLength;