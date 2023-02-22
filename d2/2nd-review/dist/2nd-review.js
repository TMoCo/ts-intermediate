const ApiEndPointUrl = 'https://jsonplaceholder.typicode.com/';
const addUserDataToDom = (users) => {
    const root = document.getElementById('root');
    root.innerHTML = `<ul>${users
        .map((user) => {
        return `<li><div id="${user.id}"><h2>${user.username}</h2><p>${user.name}</p></div></li>`;
    })
        .join('')}</ul>`;
    return users;
};
const addTodosToDom = (users) => {
    users.forEach((user) => {
        fetchArray(`${ApiEndPointUrl}users/${user.id}/todos`).then((response) => {
            if (response instanceof Error) {
                console.log('Error');
                return;
            }
            const userDiv = document.getElementById(`${user.id}`);
            userDiv.innerHTML = `${userDiv.innerHTML}<h3>ToDos:</h3><ul>${response
                .filter((todo) => !todo.completed)
                .map((todo) => `<li><div id="${todo.id}"><p>${todo.title}</p></div></li>`)
                .join('')}</ul>`;
        });
    });
};
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
    .then(addUserDataToDom)
    .then(addTodosToDom)
    .catch(() => { });
export {};
