import { ADD_STUDENT, DELETE_STUDENT, UPDATE_STUDENT } from './actions';
import { students } from './states';

export let reducer = (state = students, action) => {
    switch (action.type) {

        case ADD_STUDENT:
            const student = action.payload;
            return new Map([
                ...state,
                [student.id, student],
            ]);

        case DELETE_STUDENT:
            const newStudents = new Map(state);
            delete newStudents.delete(action.payload);

            return newStudents;

        case UPDATE_STUDENT:
            const { id } = action.payload;

            state.set(id, {
                ...state.get(id),
                ...action.payload
            })

            return state;

        default:

    }

    return state;
}
