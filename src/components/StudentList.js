import React from 'react';
import StudentItem from './StudentItem';
import { useSelector } from 'react-redux';

function StudentList(actions) {
    let students = useSelector(state => state)
    return (
        <div className="my-4">
            <div className="row m-2 d-flex justify-content-around">
                <p>ФИО</p>
                <p>Дата рождения</p>
                <p>Успеваемость</p>
            </div>
           {students.map(student => {
               return <StudentItem key={student.id} student={student} {...actions}/>
           })}
        </div>
    )
}

export default StudentList;
