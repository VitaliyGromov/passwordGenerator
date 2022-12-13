import React, {useMemo, useState} from 'react';
import PasswordLength from "./PasswordLenght";
import Checkbox from "./Checkbox";
import Textarea from "./Textarea";
import {options} from "../../API/Servecies";
import Button from "./Button";

const Form = () => {
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [includeUppercase, setIncludeUppercase] = useState(false);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [length, setPasswordLength] = useState('12');

    function generatePassword(event){
        event.preventDefault();
        if(length){
            options.params.length = length;
        }
        if(includeNumbers){
            options.params.numbers = "true";
        }
        if(includeSymbols){
            options.params.symbols = "true";
        }
        if(includeUppercase){
            options.params.uppercase = "true";
        }
        if(includeLowercase){
            options.params.lowercase = "true"
        }
    }

    return (
        <form className="box-border grid break-words w-[48%] h-96">
            <PasswordLength onChange={(e) => setPasswordLength(e.target.value)} value={length}/>
            <Checkbox onChange={(e) => setIncludeNumbers(e.target.checked)} checked={includeNumbers}>Цифры</Checkbox>
            <Checkbox onChange={(e) => setIncludeSymbols(e.target.checked)} checked={includeSymbols}>Спец. символы</Checkbox>
            <Checkbox onChange={(e) => setIncludeUppercase(e.target.checked)} checked={includeUppercase}>ПРОПИСНЫЕ ЛАТИНИЦА</Checkbox>
            <Checkbox onChange={(e) => setIncludeLowercase(e.target.checked)} checked={includeLowercase}>строчные латиница</Checkbox>
            <Textarea/>
            <div className="mt-4">
                <Button onClick={generatePassword}>Сгенерировать</Button>
            </div>
        </form>
    );
};

export default Form;