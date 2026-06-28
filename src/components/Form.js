import './Form.css';
import {useState} from "react";

function Form(props)
{
    let [value, setValue] = useState('');
    let {addTask} = props;
    let sendSubmit = e =>
    {
        e.preventDefault();
        if (value.trim()){ //устранение добавления пустых строк
        addTask(value);
        setValue('');
        }
    }

    return(
        <form onSubmit={sendSubmit}>
            <div className='input'>
                <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}
                    placeholder="Добавить новую задачу..."
                />
                <button type="button" onClick={() => setValue('')}>X</button>
            </div>
            <button type="submit">Submit</button> 
        </form>

    )
}
export default Form;