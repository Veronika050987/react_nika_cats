import './Task.css';

function Task(props)
{
    let {task, doneTask, index, deleteTask} = props;
    return(
    <div className='task' >
        <span style={{textDecoration: task.done ? 'line-through' : ''}}>{props.task.text}</span>
        <div className='task-buttons'>
            <button onClick={() => doneTask(index)} style={{color:"green", width:"32px", height:"32px"}}>✓</button>
            <button onClick={() => deleteTask(index)} style={{color:"red", width:"32px", height:"32px"}}>x</button>
        </div>
    </div>
    )
}
export default Task;