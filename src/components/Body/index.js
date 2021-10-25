import { useTasks } from '../../context/taskContext';
import '../Body/main.css';
import Task from '../Task';


export default function Body(){
    const { tasks,setTasks,bodyTask,setbodyTask } = useTasks();
    const updateTask = () =>{
        setTasks([...tasks,{
            day: 'Terça',
            content:'estudar',
            time: '19hrs'
        }]);
        setbodyTask(true)
    }
    const bodyElement = function(){if(!bodyTask){
        return(
            <>
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
            </>
        )
    } else {
        return(
            <h1>Oi</h1>
        )
    }}
    return (
        <div className="containerBody">
            {bodyElement()} 
        </div>
    )
}