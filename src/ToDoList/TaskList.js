import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-bold mb-4">Tasks</h2>
      <ul className="w-full max-w-md">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center border-b border-gray-300 py-2"
          >
            <span>{task.text}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
