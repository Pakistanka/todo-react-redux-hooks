import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../redux/actions';
import { updateStudent } from '../redux/actions';

function StudentItem({student}) {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState(student.name);
    let dispatch = useDispatch();

    const editHandler = (e) => {
        setEdit(!edit)

        dispatch(updateStudent(
            {
                ...student,
                name: name
            }
        ));
        // setEdit(!edit);

        if (edit) {
            setName(student.name);
        }
    }

    return (
        <div>
            <div className="row mx-2 align-items-center">
                
            <div className="col" onClick={editHandler}>
                    {edit 
                    ? <input 
                        id="studentNameInput"
                        type="text" 
                        className="form-control" 
                        value={name}
                        autoFocus
                        onChange={(e) => setName(e.target.value)}
                        onBlur={editHandler}
                    /> 
                    : <h4>{student.name}</h4>}
                </div>
                


                <div className="col">
                   {student.date}
                </div>
                <div className="col">
                    {student.marks}
                </div>

                <button 
                    onClick={() => dispatch(deleteStudent(student.id))}
                    className="btn btn-danger m-2"
                >Удалить</button>
            </div>
        </div>
    )
}

export default StudentItem;

