import React, { useCallback, useState } from 'react';
import './App.css';
import Form from './component/Form';
import Lists from './component/Lists';
import { notify, toastComponent } from './component/toast';
// import toastComponent from './component/toast';

const initialTodoData = localStorage.getItem('todoData')
  ? JSON.parse(localStorage.getItem('todoData'))
  : [];

export default function App() {
  // console.log('App is rendering');
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    notify('Added!');
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    // 해야할 일 추가, 입력란 글씨 지우기
    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    setValue('');
  };

  const handleDelete = useCallback(
    (id) => {
      notify('Deleted!');
      let newTodoData = todoData.filter((data) => data.id !== id);
      console.log('newTodoData', newTodoData);
      setTodoData(newTodoData);
      localStorage.setItem('todoData', JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleDeleteAll = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));
    notify('Deleted all!');
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleDeleteAll}>Delete All</button>
          {toastComponent()}
        </div>
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleDelete={handleDelete}
        />

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
