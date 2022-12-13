import React from "react";
const Checkbox = (props) => {
    const {onChange, checked} = props;

    return (
        <div className="items-center flex">
            <label className="cursor-pointer">
                <input type="checkbox" onChange={onChange} checked={checked} className="mr-2.5 w-5 h-5"/>
                <span className="inline">{props.children}</span>
            </label>
        </div>
    );
};

export default Checkbox;