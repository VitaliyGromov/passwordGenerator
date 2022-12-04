import React from 'react';
import PasswordLength from "./PasswordLenght";
import Checkbox from "./Checkbox";

const Form = () => {
    return (
        <form className="box-border grid break-words">
            <PasswordLength/>
            <Checkbox name={"numbers"}>Цифры</Checkbox>
            <Checkbox name={"symbols"}>Спец. символы</Checkbox>
            <Checkbox name={"uppercase"}>Использовать прописные буквы</Checkbox>
        </form>
    );
};

export default Form;