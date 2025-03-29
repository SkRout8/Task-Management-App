

import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TaskItem = ({ task, onEdit }) => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleEdit = () => {
        onEdit(task);
    };

    return (
        <Card variant="outlined" style={{ margin: '10px', backgroundColor: task.completed ? '#d3ffd3' : '#fff' }}>
            <CardContent>
                <Typography variant="h6" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </Typography>
                <Typography color="textSecondary">{task.description}</Typography>
                <Button onClick={handleToggle} variant="contained" color="primary">
                    {task.completed ? 'Undo' : 'Complete'}
                </Button>
                <Button onClick={handleEdit} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
                    Edit
                </Button>
                <Button onClick={handleDelete} variant="contained" color="error" style={{ marginLeft: '10px' }}>
                    Delete
                </Button>
            </CardContent>
        </Card>
    );
};

export default TaskItem;