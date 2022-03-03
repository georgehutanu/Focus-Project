import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './shared/styles.scss'
import LandingPage from './components/landingPage/landingPage'
import ToDoListPage from './components/todolistPage/toDoListPage'


export default () =>
    <div className="container" >
        <Router>
            <Routes>
                <Route element={<LandingPage />} path={'/'} />
                <Route element={<ToDoListPage />} path={'todolist'} />
            </Routes>
        </Router>
    </div>