export const Greeting = ({name = "Guest" ,message = "Hello"}) => {
    return (
        <div>
            <h4>{message}! {name}</h4>
        </div>
    );
}