import { useTasks } from '../../context/taskContext';
import '../Body/main.css';
import Task from '../Task';


export default function Body(){
    const { tasks,setTasks } = useTasks();
    const updateTask = () =>{
        setTasks([...tasks,{
            day: 'Terça',
            content:'estudar',
            time: '19hrs'
        }])
    }
    return(
        <div className="containerBody">
            <div className="tasks">
                {tasks.map( (task,index)=>
                <Task key = {index}
                    day={task.day} 
                    content={task.content}
                    time = {task.time}
                    
                />)}
            </div>
            <button onClick={updateTask}>
                +
            </button>
        </div>
    )
}