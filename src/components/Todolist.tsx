import React from "react";
import {Task} from "./Task";
import {Button} from "./Button";

type TodolistProps = {
    truck: string
    // task:Array<TaskProps>
    tasks: TaskProps[]
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}


export const Todolist = ({truck, tasks}: TodolistProps) => {


    const mappedTasks = tasks.map((el, index) => {
        // debugger

        return (
            <Task key={el.id}
                  title={el.title}
                  isDone={el.isDone}
            />
        )
    })

    return (
        <div>
            <h3>{truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}

