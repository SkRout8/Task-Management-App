import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_TASK } from './actions';

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
    let updatedTasks;
    switch (action.type) {
        case ADD_TASK:
            updatedTasks = [...state.tasks, action.payload];
            break;
        case EDIT_TASK:
            updatedTasks = state.tasks.map(task => task.id === action.payload.id ? action.payload : task);
            break;
        case DELETE_TASK:
            updatedTasks = state.tasks.filter(task => task.id !== action.payload);
            break;
        case TOGGLE_TASK:
            updatedTasks = state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
            break;
        default:
            return state;
    }
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return { ...state, tasks: updatedTasks };
};

export default taskReducer;
