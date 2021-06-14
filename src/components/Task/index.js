import '../Task/main.css'
export default function Task(){
    return(
        <div className="containerTask">
            <div className="taskBody">
                <span>
                    <p className="dayTask">Monday</p>
                    <p className="contentTask">Limpar a casa</p>
                    <p className="timeTask">16:00 - 19:00</p>
                </span>
                <input type="checkbox"/>
            </div>
        </div>
    )
}