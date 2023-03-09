import React from "react";

type Props = {
    name: string,
    desc: string,
}

function onDeleteClick() {

}

const ToDoListElement = ({ name, desc }: Props) => {
    return (
        <div style={{display:'flex', gap:'1em'}}>
            <div>{name}</div>
            <div>{desc}</div>
                <div><button onClick={() => onDeleteClick()}>Delete</button></div>
        </div>
    )
}
export default ToDoListElement