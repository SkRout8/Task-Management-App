Project Overview
The task management application allows users to create, edit, delete, and manage tasks. Users can filter and sort tasks based on various criteria, and the application features a responsive design suitable for both mobile and desktop devices. Additionally, it includes drag-and-drop functionality for reordering tasks.

Key Features
Task Management:

Create new tasks with a title and description.
Edit existing tasks.
Delete tasks.
Mark tasks as complete or incomplete.
Filtering and Sorting:

Filter tasks based on the title.
Sort tasks by date or priority.
Responsive Design:

The application is designed to be responsive, adapting to different screen sizes.
Drag-and-Drop Functionality:

Users can reorder tasks using drag-and-drop.
State Management:

Uses Redux for state management, allowing for a centralized store for tasks.
Local Storage:

Tasks are stored in the browser's local storage, ensuring persistence across sessions.
Project Structure
Here’s the project structure for your application:

Run
Copy code
task-manager/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/                # Reusable components
│   │   ├── TaskList.js            # Component to display the list of tasks
│   │   ├── TaskItem.js            # Component for individual task items
│   │   ├── TaskForm.js            # Form to add/edit tasks
│   │   ├── Filter.js              # Component for filtering tasks
│   │   ├── Sort.js                # Component for sorting tasks
│   │   └── Header.js              # Optional: Header component for the app
│   ├── redux/                     # Redux-related files
│   │   ├── actions.js             # Action creators for task management
│   │   ├── reducers.js            # Reducers to manage task state
│   │   ├── store.js               # Redux store configuration
│   │   └── types.js               # Action types (optional, for better organization)
│   ├── styles/                    # CSS or styling files
│   │   └── styles.css             # Global styles (if needed)
│   ├── App.js                     # Main application component
│   ├── index.js                   # Entry point of the application
│   └── serviceWorker.js           # Optional: Service worker for PWA capabilities
├── .gitignore                     # Git ignore file
├── package.json                   # Project metadata and dependencies
└── README.md                      # Project documentation
Component Breakdown
App Component (App.js):

The main component that ties everything together.
Manages the state for filtering, sorting, and the currently edited task.
Renders the TaskForm, Filter, Sort, and TaskList components.
TaskList Component (TaskList.js):

Displays a list of tasks.
Integrates drag-and-drop functionality using react-beautiful-dnd.
Filters and sorts tasks based on user input.
Passes the setCurrentTask function to TaskItem for editing.
TaskItem Component (TaskItem.js):

Represents an individual task.
Displays the task title and description.
Includes buttons for completing, editing, and deleting the task.
Calls the onEdit function to populate the TaskForm for editing.
TaskForm Component (TaskForm.js):

A form for adding new tasks or editing existing ones.
Uses local state to manage the title and description.
Calls the appropriate Redux action to add or edit tasks based on whether a task is being edited.
Filter Component (Filter.js):

Allows users to filter tasks based on the title.
Updates the filter state in the App component.
Sort Component (Sort.js):

Provides buttons for sorting tasks by date or priority.
Updates the sort state in the App component.
Redux State Management
Actions: Defined in redux/actions.js, these functions create actions for adding, editing, deleting, and toggling tasks.
Reducers: Defined in redux/reducers.js, the reducer function updates the state based on the dispatched actions. It also handles local storage updates.
Store: Configured in redux/store.js,