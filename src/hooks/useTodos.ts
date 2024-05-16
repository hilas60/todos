import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "../types/Todo";

const TODOS_KEY = 'todos';

const getSavedTodos = () => {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  return savedTodos ? JSON.parse(savedTodos) : [];
}

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(() => getSavedTodos());

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        const newTodo: Todo = { id: uuidv4(), text, isCompleted: false };
        setTodos([...todos, newTodo]);
      };

    const updateTodo = (id: string, updatedText: string) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, text: updatedText } : todo);
        setTodos(updatedTodos);
    };


    const deleteTodo = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id: string) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        setTodos(updatedTodos);
    };

    return { todos, addTodo, updateTodo, deleteTodo, toggleComplete };
}