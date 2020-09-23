import React, { useState } from 'react'
import { addStudent } from '../redux/actions';
import { v1 as uuid } from "uuid";
import { useDispatch } from 'react-redux';

function StudentInput() {
    let [name, setName] = useState();
    let [date, setDate] = useState();
    let [marks, setMarks] = useState(); 
    let dispatch = useDispatch();

    const shoot = () => {
        alert("Great Shot!");
    }

    let button = (
        <button className="btn btn-primary mx-2" onClick={shoot} disabled>Добавить</button>
    )                

    if (name && date && marks) {
        button = (
            <button 
                type="button" 
                className="btn btn-primary mx-2"
                onClick={() => {
                    dispatch(addStudent(
                        {
                            id: uuid(),
                            name: name,
                            date: date,
                            marks: marks
                        }
                    ))
                    setName("");
                    setDate("");
                    setMarks("");
                }}
                >Добавить
            </button>

        )
    }
    return (
        <div>
            <h3>Список студентов</h3>
            <div className="row m-2">
                <input 
                    type="text" 
                    className="col form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="date" 
                    className="col form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <select  
                    className="col form-control"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                >
                    <option>?</option>
                    <option>Отл</option>
                    <option>Хор</option>
                    <option>Уд</option>
                    <option>Неуд</option>
                </select>
                {button}
            </div>
        </div>
    )
}

export default StudentInput;
