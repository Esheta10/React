export const CustomButton = () => {
    
    const handleClick = (e) => {

        console.log("Clicked element", e.target);
        console.log("Clicked co-ordinates", e.clientX, e.clientY);
        console.log("Which mouse button?", e.button);

        alert("Thanks for liking!")
    }
    return (
        <div>
            <button onClick={handleClick}>Like</button>
        </div>
    );
}
