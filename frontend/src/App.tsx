import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import ToDoOpen from "./components/ToDoOpen";
import {HashRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {

    const [todos, setTodos] = useState([]);
    const [searchToDo, setSerachToDo] = useState("");

    useEffect(()=>{
        getAllTodos()
    }, []);

    const getAllTodos=()=>{
        axios.get("/api/todo")
            .then((response)=>{return response.data})
            .then((todos)=>setTodos(todos))
            .catch((error)=>{console.log(error)})
    }

    const onHandleSubmit=()=> {
        return searchToDo;
    }

    const onHandleChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setSerachToDo(event.target.value)
    }

    return (
    <div className="App">
        <h1>Manage Your Tasks!</h1>
        <div className={"div-add-todo"}>
            <section className={"section-add-todo"}>
                <div>
                    <h3>Add To Do</h3>
                </div>
                <form>
                    <label>
                        <input type={"text"} name={"todo-add"} placeholder={"To-Do"}/>
                    </label>
                    <input className={"submit"} type={"submit"} value={"Add"}/>
                </form>
            </section>
            <section className={"section-add-todo"}>
                <div>
                    <h3>Search To Do</h3>
                </div>
                <form onSubmit={onHandleSubmit}>
                    <label>
                        <input type={"text"} name={"todo-search"} placeholder={"Search"} onChange={onHandleChange}/>
                    </label>
                    <input className={"submit"} type={"submit"} value={"Search"}/>
                </form>
            </section>
        </div>
        <section className="sections">
            <section className="section">
                <div>
                    <h2>OPEN</h2>
                </div>
                <div>
                    <HashRouter>
                        {/*<NavBar/>*/}
                        <Routes>
                            <Route path={"/"} element={<ToDoOpen toDos={todos} filterToDo={searchToDo}/>}/>
                            {/*<Route path={"/:id"} element={<ToDoEdit toDos={todos}/>}/>*/}
                        </Routes>
                    </HashRouter>

                </div>
            </section>
            <section className="section">
                <div>
                    <h2>DOING</h2>
                </div>
                <div>
                    <p>hier kommt todo card</p>
                </div>
            </section>
            <section className="section">
                <div>
                    <h2>DONE</h2>
                </div>
                <div>
                    <p>hier kommt todo card</p>
                </div>
            </section>
        </section>


    </div>
  );
}

export default App;
