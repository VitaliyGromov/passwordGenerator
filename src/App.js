import styles from "./styles/App.module.css"
import Foundation from "./components/UI/foundation/Foundation";
import Button from "./components/UI/button/Button";
import PasswordLength from "./components/UI/PasswordLength/PasswordLength";
import React, {useState} from "react";
import Checkbox from "./components/UI/Checkbox/Checkbox";

function App() {
    const [password, setPassword] = useState({
        length: 10,
        uppercase: false,
        lowercase: false,
        numeric: false,
        symbols: false
    });

    function handleChangeNumeric(){
        setPassword({
            ...password,
            numeric: !password.numeric
        });
    }

    function handleChangeLowercase(){
        setPassword({
            ...password,
            lowercase: !password.lowercase
        });
    }

    function handleChangeUppercase(){
        setPassword({
            ...password,
            uppercase: !password.uppercase
        });
    }

    function handleChangeSymbols(){
        setPassword({
            ...password,
            symbols: !password.symbols
        });
    }

    return (
        <div className={styles.app}>
            <Foundation>
                <Button>
                    Сгенерировать пароль
                </Button>
                <div className="box-content flex">
                    <div>
                        <Checkbox value={password.numeric} onChange={handleChangeNumeric}/>
                        <label htmlFor="numeric">12345</label>
                    </div>
                    <div>
                        <Checkbox value={password.lowercase} onChange={handleChangeLowercase}/>
                        <label htmlFor="letters">abc</label>
                    </div>
                    <div>
                        <Checkbox value={password.uppercase} onChange={handleChangeUppercase}/>
                        <label htmlFor="upperCase">ABC</label>
                    </div>
                    <div>
                        <Checkbox value={password.symbols} onChange={handleChangeSymbols}/>
                        <label htmlFor="SpecialSymbols">$@#&</label>
                    </div>
                </div>
                <PasswordLength/>
            </Foundation>
        </div>
    );
}

export default App;
