import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: number,
  title: String,
  completed: boolean
}

axios.get(url).then(response => {
  const todo = response.data as ToDo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  let x = true, y = "zxcv";
  heyThere(id, completed, title);
});

const heyThere : (id : Number, completed : Boolean, title : String) => void = (id, completed, title) => {
  console.log(`
    The ToDo with ID = ${id},
    Has a Title of '${title}',
    & the todo is ${completed}
  `);
}