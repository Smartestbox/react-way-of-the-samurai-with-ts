import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message'
import {RootStateType} from "../../App";

type DialogsProps = {
    state: RootStateType
}


const Dialogs = (props: DialogsProps) => {
    let dialogsElements = props.state.messagesPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} />)

    let messagesElements = props.state.messagesPage.messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;