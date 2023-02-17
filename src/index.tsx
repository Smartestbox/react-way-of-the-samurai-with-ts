import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { StateType } from "./redux/state";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.dispatch.bind(store)}
            />
        </BrowserRouter> ,document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())