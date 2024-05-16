import React from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

const EMPTY_TODOS_TEXT = 'Start planning your todos';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, updatedText: string) => void;
  toggleComplete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, updateTodo, toggleComplete }) => {
  return (
    <List>
      {Boolean(todos.length) ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      ): (
        <Typography variant="h6" align="center" color="textSecondary">
          {EMPTY_TODOS_TEXT}
        </Typography>
      )}
    </List>
  );
};
