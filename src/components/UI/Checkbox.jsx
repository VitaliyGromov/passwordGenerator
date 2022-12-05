import React from 'react';

const Checkbox = (props) => {
    const {name} = props
    return (
        <div>
            <label>
                <input type="checkbox" name={name} className="mr-2.5 w-5 h-5"/>
                <span>{props.children}</span>
            </label>
        </div>
    );
};

export default Checkbox;