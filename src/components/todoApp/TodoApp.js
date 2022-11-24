import styles from './todoApp.module.css';
import {Input} from "../input/input";
import Form from "../form/form";
import Tasks from "../tasks/tasks";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, clearTodos} from "../../reduxToolkit/toolkitSlice";

const TodoApp = () => {
    const dispatch = useDispatch();
    const tasksState = useSelector(state => state.todos);

    const onAddTask = (task) => {
        dispatch(addTodo(task));
    }

    const getComplited = (tasks) => {
        const completed = tasks.filter(todo => todo.completed).length;

        return completed > 0 ? completed : 0;
    }

    const onClear = () => {
        dispatch(clearTodos())
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Link to="/"><h1>TODOLIST</h1></Link>

                <Form onSubmit={onAddTask} onClearTasks={onClear} notEmpty={tasksState.tasks.length > 0}/>

                <hr />

                {/*<Input
                    type="text"
                    value={""}
                    placeholder="Search for a task"
                />*/}

                <Tasks
                    tasks={tasksState.tasks}
                />

                <footer className={styles.footer}>
                    <h6>
                        Total tasks:
                        <span>{tasksState.total}</span>
                    </h6>

                    <h6>
                        Total completed tasks:
                        <span>{getComplited(tasksState.tasks)}</span>
                    </h6>
                </footer>
            </div>

        </div>
    )
}

export default TodoApp;