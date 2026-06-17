import {ActionButton} from './ActionButton'
export const Contact = () => {
    const sendMessage = () => {
        alert("Sending your message");
    }
    return (
        <div>
            <h2>Contact Us</h2>
            <ActionButton onClick ={sendMessage} text="Message"/>
        </div>
    );
}