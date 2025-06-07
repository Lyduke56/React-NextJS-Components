import { useState } from 'react';
import './Components.css';

export default function StudentInfo() {
    const [student, setStudent] = useState({ name: '', age: '', course: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Student Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
  }

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <div className="form-group">
        <label className="form-label">
          Name:
        </label>
        <input 
          className="form-input"
          name="name" 
          value={student.name} 
          onChange={handleChange} 
          required 
          placeholder="Enter your name"
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">
          Age:
        </label>
        <input 
          className="form-input"
          name="age" 
          value={student.age} 
          onChange={handleChange} 
          required 
          type="number" 
          min="1"
          max="120"
          placeholder="Enter your age"
        />
      </div>

      <div className="form-group">
        <label className="form-label">
          Course: 
        </label>
        <input 
          className="form-input"
          name="course" 
          value={student.course} 
          onChange={handleChange} 
          required 
          placeholder="Enter your course"
        />
      </div>
      
      <button type="submit" className="submit-button">
        Submit Information
      </button>
    </form>
  );
}