import React, { useState } from 'react';

import '../FormTask/main.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useTasks } from '../../context/taskContext';
import TimePicker from 'react-time-picker';

function FormTask({update}) {
    const [tasks,setTasks]  = useTasks();
    const [value, onChange] = useState('10:00');
    const updateTask = () => {
        setTasks([...tasks,{
            day: 'Terça',
            content: 'Trabalhar',
            time: '16hrs'
        }]);
        update();
    }
     return (
         <>
            
            <div className="container center">
                <div className="arrow-back" onClick={updateTask}>
                    <AiOutlineArrowLeft fontSize="1.5rem"/>
                </div>
                <form className="center">
                    <div className="sec-form">
                        <label>
                            Dia: 
                        </label>
                        <input type="text" className="sec-input"></input>
                    </div>
                    <div className="sec-form">
                        <label>
                            Descrição :
                        </label>
                        <textarea className="sec-input"></textarea>
                    </div>
                    <div className="sec-form">
                        <label>Horário</label>
                        <TimePicker 
                            className="sec-input"
                            onChange={onChange}
                            value={value}/>
                    </div>
                    <button type="submit" className="btn-createTask">
                        Create task
                    </button>
                </form>
            </div>
        </>
        );
}

export default FormTask;