import { RefObject } from "react";
import { TodoTitle } from "./TodoTitle"

type TodoAddProps = {
    inputEl: RefObject<HTMLTextAreaElement>,
    onCliCk: () => void
    title: string
}

export const TodoAdd = (props: TodoAddProps) =>{
    return(
        <>
            <TodoTitle title={props.title} as={''}/>
            <textarea ref={props.inputEl}></textarea>
            <button onClick={props.onCliCk}>+TODO</button>
        </>        
    )
}