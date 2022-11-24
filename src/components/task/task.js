import { FaTrashAlt } from 'react-icons/fa'
import styles from './task.module.css'

const Task = ({ task, onRemoveTask, onCompleteTask }) => {
    return (
        <li className={`${styles.task} ${task.completed && styles.completed}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={onCompleteTask.bind(null, task)}
                className={styles.task__checkbox}
            />

            <span className={styles.task__name}>
        {task.text}
      </span>
            <button
                type="button"
                onClick={onRemoveTask.bind(null, task)}
                className={styles.task__button}
            >
                <FaTrashAlt size={16} />
            </button>
        </li>
    )
}

export default Task;