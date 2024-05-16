import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Todo } from '../types/Todo';

const Text = {
    Edit: "Edit Task",
    AddLabel: "Add a new task",
    AddButton: "Add",
    Update: "Update",
    Cancel: "Cancel"
}

interface AddTodoProps {
  addTodo?: (text: string) => void;
  currentTodo?: Todo | null;
  updateTodo?: (id: string, updatedTitle: string) => void;
  cancelEdit?: () => void;
}

export const AddOrEditTodo: React.FC<AddTodoProps> = ({ addTodo, currentTodo = null, updateTodo, cancelEdit }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const textToShow = currentTodo?.text || '';
    setText(textToShow);
  }, [currentTodo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
  
    if (currentTodo) {
      updateTodo?.(currentTodo.id, text);
      cancelEdit?.();
    } else {
      addTodo?.(text);
      setText('');
    }
  };

  const textLabel = currentTodo ? Text.Edit : Text.AddLabel;
  const buttonText = currentTodo ? Text.Update : Text.AddButton;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, width: '100%'}}>
      <TextField
        label={textLabel}
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" disabled={!text}>
        {buttonText}
      </Button>
      {currentTodo && cancelEdit && (
        <Button type="button" variant="outlined" color="secondary" onClick={cancelEdit}>
          {Text.Cancel}
        </Button>
      )}
    </Box>
  );
};
