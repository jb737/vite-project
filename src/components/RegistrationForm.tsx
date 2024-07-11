//this code was written by Ygor Futado. I copied it from class to learn best practices. Mine was functional, not great
import React, { useState } from "react";

export default function RegistrationForm() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    return (
    <React.Fragment>
            <form>
                <input onChange = {(event) => setFirstName(event.target.value)} 
                    type = "text" 
                    placeholder = "First Name"
                    value = {firstName}
                    />
                <input onChange = {(event) => setLastName(event.target.value)} 
                    type = "text" 
                    placeholder = "Last Name"
                    value = {lastName}
                    />
                <input onChange = {(event) => setAge(event.target.value)} 
                    min = {0} 
                    type = "number" 
                    placeholder = "Age"
                    value = {age}
                    />
            </form>
        <p>Hello, {lastName}, {firstName}. Are you sure that you are {age} years old?</p> 
    </React.Fragment>
    );
}