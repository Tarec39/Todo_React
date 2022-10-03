import React from "react";
import {Todo} from "../types/Todo"
import {TodoTitle} from "./TodoTitle"
import {TodoItem} from "./TodoItem"

type TodoListProps = {
    todoList: Todo[]
    toggleTodoStatus: (id:string, status:boolean) => void
    deleteTodo: (id:string) => void
    title: string
    as: string
}

export const TodoList = (props: TodoListProps) => {
return(
    <>
    <TodoTitle title={props.title} as={props.as} />
      {props.todoList.length !== 0 && (
        <>
          <ul>
            {props.todoList.map((todo) => (
              <li key={todo.id}>
                <TodoItem todo={todo} key={todo.id} toggleTodoStatus={props.toggleTodoStatus} deleteTodo={props.deleteTodo} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
)
}