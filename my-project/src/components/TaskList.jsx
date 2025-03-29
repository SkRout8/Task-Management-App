import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ filter, sort, setCurrentTask }) => {
    const tasks = useSelector(state => state.tasks);

    
    const filteredTasks = tasks.filter(task => 
        task.title.toLowerCase().includes(filter.toLowerCase())
    );

    
    const sortedTasks = [...filteredTasks].sort((a, b) => {
        if (sort === 'date') {
            return a.id - b.id; 
        } else if (sort === 'priority') {
            return a.priority - b.priority; 
        }
        return 0;
    });

    const onDragEnd = (result) => {
        
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="taskList">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {sortedTasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <TaskItem task={task} onEdit={setCurrentTask} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TaskList;