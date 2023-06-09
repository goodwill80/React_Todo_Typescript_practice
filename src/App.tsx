import React, { useState } from 'react';

import TodoList from './Components/TodoList';
import NewTodo from './Components/NewTodo';
import { Todo } from './TodoModel';

import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
