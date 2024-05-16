import React from 'react'
import { Todo } from '../types/Todo';
import { Box, Checkbox, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoContentProps {
    todo: Todo, 
    handleCompleteClick: () => void, 
    toggleEdit: () => void, 
    handleDelete: () => void
}

export const TodoContent:React.FC<TodoContentProps> = ({todo, handleCompleteClick, toggleEdit, handleDelete}) => (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Checkbox
            checked={todo.isCompleted}
            onChange={handleCompleteClick} />
        <Box sx={{ flexGrow: 1, textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
        </Box>
        <IconButton onClick={toggleEdit}>
            <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
            <DeleteIcon />
        </IconButton>
    </Box>
)