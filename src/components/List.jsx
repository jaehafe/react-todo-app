import React from 'react';

export default function List({ todoData, setTodoData }) {
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleteChange(data.id)}
              />{' '}
              <span className={data.completed ? 'line-through' : undefined}>
                {data.title}
              </span>
            </div>
            <div>
              <button onClick={() => handleClick(data.id)}>x</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
