import Header from "./components/UI/Header";
import React from "react";
import Form from "./components/UI/Form";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import {options} from "./API/Servecies";


function App() {
    console.log(options.params)

    return (
        <div className="box-border flex flex-col h-screen break-words">
            <div className="box-border block break-words">
                <Header/>
                <main className="box-border block break-words mx-52 px-20 pt-3 pb-5">
                    <div className="box-border block break-words relative">
                        <div>
                            <h1 className="text-5xl mb-5">Генератор случайных паролей онлайн</h1>
                            <section className="box-border flex flex-col break-words mb-5">
                                <div className="box-border flex flex-wrap flex-row justify-between break-words">
                                    <Form/>
                                    <div className="box-border flex flex-col justify-between w-[48%] h-96">
                                        <Input/>
                                        <Input/>
                                        <Input/>
                                        <Input/>
                                        <Input/>
                                        <Input/>
                                        <Input/>
                                        <Input/>
                                        <div className="mt-5 justify-end box-border break-words flex">
                                            <Button>Сгенерировать</Button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
