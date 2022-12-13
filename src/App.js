import Header from "./components/UI/Header";
import React from "react";
import Form from "./components/UI/Form";
import Input from "./components/UI/Input";

function App() {
    return (
        <>
            <div className="box-border flex flex-col h-full h-screen break-words">
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
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
