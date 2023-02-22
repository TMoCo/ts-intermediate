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

const addUsersToDom = (users: Array<User>) => {
  const root = document.getElementById('root');
  root.innerHTML = `<ul>${users
    .map(async (user) => {
      const userHtml = `<li><div id="${user.id}"><h2>${user.username}</h2><p>${user.name}</p></div></li>`;
      await fetchArray<Todo>(`${ApiEndPointUrl}users/${user.id}/posts`).then();
      return userHtml.co;
    })
    .join('')}</ul>`;
};

const addTodosToDom = (todos: Array<Todo>) => {
  todos.forEach((todo) => {
    const userDiv = document.getElementById(`${todo.userId}`);
    userDiv.innerHTML.concat(
      `<li><div id="${user.id}"><h2>${user.username}</h2><p>${user.name}</p></div></li>`
    );
  });
};

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
  .then()
  .catch(() => {});
