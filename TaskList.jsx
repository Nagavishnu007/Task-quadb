import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/slices/todoSlice';
import { FaTrash, FaCheck } from 'react-icons/fa';

const TaskList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 border-red-500';
      case 'medium':
        return 'bg-yellow-100 border-yellow-500';
      case 'low':
        return 'bg-green-100 border-green-500';
      default:
        return 'bg-gray-100 border-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`p-4 rounded-lg border-l-4 ${getPriorityColor(todo.priority)} flex items-center justify-between`}
        >
          <div className="flex-1">
            <div className={`text-sm md:text-lg  ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.title}
            </div>

            {todo.DummyTodo && (
              <div className="text-sm text-gray-600">
                      Additional Info: {todo.DummyTodo}
             </div>
            )}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="p-2 text-green-600 hover:bg-green-100 rounded-full"
            >
              <FaCheck />
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="p-2 text-red-600 hover:bg-red-100 rounded-full"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;