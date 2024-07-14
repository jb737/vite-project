//this code was written by Ygor Futado. I copied it from class to learn best practices. Mine was functional but did not use best practices. How embarassing... my inexperience is showing!
import React, { useState } from "react";
import Student from "../models/Student";
import GRADE_LEVELS from "../constants/gradeLevels";

export default function RegistrationForm() {
    const [student, setStudent] = useState<Student>({
        firstName: "",
        lastName: "",
        age: 0,
        gradeLevel: {
            id: 0,
            name: "",
        },
    });
//I have created a student object, I have assigned it to use the Student.ts contract, to get our constant. This is our defined state
    return (
    <section>
        <h3>New Student Registration Form</h3>
            <form>
                <input onChange = {(event) => setStudent(mostRecentState => ({...mostRecentState, firstName: event.target.value,}))} 
                    type = "text" 
                    placeholder = "First Name"
                    value = {student.firstName}//here we are updating state using the (mostRecentState) and using the callback function provided by the setState function. This allows us to get access to the most recent state, copying it, modifying the property thatw we want, and allowing us to use it in real life.
                    />
                <input onChange = {(event) => setStudent(mostRecentState => ({...mostRecentState, lastName: event.target.value,}))}  
                    type = "text" 
                    placeholder = "Last Name"
                    value = {student.lastName}
                    />
                <input onChange = {(event) => setStudent((mostRecentState) => ({...mostRecentState, age: +event.target.value,}))} 
                    min = {1} 
                    type = "number" 
                    placeholder = "Age"
                    value = {student.age || ""}//these are all controlled inputs, we are watching for change and we are attatching the value to a state
                    />
                <select onChange = {(event) => setStudent((mostRecentState) => ({...mostRecentState, gradeLevel: GRADE_LEVELS.find(gl => gl.id === +event.target.value,) || { id: 0, name: ""}}))}>
                    {GRADE_LEVELS.map((gradeLevel, index) => (<option value={gradeLevel.id} key={index}>{gradeLevel.name}</option>))}
                </select>
                <button type= "submit">Complete Registration</button>
            </form>
    </section>
    );//find is an array function that is built in that we can pass a function with which you can check if some condition is true, this will be executed for each element. Similar to map, find gets the current element thats iterating through. We are checking if the current grade levelid matches the grade level that I selected as event. That valu is what we are defining here valu={gradeLevel.id}
    //we are saying: onChange, get me the grade level that has the same id as the item that was just selected || the other option
}