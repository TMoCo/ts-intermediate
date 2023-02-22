const ApiEndPointUrl = 'https://jsonplaceholder.typicode.com/';
const addUsers = (newUser) => { };
const addTodos = (newTodo) => {
    const user = document.getElementById('root');
    const todo = document.createElement('p');
    todo.innerHTML = `Completed todo ${newTodo.id} titles ${newTodo.title} `;
};
const handleUserTodos = (response) => {
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
const addUsersToDom = (response) => {
    const root = document.getElementById('root');
    root.innerHTML = `<ul>${response
        .map((user) => `<li>${user.username}</li>`)
        .join('')}</ul>`;
};
const addTodosToDom = () => { };
const fetchArray = async (url) => {
    try {
        const data = await fetch(url);
        return data.json();
    }
    catch (error) {
        if (error)
            return error;
    }
};
fetchArray(`${ApiEndPointUrl}users`)
    .then(addUsersToDom)
    .then(addTodosToDom)
    .catch(() => { });
export {};
