import { TodoInfo } from '../TodoInfo';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

type todoProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: todoProps) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo
          todo={todo}
        />
      ))}
    </section>
  );
};
