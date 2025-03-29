import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Filter from './components/Filter';
import Sort from './components/Sort';
import { Container, Typography } from '@mui/material';

const App = () => {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [currentTask, setCurrentTask] = useState(null); // State for the task being edited

    return (
        <Provider store={store}>
            <Container maxWidth="sm" style={{ marginTop: '20px' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Task Management App
                </Typography>
                <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
                <Filter setFilter={setFilter} />
                <Sort setSort={setSort} />
                <TaskList filter={filter} sort={sort} setCurrentTask={setCurrentTask} />
            </Container>
        </Provider>
    );
};

export default App;