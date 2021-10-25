import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export default function TaskProvider({ children }){
    const [tasks,setTasks] = useState([{
        day: 'Monday',
        content: 'Limpar',
        time:'16:00'
    }])
    const [bodyTask,setbodyTask] = useState(false);
    return(
        <TaskContext.Provider value={{tasks,setTasks,bodyTask,setbodyTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks(){
    const context = useContext(TaskContext);
    const { tasks,setTasks,bodyTask,setbodyTask } = context;
    return { tasks,setTasks,bodyTask,setbodyTask }
}