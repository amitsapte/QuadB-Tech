import './App.css';
import { Provider } from 'react-redux';
import store from './ToDoList/store';
import TaskInput from './ToDoList/TaskInput';
import TaskList from './ToDoList/TaskList';

function App() {
  return (
   <Provider store={store}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center"> Build a Simple React To-Do Application</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
