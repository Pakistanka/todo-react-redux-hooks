import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent } from '../redux/actions';
import { updateStudent } from '../redux/actions';

function StudentItem({ studentId }) {
    const [edit, setEdit] = useState(false);

    const student = useSelector(state => state.get(studentId));
    const dispatch = useDispatch();

    const update = useCallback((params) => (dispatch(updateStudent({...params, id: studentId}))), [dispatch, studentId]);
    const remove = useCallback(() => (dispatch(deleteStudent(studentId))), [dispatch, studentId]);

    const handleColClick = useCallback((event) => {
        setEdit(true);
    }, []);


    const handleInputChange = useCallback((e) => {
        update({
            name: e.target.value
        });
    }, [update]);

    const handleInputBlur = useCallback((e) => {
        setEdit(false);
    }, []);

    const handleButtonRemoveClick = useCallback((e) => {
        remove();
    }, [remove])

    return (
        <div>
            <div className="row mx-2 align-items-center">

                <div className="col" onClick={handleColClick}>
                    {edit ? (
                            <input
                                id="studentNameInput"
                                type="text"
                                className="form-control"
                                value={student.name}
                                autoFocus
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                            />
                        )

                        : (
                            <h4>{student.name}</h4>
                        )
                    }
                </div>


                <div className="col">
                    {student.date}
                </div>
                <div className="col">
                    {student.marks}
                </div>

                <button onClick={handleButtonRemoveClick} className="btn btn-danger m-2">Удалить</button>
            </div>
        </div>
    )
}

export default StudentItem;

