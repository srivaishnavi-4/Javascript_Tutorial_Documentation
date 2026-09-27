import {
    Student,
    StudentStatus,
    ApiResponse
} from "./types.js";

export class StudentService {
    private students: Student[] = [];

    constructor() {
        this.loadStudents();
    }

    // Load existing students when the application starts
    private loadStudents(): void {
        const storedStudents = localStorage.getItem("students");

        if (storedStudents) {
            this.students = JSON.parse(storedStudents);
        }
    }

    // Generic method to save any data to localStorage
    private save<T>(key: string, data: T): void {
        localStorage.setItem(
            key,
            JSON.stringify(data)
        );
    }

    addStudent(
        name: string,
        department: string
    ): ApiResponse<Student> {

        const student: Student = {
            id: Date.now(),
            name,
            department
        };

        this.students.push(student);

        this.save(
            "students",
            this.students
        );

        return {
            success: true,
            data: student
        };
    }

    getStudents(): Student[] {
        return this.students;
    }

    getStatus(status: StudentStatus): string {
        return status;
    }
}