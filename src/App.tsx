import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import {StateType} from "./redux/state";

type AppType = {
    state: StateType
    dispatch: () => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={s.appWrapperContent}>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state}/>}
                />
                <Route path='/profile'
                       render={() => <Profile state={props.state}
                                              dispatch={props.dispatch}/>}
                />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}


export default App;
