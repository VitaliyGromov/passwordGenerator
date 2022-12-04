import Header from "./components/UI/Header";
import React from "react";
import Main from "./components/Main";
import Foundation from "./components/Foundation";
import Form from "./components/UI/Form";

function App() {
    return (
        <div>
            <Header/>
            <Main>
                <div>
                    <h1 className="text-5xl mb-3">Генератор случайных паролей онлайн</h1>
                    <Foundation>
                        <div className="box-border flex flex-row flex-wrap justify-between break-words">
                            <Form/>
                        </div>
                    </Foundation>
                </div>
            </Main>
        </div>
    );
}

export default App;
