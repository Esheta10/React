export const UserInfo = ({name, age, city, email}) => {
    return (
       <div>
             <h4> Name: {name}</h4>
             <h4>Age: {age}</h4>
             <h4>City: {city}</h4>
             <h4>E-mail: {email}</h4>
       </div>
    );
}