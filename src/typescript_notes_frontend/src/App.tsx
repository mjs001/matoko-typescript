import React, { useState, useEffect, SetStateAction } from "react";
import "../assets/App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { typescript_notes_backend } from "../../declarations/typescript_notes_backend";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<any>([]);
  // const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      var date = Date.now();
      typescript_notes_backend.createTodo(BigInt(date), todo, false);
      setTodos([{ id: date, todo, isDone: false }, ...todos, ]);
      setTodo("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const todosArray = await typescript_notes_backend.readTodos();
    setTodos(todosArray);
  }

  return (
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
        />
      </div>
  );
};

export default App;
