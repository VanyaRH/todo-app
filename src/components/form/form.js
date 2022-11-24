import {FaMinus, FaPlus} from 'react-icons/fa';
import styles from './form.module.css';
import {Input} from "../input/input";
import {useState} from "react";

const Form = ( { onSubmit, onClearTasks, notEmpty } ) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(value);
        setValue('');
    }

    return (
        <form className={styles.form} onSubmit={ handleSubmit }>
            <Input
                type="text"
                value={value}
                onChange={event => { setValue(event.target.value) }}
                placeholder="Enter the task"
            />

            <button
                type="submit"
                disabled={value === ''}
                className={styles.form__button}
            >
                <FaPlus size={12} />
                Add
            </button>
            <button
                type="button"
                onClick={onClearTasks}
                disabled={!notEmpty}
                className={styles.form__button}
            >
                <FaMinus size={12} />
                Clear list
            </button>
        </form>
    )
}

export default Form;