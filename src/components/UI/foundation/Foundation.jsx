import React from 'react';
import styles from "./foundation.module.css";

const Foundation = (props) => {
    return (
        <div className={styles.foundation}>
            {props.children}
        </div>
    );
};

export default Foundation;