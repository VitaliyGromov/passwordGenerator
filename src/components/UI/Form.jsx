import React, {useState} from 'react';
import PasswordLength from "./PasswordLenght";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import {options} from "../../API/Servecies";

const Form = () => {
    const [checked, setChecked] = useState(false);
    function setParamsUppercase(name){
        (options.params)[name] = "true";
        console.log(options.params);
    }

    return (
        <form className="box-border grid break-words w-[48%] h-96">
            <PasswordLength/>
            <Checkbox onChange={() => setParamsUppercase('numbers')}>Цифры</Checkbox>
            <Checkbox onChange={() => setParamsUppercase('symbols')}>Спец. символы</Checkbox>
            <Checkbox onChange={() => setParamsUppercase('uppercase')}>ПРОПИСНЫЕ ЛАТИНИЦА</Checkbox>
            <Checkbox onChange={() => setParamsUppercase('lowercase')}>строчные латиница</Checkbox>
            <Textarea/>
        </form>
    );
};

export default Form;