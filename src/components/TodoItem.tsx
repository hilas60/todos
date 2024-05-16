import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import { Todo } from '../types/Todo';
import { AddOrEditTodo } from './AddOrEditTodo';
import { TodoContent } from './TodoContent';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, updatedTitle: string) => void;
  toggleComplete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, updateTodo, toggleComplete }) => {
    const [isEditMode, setIsEditMode] = useState(false);

    const toggleEdit = () => {
        setIsEditMode((prev) => !prev);
    };

    const handleSave = (id: string, updatedTitle: string) => {
        updateTodo(id, updatedTitle);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    const handleCompleteClick = () => {
        toggleComplete(todo.id);
    }

    return (
        <ListItem>
            {isEditMode ? (
                <AddOrEditTodo
                    currentTodo={todo}
                    updateTodo={handleSave}
                    cancelEdit={toggleEdit}
                />
            ) : (
                <TodoContent 
                    todo={todo} 
                    handleCompleteClick={handleCompleteClick} 
                    toggleEdit={toggleEdit} 
                    handleDelete={handleDelete}
                />
            )}
        </ListItem>
  );
};
