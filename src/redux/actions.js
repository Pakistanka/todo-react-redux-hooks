export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";

export function addStudent(student) {
    return{
        type: ADD_STUDENT,
        payload: student,
    }
}

export function deleteStudent(studentId) {
    return{
        type: DELETE_STUDENT,
        payload: studentId,
    }
}

export function updateStudent(student) {
    return{
        type: UPDATE_STUDENT,
        payload: student,
    }
}