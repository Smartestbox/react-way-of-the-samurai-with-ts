import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemProps = {
    name: string
    id: number
}


const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogItem + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;