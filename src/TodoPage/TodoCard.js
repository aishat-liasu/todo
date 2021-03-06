import React from 'react';
import './TodoCard.css';

const TodoCard = ({ item, id, todos, update }) => {
  const { item_note } = item;

  const editTodo = (value) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.item_note = value;
      }
      return todo;
    });
    update(newTodos);
  };

  const delTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.delete_flag = '1';
      }
      return todo;
    });
    update(newTodos);
  };
  const todoIP = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.is_completed = '1';
      }
      return todo;
    });
    update(newTodos);
  };
  const todoDone = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.is_completed = '2';
      }
      return todo;
    });
    update(newTodos);
  };
  const todoPaused = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.is_completed = '3';
      }
      return todo;
    });
    update(newTodos);
  };

  return (
    <div className="todo-card">
      <p className="todo-note">
        <input
          type="text"
          name={item_note}
          id={id}
          value={item_note}
          className="todo-input"
          onChange={(e) => editTodo(e.target.value)}
        />
      </p>
      <div className="cardFunc">
        <p title="Delete" className="func" onClick={() => delTodo(id)}>
          X
        </p>
        <p title="In Progress" className="func" onClick={() => todoIP(id)}>
          IP
        </p>
        <p title="Done" className="func" onClick={() => todoDone(id)}>
          D
        </p>
        <p title="Paused" className="func" onClick={() => todoPaused(id)}>
          P
        </p>
      </div>
    </div>
  );
};

export default TodoCard;
