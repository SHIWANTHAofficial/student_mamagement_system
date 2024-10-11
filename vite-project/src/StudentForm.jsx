import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserForm.css'; 

const UserForm = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    contact: "",
  });

  const [gradientData, setGradientData] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGradientChange = (e) => {
    const { name, value } = e.target;
    setGradientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStudentSubmit = (e) => {
    e.preventDefault();
    alert("It's done");
    console.log("Student Form submitted:", studentData);
  };

  const handleGradientSubmit = (e) => {
    e.preventDefault();
    alert("It's done");
    console.log("Gradient Form submitted:", gradientData);
  };

  
  const handleStudentClear = () => {
    setStudentData({
      name: "",
      age: "",
      contact: "",
    });
  };

  const handleGradientClear = () => {
    setGradientData({
      name: "",
      address: "",
      contact: "",
    });
  };




  return (
    <div className="AllInformation">
   
      <fieldset className="StudentField">
        
        <legend>Student Information</legend>
        <form onSubmit={handleStudentSubmit}>

          <div className="SName">
            <label htmlFor="studentName" className="LName">Name:</label>
            <input
              type="text"
              className="form-control"
              id="studentName"
              name="name"
              value={studentData.name}
              onChange={handleStudentChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="SAge">
            <label htmlFor="age" className="LAge">Age:</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={studentData.age}
              onChange={handleStudentChange}
              placeholder="Enter your age"
              min="1"
              required
            />
          </div>

          <div className="SContact">
            <label htmlFor="studentContact" className="LContact">Contact :</label>
            <input
              type="tel"
              className="form-control"
              id="studentContact"
              name="contact"
              value={studentData.contact}
              onChange={handleStudentChange}
              placeholder="Enter your contact number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
            />
          </div>
        </form>
      </fieldset>
      

      
      <fieldset className="GradientFild">
        <legend>Gradient Information</legend>
        <form onSubmit={handleGradientSubmit}>
          <div className="GName">
            <label htmlFor="gradientName" className="GLName">Name:</label>
            <input
              type="text"
              className="form-control"
              id="gradientName"
              name="name"
              value={gradientData.name}
              onChange={handleGradientChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="GAddress">
            <label htmlFor="address" className="GLAddress">Address:</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={gradientData.address}
              onChange={handleGradientChange}
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="GContact">
            <label htmlFor="gradientContact" className="GLContact">Contact :</label>
            <input
              type="tel"
              className="form-control"
              id="gradientContact"
              name="contact"
              value={gradientData.contact}
              onChange={handleGradientChange}
              placeholder="Enter your contact number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              required
            />
          </div>
         
          <div className="bt">
            <button type="button" className="btn btn-secondary" onClick={() => { handleStudentClear(); handleGradientClear(); }}>
              Clear
            </button>
            <button type="submit" className="btn btn-primary me-2">Register</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};


export default UserForm;