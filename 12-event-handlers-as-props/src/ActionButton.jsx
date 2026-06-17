export const ActionButton = ({text, onClick}) => {
    return(
        <div>
             <button onClick = {onClick}>{text}</button>
        </div>
    );
}
