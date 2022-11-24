import styles from './loader.module.css';
import {Link} from "react-router-dom";

const Loader = () => {
    return (
        <Link to="/app" className={styles.loaderWrap}>
            <div className={styles.sign}>
                <span className={styles.fastFlicker}>TO</span>DO<span className={styles.flicker}>A</span>PP
            </div>
        </Link>
    );
}

export default Loader;