import React from 'react';

const Foundation = (props) => {
    return (
        <div className="box-border flex flex-col mb-8">
            {props.children}
        </div>
    );
};

export default Foundation;