import '../Task/main.css'
export default function Task(props){
    return(
        <div className="containerTask">
            <div className="taskBody">
                <span>
                    <p className="dayTask">{props.day}</p>
                    <p className="contentTask">{props.content}</p>
                    <p className="timeTask">{props.time}</p>
                </span>
                <input type="checkbox"/>
            </div>
        </div>
    )
}