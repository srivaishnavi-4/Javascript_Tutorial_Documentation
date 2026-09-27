export class StudentService {
    constructor() {
        this.students = [];
        this.loadStudents();
    }
    // Load existing students when the application starts
    loadStudents() {
        const storedStudents = localStorage.getItem("students");
        if (storedStudents) {
            this.students = JSON.parse(storedStudents);
        }
    }
    // Generic method to save any data to localStorage
    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    addStudent(name, department) {
        const student = {
            id: Date.now(),
            name,
            department
        };
        this.students.push(student);
        this.save("students", this.students);
        return {
            success: true,
            data: student
        };
    }
    getStudents() {
        return this.students;
    }
    getStatus(status) {
        return status;
    }
}
