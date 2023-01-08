import React from 'react';
import s from './App.module.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Content from "./components/Content";


function App() {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <Content/>
        </div>
    );
}


export default App;
