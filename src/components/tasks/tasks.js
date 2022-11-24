import styles from './tasks.module.css'
import Task from "../task/task";
import task from "../task/task";
import {useDispatch} from "react-redux";
import {changeTodo, deleteTodo} from "../../reduxToolkit/toolkitSlice";

const Tasks = ({ tasks }) => {
    const dispatch = useDispatch();

    const onRemove = (task) => {
        dispatch(deleteTodo(task.id));
    }

    const onComplete = (task) => {
        dispatch(changeTodo(task.id));
    }

    if(!tasks.length){
        return <div className={styles.empty}><span>List empty</span></div>;
    }

    return (
        <ul className={styles.tasks}>
            {tasks.map(task => {
                return <Task key={task.id} task={task} onRemoveTask={ onRemove } onCompleteTask={ onComplete } />
            })}

        </ul>
    )
}

export default Tasks;