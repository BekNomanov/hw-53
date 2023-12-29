import React from 'react';

interface TaskProps {
  task: { id: string; text: string };
  onDelete:  React.MouseEventHandler
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => (
  <div className='task'>
    <span>{task.text}</span>
    <button className='btn' onClick={onDelete}>Удалить</button>
  </div>
);


export default Task;