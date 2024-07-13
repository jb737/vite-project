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
//I have created a student object, I have assigned it to use the Student.ts contract, to get our constant
    return (
    <section>
        <h3>New Student Registration Form</h3>
            <form>
                <input onChange = {(event) => setStudent(mostRecentState => ({...mostRecentState, firstName: event.target.value,}))} 
                    type = "text" 
                    placeholder = "First Name"
                    value = {student.firstName}
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
                    value = {student.age}
                    />
                <select onChange = {(event) => setStudent((mostRecentState) => ({...mostRecentState, gradeLevel: GRADE_LEVELS.find(gl => gl.id === +event.target.value,) || { id: 0, name: ""}}))}>
                    {GRADE_LEVELS.map((gradeLevel, index) => (<option value={gradeLevel.id} key={index}>{gradeLevel.name}</option>))}
                </select>
            </form>
    </section>
    );//onChange, it will get the most recent state 
}