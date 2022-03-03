import React from 'react'
import {Link} from 'react-router-dom'


export default () => {

    return <div className="menu">
        <div className="menu__links">
            <Link to="/todolist" label="ToDoList">To-Do List</Link>
        </div>
    </div>
}