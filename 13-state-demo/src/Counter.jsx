export const Counter = () => {
    let count = 0;
    const handleClick = () => {
        count = count+1;
        console.log(count);
    }
    return(
        <div>
            <button onClick={handleClick}>Count: {count}</button>
        </div>
    );
} 