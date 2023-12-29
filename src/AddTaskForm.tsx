import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (newTaskText: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      onAddTask(newTaskText);
      setNewTaskText('');
    }
  };

  return (
    <div>
      <input type="text" value={newTaskText} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;