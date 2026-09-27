export interface Student {
    readonly id: number;
    name: string;
    department: string;
    age?: number;
}

export type StudentStatus =
    | "active"
    | "inactive";

export interface ApiResponse<T> {
    success: boolean;
    data: T;
}