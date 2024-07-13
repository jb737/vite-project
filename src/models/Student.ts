import GradeLevel from "./gradeLevelInterface";

export default interface Student {
    firstName: string;
    lastName: string;
    age: number;
    gradeLevel: GradeLevel;
    grades?: number [];
}