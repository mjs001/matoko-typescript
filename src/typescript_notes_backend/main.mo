import List "mo:base/List";
import Debug "mo:base/Debug";
import Array "mo:base/Array";

actor Typescript_Notes {
  public type Todo = {
    id: Int;
    todo: Text;
    isDone: Bool;
  };


  stable var todos: List.List<Todo> = List.nil<Todo>();
  
  public func createTodo(id: Int, todo: Text, isDone: Bool) {
    let newTodo: Todo = {
      id = id;
      todo = todo;
      isDone = isDone;
    };

    todos := List.push(newTodo, todos);
  };

  public query func readTodos(): async [Todo] {
    return List.toArray(todos); 
  };

  public func removeTodo(id: Nat): async [Todo] {
    // take drop append
    let todosListStart = List.take(todos, id);
    let todosListEnd = List.drop(todos, id + 1);
    todos := List.append(todosListStart, todosListEnd);
    return List.toArray(todos); 
  };
};