import {createSlice} from "@reduxjs/toolkit";
import {loadFromLocalStorage} from "../storage";

let taskId = 0;

const initialState = {
    tasks: [],
    total: 0
}

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: loadFromLocalStorage()?.todos || initialState,
    reducers: {
        addTodo: (state, action) => {
            state.tasks.push({
                id: taskId++,
                text: action.payload,
                completed: false
            });
            ++state.total;
        },
        changeTodo: (state, action) => {
            state.tasks = state.tasks.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter(todo => todo.id !== action.payload);
            --state.total;
        },
        clearTodos: (state, action) => {
            state.tasks = [];
            state.total = 0;
        }
    }
})

export default toolkitSlice.reducer;
export const { addTodo, changeTodo, deleteTodo, clearTodos } = toolkitSlice.actions;