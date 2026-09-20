// Default Export

export default function getUser() {
    return {
        name: "Vaishu",
        role: "Developer"
    };
}

// Named Exports

export const role = "Developer";

export function login() {
    return "Login successful";
}