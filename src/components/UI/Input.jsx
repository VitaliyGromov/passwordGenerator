import React from 'react';

const Input = (props) => {
    const {value} = props
    return (
        <div className="grid mb-3">
            <input type="text" disabled={true} className="bg-very-light-grey rounded px-[15px] py-[6px] leading-9" value={value}/>
        </div>
    );
};

export default Input;