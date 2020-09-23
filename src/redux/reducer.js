import {ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT} from './actions';
import { students } from './states';

export let reducer = (state = students, action) => {
    let newStudents;
    switch (action.type) {

        case ADD_STUDENT:
            newStudents = [...state];
            newStudents.push(action.payload);
            return newStudents;

        case DELETE_STUDENT:
            newStudents = [...state];
            newStudents = newStudents.filter(student=>student.id !== action.payload) 
            return newStudents;

            case UPDATE_STUDENT:
                newStudents = [...state];
    
                newStudents.map(student => {
                    if (student.id === action.payload.id){                    
                        return {
                            ...student,
                            student: student.name = action.payload.name
                        }
                    } 
                    return student;
                })
                return newStudents;

            
        default:

    }
    return state;
}
