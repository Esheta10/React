import {useState} from "react"

export const UserProfile = () => {

    const [user, setUser] = useState({

        name: "Bruce Wayne",
        age: 30,
        email: "batman@justiceleague.com",
        address: {
            city: "Gotham City",
            country: "USA"
        },
    });

    console.log("Component rendering, user: ", user)

    const updateName = () => {

        setUser({
            ...user,  // copy all the existing properties
            name: "Clark Kent", //override just the name
        });
    };

    const updateAge = () => {

        setUser({
            ...user, //copy all the existing properties
            age: user.age + 1, // ovrride just the age
        });
    };

    const updateAddress = () => {

        setUser({
            ...user,
            address: {
                ...user.address,
                city: "Metropolis",
            },
        });
    };


    return (
       <div>
             <h1>User Profile</h1>
             <h3>Name: {user.name}</h3>
             <h3>Age: {user.age}</h3>
             <h3>e-mail: {user.email}</h3>
             <h3>City: {user.address.city}</h3>
             <h3>Country: {user.address.country}</h3>

             <button onClick={updateName}>Change name to Clark Kent</button>
             <button onClick={updateAge}>Increase age by 1</button>
             <button onClick={updateAddress}>Change city to Metropolis</button>
       </div>
    );
}