import React from 'react';

interface TaskProps {
  task: { id: string; text: string };
  onDelete:  React.MouseEventHandler
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => (
  <div>
    <span>{task.text}</span>
    <button onClick={onDelete}>Удалить</button>
  </div>
);

export default Task;