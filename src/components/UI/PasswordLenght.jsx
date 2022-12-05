import React, {useState} from 'react';

const PasswordLength = () => {
    const [length, setPasswordLength] = useState('12');
    return (
        <div className="items-center box-border flex break-words text-center">
            <span className="mr-2.5">Длина пароля:</span>
            <input type="range"
                   name="length"
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