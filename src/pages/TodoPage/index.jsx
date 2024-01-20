// TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, deleteTodo } from '../../store/reducers/todoList/todoListsSlice';

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [newTask, setNewTask] = useState('');

  const handleAddTodo = () => {
    console.log('hi',todos)
    dispatch(addTodo(newTask));
    setNewTask('');
  };

  const handleUpdateTodo = (id, newText) => {
    dispatch(updateTodo({ id, text: newText }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleUpdateTodo(todo.id, prompt('Edit task:', todo.text) || todo.text)}>
              Edit
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
