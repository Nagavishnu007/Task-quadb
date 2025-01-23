import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuth, logout } from './store/slices/authSlice';
import { fetchTodos, loadTodos } from './store/slices/todoSlice';
import Login from './components/Login';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const { status, error } = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(loadTodos());


    if (isAuthenticated) {
      dispatch(fetchTodos());      
    }
  }, [dispatch, isAuthenticated]);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (

    <div className="min-h-screen bg-gray-50 py-8">

      <div className="max-w-4xl mx-auto px-4">

        <div className="bg-white rounded-lg shadow-lg p-6">

          <div className="md:flex md:justify-between md:items-center mb-8 space-y-3 md:space-y-0">

            <h1 className="text-xl md:text-3xl font-bold text-gray-900 text-center md:text-start mb-5 md:mb-0">Todo List</h1>

            <div className="flex items-center justify-between md:justify-normal space-x-4">
              <span className="text-gray-600">Welcome, {user?.username}</span>
              <button
                onClick={() => dispatch(logout())}
                className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>

          </div>

          <TaskInput />

          {status === 'loading' && (
            <div className="text-center py-4">Loading...</div>
          )}

          {error && (
            <div className="text-red-600 mb-4">Error: {error}</div>
          )}

          <TaskList />
        </div>
      </div>

    </div>

  );
}

export default App;