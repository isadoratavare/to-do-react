import '../Body/main.css'
import Task from '../Task'

export default function Body(){
    return(
        <div className="containerBody">
            <div className="tasks">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
            <button>
                +
            </button>
        </div>
    )
}