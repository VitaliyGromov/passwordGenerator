import React from 'react';
import styles from "./button.module.css"

const Button = (props) => {
    return (
        <div className="flex justify-center">
            <button className={styles.button}>
                {props.children}
            </button>
        </div>
    );
};

export default Button;