import '../Body/main.css';
import { useState } from 'react';
import Task from '../Task';
import { useTasks } from '../../context/taskContext';
import FormTask from '../FormTask';


export default function Body(){
    const [tasks,]  = useTasks();
    const [bodyTask,setbodyTask] = useState();
    const updateTask = ()=> {
        setbodyTask(!bodyTask);
    };
    const bodyElement = function(){
        
        if(!bodyTask){
            return(
                <>
                    <div className="tasks">
                            {tasks.map((task,index)=>
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
             < FormTask update={updateTask}/>
            )
        }
    }
    return (
        <div className="containerBody">
            {bodyElement()} 
        </div>
    )
}