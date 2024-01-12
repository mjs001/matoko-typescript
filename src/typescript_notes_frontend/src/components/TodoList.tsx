import React from "react";
import "./styles.css";
import { Todo } from "../models/model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
}) => {
  return (
    <div className="container">
          <div
            className="todos"
          >
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                todo={todo}
                todos={todos}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
          </div>
        
    </div>
  );
};

export default TodoList;
