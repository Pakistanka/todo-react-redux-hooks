import React from 'react';
import { createSelector } from 'reselect';
import StudentItem from './StudentItem';
import { useSelector } from 'react-redux';

const getItemsSelector = createSelector(
    state => state,
    items => [...items.keys()],
);

function StudentList() {
    const studentIds = useSelector(state => getItemsSelector(state));
    console.log('render list');
    return (
        <div className="my-4">
            <div className="row m-2 d-flex justify-content-around">
                <p>ФИО</p>
                <p>Дата рождения</p>
                <p>Успеваемость</p>
            </div>
           {studentIds.map(studentId => (
               <StudentItem key={studentId} studentId={studentId} />
           ))}
        </div>
    )
}

export default StudentList;
