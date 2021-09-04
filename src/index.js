import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
    /*
     Here I installed the Router that will listen to any
     changes and present  the correct screen whenever the url face 
     any changes
    */
    <BrowserRouter><App /></BrowserRouter>, 
    document.getElementById('root'))