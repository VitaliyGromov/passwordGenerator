import React from 'react';

const PasswordLength = (props) => {
    const {value} = props
    return (
        <div className="items-center box-border flex break-words text-center">
            <span className="mr-2.5">Длина пароля:</span>
            <input type="range" name="length" min="1" max="60" value={value}/>
            <input type="number" name="length" className="bg-blue-200 w-16 h-9 ml-2.5" min="1" max="60" value={value}/>
        </div>
    );
};

export default PasswordLength;