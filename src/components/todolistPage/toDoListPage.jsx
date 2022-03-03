import React, {useState} from 'react'

import Header from '../header/header'
import Menu from "../menu/menu"


export default () => {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')

    function updateToDoList () {
        let todos = [...tasks]
        todos.push(task)
        setTasks(todos)
        setTask('')
    }

    return <div className="todolist-page">
        <Header/>
        <div className="todolist-page__body">
            <div className="todolist-page__body__menu">
                <Menu/>
            </div>
            <div className="todolist-page__body__content">
                <div className="todolist-page__body__content__input-field">
                    <form onSubmit={e => {
                        e.preventDefault()
                        updateToDoList()
                    }}>
                        <input className="todolist-page__body__content__input-bar"
                               type="text"
                               value={task}
                               placeholder="Enter a task"
                               onChange={ e => setTask(e.target.value)}
                        />
                    </form>
                    <button className="button">Add</button>
                </div>
            <ul className="todolist-page__body__content__tasks-list">
                {tasks.map((todo) => {
                    return <li key={todo}>{todo}</li>
                })}
            </ul>
            </div>
        </div>
    </div>
}