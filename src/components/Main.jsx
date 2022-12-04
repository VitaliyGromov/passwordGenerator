import React from 'react';

const Main = (props) => {
    return (
        <main className="box-border block text-2xl mx-32">
            {props.children}
        </main>
    );
};

export default Main;