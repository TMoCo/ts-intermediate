import User from './User';

const ApiEndPointUrl = 'https://jsonplaceholder.typicode.com/';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const addUser = (newUser: User) => {
  const root = document.getElementById('root');
  const user = document.createElement('div');
  user.setAttribute('id', `${newUser.id}`);
  root.appendChild(root);

  const name = document.createElement('p');
  name.setAttribute('id', `name-${newUser.id}`);
  name.innerHTML = newUser.name;
  user.appendChild(name);

  const username = document.createElement('h1');
  username.setAttribute('id', `username-${newUser.id}`);
  username.innerHTML = newUser.username;
  user.appendChild(username);

  const id = document.createElement('p');
  id.setAttribute('id', `id-${newUser.id}`);
  id.innerHTML = `${newUser.id}`;
  user.appendChild(id);

  const email = document.createElement('p');
  email.setAttribute('id', `email-${newUser.id}`);
  email.innerHTML = newUser.email;
  user.appendChild(email);
};

const addTodos = (newTodo: Todo) => {
  const user = document.getElementById(`${newTodo.userId}`);
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

const addUsersToDom = (response: Array<User> | Error) => {
  if (response instanceof Error) {
    console.log('Error');
    return;
  }
  response.forEach((user) => {
    addUser(user);
    // query the todos
  });

  return response;
};

const fetchData = async <T>(url: string): Promise<Array<T> | Error> => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    if (error) return error;
  } finally {
  }
};

fetchData<Todo>(`${ApiEndPointUrl}/users/${user.id}/todos`).then(
  handleUserTodos
);

fetchData<User>(`${ApiEndPointUrl}users`)
  .then(addUsersToDom)
  .then(handle)
  .catch(() => {});
