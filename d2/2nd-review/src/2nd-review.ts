import User from './User';

const ApiEndPointUrl = 'https://jsonplaceholder.typicode.com/';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const addUsers = (newUser: User) => {};

const addTodos = (newTodo: Todo) => {
  const user = document.getElementById('root');
  const todo = document.createElement('p');
  todo.innerHTML = `Completed todo ${newTodo.id} titles ${newTodo.title} `;
};

const handleUserTodos = (response: Array<Todo> | Error) => {
  if (response instanceof Error) {
    console.log('Error');
    return;
  }

  response
    .filter((todo) => todo.completed)
    .forEach((todo) => {
      addTodos(todo);
    });
  return response;
};

const addUsersToDom = (response: Array<User>) => {
  const root = document.getElementById('root');
  root.innerHTML = `<ul>${response
    .map((user) => `<li>${user.username}</li>`)
    .join('')}</ul>`;
};

const addTodosToDom = () => {};

const fetchArray = async <T>(url: string): Promise<Array<T> | Error> => {
  try {
    const data = await fetch(url);
    return data.json();
  } catch (error) {
    if (error) return error;
  }
};

fetchArray<User>(`${ApiEndPointUrl}users`)
  .then(addUsersToDom)
  .then(addTodosToDom)
  .catch(() => {});
