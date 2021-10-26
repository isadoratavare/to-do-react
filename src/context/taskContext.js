import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export default function TaskProvider({ children }){
    const [tasks,setTasks] = useState([{
        day: 'Monday',
        content: 'Limpar',
        time:'16:00'
    }]);
   
    return(
        <TaskContext.Provider value={{tasks,setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTasks(){
    const context = useContext(TaskContext);
    const { tasks,setTasks} = context;
    return [ tasks,setTasks ]
}