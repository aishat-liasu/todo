import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import './TodoPage.css';
import { useLocation, useHistory } from 'react-router-dom';

const TodoPage = () => {
  const location1 = useLocation();
  const history1 = useHistory();
  const [todos, updateTodos] = useState([]);
  const [todoInput, updatetodoInput] = useState('');
  const [message, updateMessage] = useState('');

  useEffect(() => {
    const requestData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'TODO_BG_ygehfjdfbjhfeub83urj3urnuur83rn3',
      },
    };
    const todoURL =
      'https://todo-bg.herokuapp.com/index.php/api/todos/syncDown?';

    fetch(todoURL, requestData)
      .then((resp) => resp.json())
      .then((todosAPI) => {
        return updateTodos(todosAPI.todos);
      });
  }, []);

  console.log(todos);
  const userTodos = todos.filter((item) => {
    if (location1.data.id === item.user_id) return true;
    else return false;
  });

  let firstCl = [],
    secondCl = [],
    thirdCl = [],
    fourthCl = [];
  userTodos.forEach((item) => {
    if (item.is_completed === '0') {
      firstCl.push(item);
    } else if (item.is_completed === '1') {
      secondCl.push(item);
    } else if (item.is_completed === '2') {
      thirdCl.push(item);
    } else if (item.is_completed === '3') {
      fourthCl.push(item);
    }
  });

  function returnTodoCard(item1) {
    return (
      <TodoCard
        item={item1}
        id={item1.id}
        key={item1.id}
        todos={todos}
        update={updateTodos}
      />
    );
  }

  const firstSeg = firstCl
    .slice(0)
    .reverse()
    .map((item) => {
      return returnTodoCard(item);
    });
  const secondSeg = secondCl
    .slice(0)
    .reverse()
    .map((item) => {
      return returnTodoCard(item);
    });
  const thirdSeg = thirdCl
    .slice(0)
    .reverse()
    .map((item) => {
      return returnTodoCard(item);
    });
  const fourthSeg = fourthCl
    .slice(0)
    .reverse()
    .map((item) => {
      return returnTodoCard(item);
    });

  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput.length > 0 && !/^\s*$/.test(todoInput)) {
      updateTodos([
        ...todos,
        {
          item_name: todoInput,
          id: Date.now() + '',
          user_id: location1.data.id,
          delete_flag: '0',
          item_note: todoInput,
          is_completed: '0',
          notification: '0000-00-00 00:00:00',
          created_at: '',
          completed_at: '0000-00-00 00:00:00',
          updated_at: '',
        },
      ]);
      updatetodoInput('');
    }
  };

  console.log(userTodos);
  const saveTodo = () => {
    const sendData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': 'TODO_BG_ygehfjdfbjhfeub83urj3urnuur83rn3',
        Connection: 'keep-alive',
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
      },
      body: todos,
    };
    fetch('https://todo-bg.herokuapp.com/index.php/api/todos/syncUp', sendData)
      .then((resp) => resp.json())
      .then((todoMessage) => {
        console.log(todoMessage.status);
        return updateMessage(todoMessage.message);
      });
    console.log(message);
  };
  const logoutPage = () => {
    console.log('You have been successfully logged in');
    history1.push({
      pathname: './logoutpage',
      data: location1.data.first_name,
    });
  };
  return (
    <div>
      <div className="todo-list">
        <h1>Welcome {location1.data.first_name}</h1>
        <form className="todo-form">
          <input
            type="text"
            name="todo-input"
            id="todo-input"
            value={todoInput}
            onChange={(e) => updatetodoInput(e.target.value)}
          />
          <button className="add-todo-btn btn" type="submit" onClick={addTodo}>
            Add Todo
          </button>
        </form>
        {firstSeg.length !== 0 ? (
          <div className="todos">
            <h2>Todos</h2>
            {firstSeg}
          </div>
        ) : (
          ''
        )}
        {secondSeg.length !== 0 ? (
          <div className="in-progress">
            <h2>In Progress</h2>
            {secondSeg}
          </div>
        ) : (
          ''
        )}
        {thirdSeg.length !== 0 ? (
          <div className="done">
            <h2>Done</h2>
            {thirdSeg}
          </div>
        ) : (
          ''
        )}
        {fourthSeg.length !== 0 ? (
          <div className="paused">
            <h2>Paused</h2>
            {fourthSeg}
          </div>
        ) : (
          ''
        )}
        <div className="save-logout">
          <button className="save-btn btn" type="submit" onClick={saveTodo}>
            Save
          </button>
          <button className="logout-btn btn" type="submit" onClick={logoutPage}>
            Logout
          </button>
        </div>
      </div>
      );
    </div>
  );
};

export default TodoPage;
