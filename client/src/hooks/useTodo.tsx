import React, {useState, useEffect} from "react";
import { ulid } from "ulid";

import * as todoData from "../apis/todos"
import { Todo } from "../types/Todo";

export const useTodo = () => {
    const [todoList, setTodoList] = useState<Todo[]>([])

    //useEffectを使ってjsonをtodoListに取り込む。
    //何しているのかわからん
    useEffect(() => {
        todoData.getAllTodosData().then((todo) => {
          console.log(...todo);
          setTodoList([...todo].reverse());
        });
      }, []);

    const addTodo = (todoContent: string) => {
        //新しいitemを作成する
        const newTodoItem = {
            id: ulid(),
            content: todoContent,
            done: false
        }
        
        //サーバーの追加APIを呼ぶ
        todoData.addTodoData(newTodoItem).then((addTodo) => {
            console.log(addTodo)
            setTodoList([addTodo, ...todoList])
        })
    }

    const deleteTodo = (id: string) => {
        todoData.deleteTodoData(id).then((deleteDone) =>{
            const newTodoList = todoList.filter((item) => item.id !== deleteDone)
            setTodoList(newTodoList)
        })
    }

    const toggleTodoStatus = (id: string, done: boolean) => {
        const todoItem = todoList.find((item: Todo) => item.id === id)
        const newTodoItem: Todo = {
            ...todoItem!, 
            done: !done
        }
        todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
            // 成功したら、todoListを更新。idが一致しているものを、サーバーから返ってきたupdatedTodoで更新する
            const newTodoList = todoList.map((item) => (item.id !== updatedTodo.id ? item : updatedTodo));
            // 新しいtodoListをstateにセットする
            setTodoList(newTodoList);
          });
    }
    return {todoList, addTodo, deleteTodo, toggleTodoStatus}
}