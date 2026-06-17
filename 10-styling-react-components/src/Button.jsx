// Regular CSS File
// import './Button.css'
// export const Button = () => {
//     return(
//             <button className = "btn">Click Me</button>
//     );
// }


// CSS Modules
import styles from './Button.module.css'
export const Button = () => {
    return (
        <button className={styles.btn}>Click Me</button>
    )
}

