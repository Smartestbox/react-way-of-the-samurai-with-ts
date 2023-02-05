import s from "../Dialogs.module.css";
import React from "react";

type MessageProps = {
    message: string
}

const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;