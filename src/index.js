import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.css'
import './index.css';
import App from './App';
import{BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log)
reportWebVitals();
