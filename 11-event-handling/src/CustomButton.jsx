// export const CustomButton = () => {
    
//     const handleClick = (e) => {

//         console.log("Clicked element", e.target);
//         console.log("Clicked co-ordinates", e.clientX, e.clientY);
//         console.log("Which mouse button?", e.button);

//         alert("Thanks for liking!")
//     }
//     return (
//         <div>
//             <button onClick={handleClick}>Like</button>
//         </div>
//     );
// }


export const CustomButton = ({text}) => {
    const name = "Codevolution";
    const handleClick = () => {
        console.log(`${text} was clicked by ${name}`);
    }
    return (
        <div>
            <button onClick={handleClick}>{text}</button>
        </div>
    );
} 
