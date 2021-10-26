import React from 'react';

import '../FormTask/main.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useTasks } from '../../context/taskContext';

function FormTask({update}) {
    const [tasks,setTasks]  = useTasks();
    const updateTask = () => {
        setTasks([...tasks,{
            day: 'Terça',
            content: 'Trabalhar',
            time: '16hrs'
        }]);
        update();
    }
     return (
            <div className="container">
                <div className="arrow-back" onClick={updateTask}>
                    <AiOutlineArrowLeft fontSize="1.5rem"/>
                </div>
            </div>
        );
}

export default FormTask;