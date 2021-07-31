import React from "react";

export const TodoListItem = (props) => {

    return(
        <li>
            <input
                type='checkbox'
                checked={props.item.isCompleted}
                onChange={(e)=>props.handleOnTaskChanged(e, props.item)}
            />
            {props.item.name}
        </li>
    )
}