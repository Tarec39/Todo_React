import React, { memo } from "react"

type TodoTitleProps = {
    title: string
    as: string
}

export const TodoTitle = memo((props: TodoTitleProps) => {
    if(props.as === "h1"){
        return(<h1>{props.title}</h1>)
    }
    else{
        return(<h2>{props.title}</h2>)
    }
})