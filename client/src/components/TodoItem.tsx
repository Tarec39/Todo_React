import { Todo } from "../types/Todo";

type TodoItemProps = {
    todo: Todo
    toggleTodoStatus: any
    deleteTodo: any
}

export const TodoItem = (props: TodoItemProps) => {
    const handleToggleTodoStatus = () => props.toggleTodoStatus(props.todo.id, props.todo.done)
    const handleDeleteTodo = () => props.deleteTodo(props.todo.id)

    return(
        <>
            {props.todo.content}
            <button onClick={handleToggleTodoStatus}>{props.todo.done ? "Yet" : "Done"}</button>
            <button onClick={handleDeleteTodo}>削除</button>
        </>
    );
}