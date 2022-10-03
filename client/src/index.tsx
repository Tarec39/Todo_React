import ReactDOM from 'react-dom';
import { useRef } from 'react';

import { Todo } from './types/Todo';
import { useTodo } from './hooks/useTodo';
import { TodoTitle } from './components/TodoTitle';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

const App = () =>{
  const {todoList, addTodo, deleteTodo, toggleTodoStatus} = useTodo()

  const inputEl = useRef<HTMLTextAreaElement>(null)

  const handleAddTodo = () => {
    if(inputEl.current?.value === ""){return}
    addTodo(inputEl.current!.value)
    inputEl.current!.value = ""
  }

  const YetDoneTodoList = todoList.filter((todo: Todo) => !todo.done)
  const DoneTodoList = todoList.filter((todo:Todo) => todo.done)

  return (
    <>
      <TodoTitle title={"TODO進捗管理"} as={"h1"}></TodoTitle>
      <TodoAdd inputEl={inputEl} onCliCk={handleAddTodo} title={"追加"}></TodoAdd>
      <TodoList todoList={YetDoneTodoList} toggleTodoStatus={toggleTodoStatus} deleteTodo={deleteTodo} title={"Todo"} as={""}></TodoList>
      <TodoList todoList={DoneTodoList} toggleTodoStatus={toggleTodoStatus} deleteTodo={deleteTodo} title={"Done"} as={""}></TodoList>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
