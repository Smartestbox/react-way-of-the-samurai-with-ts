import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogItem + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Viktor'} id={'4'}/>
                <DialogItem name={'Valera'} id={'5'}/>
                <DialogItem name={'Sasha'} id={'6'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'} />
                <Message message={'How is your day?'} />
                <Message message={'Yo'} />
            </div>
        </div>
    );
};

export default Dialogs;