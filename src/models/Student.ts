import GradeLevel from "./gradeLevelInterface";

export default interface Student {
    firstName: string;
    lastName: string;
    age: number;
    gradeLevel: GradeLevel; //this is a nested object
    grades?: number [];// this is optional
}