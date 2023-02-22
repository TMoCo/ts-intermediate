import User from './User';

const ApiEndPointUrl = 'https://jsonplaceholder.typicode.com/';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const addUserDataToDom = (users: Array<User>) => {
  const root = document.getElementById('root');
  root.innerHTML = `<ul>${users
    .map((user) => {
      return `<li><div id="${user.id}"><h2>${user.username}</h2><p>${user.name}</p></div></li>`;
    })
    .join('')}</ul>`;
  return users;
};

const addTodosToDom = (users: Array<User>) => {
  users.forEach((user) => {
    fetchArray<Todo>(`${ApiEndPointUrl}users/${user.id}/todos`).then(
      (response) => {
        if (response instanceof Error) {
          console.log('Error');
          return;
        }
        const userDiv = document.getElementById(`${user.id}`);
        userDiv.innerHTML = `${userDiv.innerHTML}<h3>ToDos:</h3><ul>${response
          .filter((todo) => !todo.completed)
          .map(
            (todo) => `<li><div id="${todo.id}"><p>${todo.title}</p></div></li>`
          )
          .join('')}</ul>`;
      }
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
  .then(addUserDataToDom)
  .then(addTodosToDom)
  .catch(() => {});
