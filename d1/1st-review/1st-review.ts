import todosJson from '../data/todos.json';

type completed = boolean | 'archived' | 'pending' | 'deleted';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: completed;
  // callBack?: () => void;
}

type filters = keyof Todo; // is equivalent to: 'userId' | 'id' | 'title' | 'completed'.
type values = Todo[filters]; // is equivalent to number | string | boolean

interface TodoArray {
  data: Array<Todo>;
  sortBy: (filter: filters) => TodoArray;
  filterBy: (filter: filters, value: values) => TodoArray;
}

class Todos implements TodoArray {
  data: Array<Todo> = [...todosJson.todos]; // extract todos json and populate an array of Todo objects.

  constructor(data?: Array<Todo>) {
    if (data) this.data = data;
  }

  sortBy = (filter: filters) => {
    switch (filter) {
      case 'userId':
        return new Todos(
          this.data.sort((left, right) => left.userId - right.userId)
        );
      case 'id':
        return new Todos(this.data.sort((left, right) => left.id - right.id));
      case 'title':
        return new Todos(
          this.data.sort((left, right) => left.title.localeCompare(right.title))
        );
      case 'completed':
        return new Todos(
          this.data.sort((left, _) => (left.completed ? -1 : 1))
        );
    }
  };

  filterBy = (filter: filters, value: values) => {
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
}

const todos = new Todos();

console.log(`There are ${todos.data.length} todos in the Todo list.`);

const printFirstN = (array: Array<any>, n: number) => {
  console.log(array.slice(0, n));
};

printFirstN(todos.sortBy('id').data, 5);

const userId = 1;
const filteredTodos = todos.filterBy('userId', userId);
console.log(`User ${userId} has ${filteredTodos.data.length} todos.`);

const filteredByComplete = filteredTodos.filterBy('completed', true);
console.log(
  `User ${userId} has completed ${filteredByComplete.data.length} todos.`
);

todos.data.push(
  {
    userId: -1,
    id: -1,
    title: 'foo',
    completed: 'archived',
  },
  {
    userId: -1,
    id: -1,
    title: 'bar',
    completed: 'pending',
  }
);

const archivedTodos = todos.filterBy('completed', 'archived');
console.log(
  `There are ${archivedTodos.data.length} archived todos out of ${todos.data.length}.`
);

const pendingTodos = todos.filterBy('completed', 'pending');
console.log(
  `There are ${pendingTodos.data.length} pending todos out of ${todos.data.length}.`
);
