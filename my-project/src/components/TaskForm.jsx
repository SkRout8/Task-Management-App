// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../redux/actions';
// import { TextField, Button } from '@mui/material';

// const TaskForm = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [priority, setPriority] = useState(1);
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (!title) return;

//         const newTask = {
//             id: Date.now(),
//             title,
//             description,
//             priority,
//             completed: false,
//         };

//         dispatch(addTask(newTask));
//         setTitle('');
//         setDescription('');
//         setPriority(1);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg">
//             <TextField
//                 label="Task Title"
//                 variant="outlined"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//                 className="w-full"
//             />
//             <TextField
//                 label="Task Description"
//                 variant="outlined"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="w-full"
//             />
//             <Button type="submit" variant="contained" color="primary" className="w-full bg-blue-500 hover:bg-blue-600">
//                 Add Task
//             </Button>
//         </form>
//     );
// };

// export default TaskForm;


import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/actions';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ currentTask, setCurrentTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentTask) {
            setTitle(currentTask.title);
            setDescription(currentTask.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [currentTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;

        if (currentTask) {
            // Edit existing task
            const updatedTask = {
                ...currentTask,
                title,
                description,
            };
            dispatch(editTask(updatedTask));
            setCurrentTask(null); // Clear the current task after editing
        } else {
            // Add new task
            const newTask = {
                id: Date.now(),
                title,
                description,
                completed: false,
            };
            dispatch(addTask(newTask));
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <TextField
                label="Task Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <TextField
                label="Task Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginTop: '10px' }}
            />
            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
                {currentTask ? 'Update Task' : 'Add Task'}
            </Button>
        </form>
    );
};

export default TaskForm;