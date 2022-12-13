import React from 'react';

const Textarea = (props) => {
    const {value} = props;
    return (
        <div className="relative mt-5 h-[178px]">
            <textarea className="bg-very-light-grey w-[100%] h-[100%] rounded p-5" value={value}/>
        </div>
    );
};

export default Textarea;