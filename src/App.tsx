import { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Student from './models/Student';
import { Col, Row, Container, ListGroup } from 'react-bootstrap';


//import RegistrationForm from './components/RegistrationForm';

const App = () => {
const [students, setStudents] = useState<Student[]>([]);

const addStudent = (student: Student): void => {
   setStudents(prevState => [...prevState, student])
};
//(student: Student): void => { and (student: Student) => void; from the child element in Registration form are the same. both functions expect a student, recieves student as an argument and doesnt return anything
//behind the scenes,setStudents is adding a state that lives in the parent (app) and setting a new state that is equal to what we had before and adding to the end the new student that is coming from student. [...prevState, student])
   return (
<Container>
   {/*components are a function, props are arguments in the component function*/}
      <Row>
         <Col>
         <section>
      <h3>Students:</h3>
      <ListGroup>
      {students.map((student, index) => (
         <ListGroup.Item key = {index}>
            {student.firstName} {student.lastName}  - {student.age} -{""} {student.gradeLevel.name}
         </ListGroup.Item>
      ))}
      </ListGroup>
      {/*have my ListGroup that I imported from bootstrapand inside my li im going to have these things  */}
   </section>
         </Col>
         <Col>
         <RegistrationForm onFormSubmit = {addStudent} numberOfStudentsAlreadyRegistered = {students.length} />{/*RegistrationForm({numberOfStudentsAlreadyRegistered: students.length}) is the same thing */}
         </Col>
      </Row>
   </Container>
   );
};

export default App;
