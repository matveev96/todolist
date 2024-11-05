import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

function App() {
const truck1='What to learn-1'
const truck2='What to learn-2'

    const tasks1 = [
        { id: 1, title: 'HTML&CSS', isDone: true },  //0
        { id: 2, title: 'JS', isDone: true },       //1
        { id: 3, title: 'ReactJS', isDone: false },  //2
        { id: 4, title: 'ReactJS-2', isDone: false },  //3
    ]

    const tasks2 = [
        { id: 1, title: 'Hello world', isDone: true },
        { id: 2, title: 'I am Happy', isDone: false },
        { id: 3, title: 'Yo', isDone: false },
    ]
 const arr=[
     1, //el
     2, //el
     3 //el
 ]


    return (
        <div className="App">
           <Todolist truck={truck1} tasks={tasks1} />
           <Todolist truck={truck2} tasks={tasks2} />
        </div>

    );
}

export default App;
