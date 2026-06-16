import React from "react"

export const Hello = () => {
    return (
        <div id = "container">
            <h1>Hello Esheta!</h1>
        </div>
    )
}

export const HelloWithoutJSX = () => {
    React.createElement(
        "div",
        {id: "container"},
        React.createElement("h1",null,"Hello Esheta!")
    );
}

export const CandidateProfile = () => {
    const name = "Dan Brown";
    const yearsOfExperience = 89;
    const age = 102;

    return (
        <div>
            <h2>{name}</h2>
            <p>He is {age} years old and has an experience of {yearsOfExperience} years.</p>
        </div>
    );
}
