import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // 해야할 일 추가, 입력란 글씨 지우기
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form
          value={value}
          setValue={setValue}
          setTodoData={setTodoData}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
