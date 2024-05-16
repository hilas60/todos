import { Container, Typography } from '@mui/material';
import { useTodos } from './hooks/useTodos';
import { TodoList, AddOrEditTodo } from './components';

function App() {
  const { todos, addTodo, deleteTodo, updateTodo, toggleComplete } = useTodos();

  return (
    <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography variant="h3" gutterBottom textAlign='center'>
        Todo List
      </Typography>
      <AddOrEditTodo 
        addTodo={addTodo}
      />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo} 
        toggleComplete={toggleComplete} 
      />
    </Container>
  );
}

export default App;
