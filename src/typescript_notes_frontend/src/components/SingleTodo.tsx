import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../models/model";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
import { typescript_notes_backend } from "../../../declarations/typescript_notes_backend";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: any;
  index: number;
};
const SingleTodo: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
 
  const handleDelete = async (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    var index = todos.findIndex((todo) => todo.id === id);
    setTodos(await typescript_notes_backend.removeTodo(BigInt(index)));
    
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (

        <form
          className="todos__single"
        >
            <span className="todos__single--text">{todo.todo}</span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <MdDeleteOutline />
            </span>
        </form>
      )}
  


export default SingleTodo;
