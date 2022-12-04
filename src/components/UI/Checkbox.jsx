import React from 'react';

const Checkbox = (props) => {
    const {name} = props
    return (
        <div>
            <input type="checkbox" name={name} className="mr-2.5 w-5 h-5"/>
            <span>{props.children}</span>
        </div>
    );
};

export default Checkbox;