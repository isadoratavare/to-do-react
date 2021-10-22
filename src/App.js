import Header from './components/Header';
import Body from './components/Body';
import './styles/global.css';
import TaskProvider from './context/taskContext';

export default function App() {
  return (
    <TaskProvider>
      <Header/>
      <Body/>
    </TaskProvider>
  );
}
