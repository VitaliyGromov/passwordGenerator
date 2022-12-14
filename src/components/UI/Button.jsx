import React from 'react';

const Button = (props) => {
    const {onClick} = props
    return (
        <button className="bg-blue-700 h-16 p-2 rounded text-cyan-50 w-48 hover:bg-blue-900" type="submit" onClick={onClick}>
            {props.children}
        </button>
    );
};

export default Button;