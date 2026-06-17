// Inline CSS
// export const Button = () => {
//     return (
//         <button style={
//             {
//                 backgroundColor: 'blue',
//                 color: 'white',
//                 padding: '10px 20px',
//                 borderRadius: '5px'
//             }
//         }>Click Me</button>
//     );
// }
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

