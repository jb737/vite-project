//this code was written by Ygor Futado. I copied it from class to learn best practices. Mine was functional but did not use best practices. How embarassing... my inexperience is showing!
import React, { useState } from "react";
import Student from "../../models/Student";
import GRADE_LEVELS from "../../constants/gradeLevels";
import classes from "./RegistrationForm.module.css";
import {Form, Button } from 'react-bootstrap';

const defaultStudent: Student = {
    firstName: "",
    lastName: "",
    age: 0,
    gradeLevel: {
        id: 0,
        name: "",
    },
};

interface RegistrationFormProps {
    numberOfStudentsAlreadyRegistered: number;
    onFormSubmit: (student: Student) => void;
 }//we need to create a contract with all of the properties that the registration form can recieve and then define what those properties are. The only thing that weare going to pass here is the number of students registered

export default function RegistrationForm({
    numberOfStudentsAlreadyRegistered,
    onFormSubmit,} : RegistrationFormProps) {
    const [student, setStudent] = useState<Student>({...defaultStudent})//in this registration form function we are passing props as an argument
       
//I have created a student object, I have assigned it to use the Student.ts contract, to get our constant. This is our defined state
//onFormSubmit is the function that we create to get state data to the parent element from the child. onFormSubmit has access to all of the data within our registration form

const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(student);
    setStudent({...defaultStudent });
};

    //onSubmitHandler is our function name. We are passing it the event type which is a react form event. First thing we need to prevent default behavior.
    //the default behaviour when you submit the form is to refresh the page. we don't have an api so we will lose all the data
    //In the form below, we register the onSubmit event handler, this is going to get the event(React.FormEvent) then use onSubmitHandler and pass down the event
    //onSubmit by default is already expecting the event that is outlined in the onSubmitHandler, so we can skip the arguments and just call the functions name.
    //JSON just turns the submitted info into an alert event that we can read
    return (
    <section>
        <h3 className= {classes.title}>New Student Registration Form</h3>
        <span>Number of students registered: {numberOfStudentsAlreadyRegistered}</span>
            <Form onSubmit = {onSubmitHandler}>
                    <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        onChange = {(event) => setStudent(mostRecentState => ({...mostRecentState, firstName: event.target.value,}))}  
                        required value = {student.firstName} type="text" placeholder="FirstName"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        onChange = {(event) => setStudent(mostRecentState => ({...mostRecentState, lastName: event.target.value,}))}
                        required value={student.lastName} type="text" placeholder="Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        onChange = {(event) => setStudent((mostRecentState) => ({...mostRecentState, age: +event.target.value,}))} 
                        required value = {student.age} type="number" placeholder="age" min={1} />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="gradeLevel">
                    <Form.Label>Grade Level</Form.Label>
                    <Form.Select onChange = {(event) => setStudent((mostRecentState) => ({...mostRecentState, gradeLevel: GRADE_LEVELS.find(gl => gl.id === +event.target.value,) || { id: 0, name: ""},}))} 
                        aria-label="Select Grade Level">
                        {GRADE_LEVELS.map((gradeLevel, index) => (<option value={gradeLevel.id} key={index}>{gradeLevel.name}</option>))}
                    </Form.Select>
                    </Form.Group>
    
                <Button as="input" type="submit" value="Submit" />
            </Form>
    </section>
    );//find is an array function that is built in that we can pass a function with which you can check if some condition is true, this will be executed for each element. Similar to map, find gets the current element thats iterating through. We are checking if the current grade levelid matches the grade level that I selected as event. That valu is what we are defining here valu={gradeLevel.id}
    //we are saying: onChange, get me the grade level that has the same id as the item that was just selected || the other option
    //now, when I click submit
}



//this belong in app.tsx.

{/*<section>
<h3>Students:</h3>
<ul>
{students.map((student, index) => (
   <li key = {index}>
      {student.firstName} {student.lastName}  - {student.age} -{""} {student.gradeLevel.name}
   </li>
))}
</ul>
{/*have my ul, and my li and inside my li im going to have these things  */}
{/*</section>
<RegistrationForm numberOfStudentsAlreadyRegistered = {students.length} />*/}