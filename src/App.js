import React from 'react';
import './App.css';
import StudentInput from './components/StudentInput';
import StudentList from './components/StudentList';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App m-5">
      <StudentInput/>
      <StudentList/>
    </div>
  );
}

export default App;
