import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Task from './components/Task';
import Form from './components/Form';

function App() {
  let [tasks, setTasks] = useState([
    {text: "Полить цветы", done: false},
    {text: "Сходить в магазин", done: false},
    {text: "Помыть посуду", done: false},
    {text: "Покормить кота", done: false}
    ]);
   // 1. Добавляем стейт для картинки кота
  let [catImage, setCatImage] = useState(null);

  // 2. Функция для получения кота
  // let fetchCat = () => {
  //   fetch("https://api.thecatapi.com/v1/images/search?limit=1", {
  //     headers: { "x-api-key": "DEMO-API-KEY" }
  //   })
  //     .then(response => response.json())
  //     .then(result => setCatImage(result[0].url))
  //     .catch(error => console.log('Ошибка при загрузке кота:', error));
  // };

  let fetchCat = () => {
    // Вставьте ваш ключ сюда вместо DEMO-API-KEY
    let API_KEY = process.env.REACT_APP_CAT_API_KEY; 

    fetch("https://api.thecatapi.com/v1/images/search?limit=1", {
      method: 'GET',
      headers: {
        "x-api-key": API_KEY, // Вот сюда он вставляется
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result && result.length > 0) {
          setCatImage(result[0].url);
        }
      })
      .catch(error => console.error('Ошибка при загрузке кота:', error));
  };

  let addTask = text =>
  {
    let newTask = [...tasks, {text}];
    setTasks(newTask);
    fetchCat();
  }
  let doneTask = index =>
  {
    let newTask = [...tasks];
    newTask[index].done = !newTask[index].done;
    setTasks(newTask);
  }
  let deleteTask = index =>
  {
    let newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  }
  return (
    <div>
      <Form addTask={addTask} />
      {catImage && (
        <div className="cat-container">
          <img src={catImage} alt="Random Cat" className="cat-image" />
        </div>
      )}
      {
        tasks.map
        (
          (task, index) => (
            <Task key={index} task={task} doneTask={doneTask} index={index} deleteTask={deleteTask}/>
          )
        )
      }
    </div>
  );
}

export default App;