import todosJson from '../data/todos.json';
class Todos {
    constructor(data) {
        this.data = [...todosJson.todos]; // extract todos json and populate an array of Todo objects.
        this.sortBy = (filter) => {
            switch (filter) {
                case 'userId':
                    return new Todos(this.data.sort((left, right) => left.userId - right.userId));
                case 'id':
                    return new Todos(this.data.sort((left, right) => left.id - right.id));
                case 'title':
                    return new Todos(this.data.sort((left, right) => left.title.localeCompare(right.title)));
                case 'completed':
                    return new Todos(this.data.sort((left, _) => (left.completed ? -1 : 1)));
            }
        };
        this.filterBy = (filter, value) => {
            switch (filter) {
                case 'userId':
                    return new Todos(this.data.filter((todo) => todo.userId === value));
                case 'id':
                    return new Todos(this.data.filter((todo) => todo.id === value));
                case 'title':
                    return new Todos(this.data.filter((todo) => todo.title === value));
                case 'completed':
                    return new Todos(this.data.filter((todo) => todo.completed === value));
            }
        };
        if (data)
            this.data = data;
    }
}
const todos = new Todos();
console.log(`There are ${todos.data.length} todos in the Todo list.`);
const printFirstN = (array, n) => {
    console.log(array.slice(0, n));
};
printFirstN(todos.sortBy('id').data, 5);
const userId = 1;
const filteredTodos = todos.filterBy('userId', userId);
console.log(`User ${userId} has ${filteredTodos.data.length} todos.`);
const filteredByComplete = filteredTodos.filterBy('completed', true);
console.log(`User ${userId} has completed ${filteredByComplete.data.length} todos.`);
todos.data.push({
    userId: -1,
    id: -1,
    title: 'foo',
    completed: 'archived',
});
todos.data.push({
    userId: -1,
    id: -1,
    title: 'bar',
    completed: 'pending',
});
const archivedTodos = todos.filterBy('completed', 'archived');
console.log(`There are ${archivedTodos.data.length} archived todos out of ${todos.data.length}.`);
const pendingTodos = todos.filterBy('completed', 'pending');
console.log(`There are ${pendingTodos.data.length} pending todos out of ${todos.data.length}.`);
