import React, { useState } from "react";
import Swal from 'sweetalert2'


const EditEmployee = ({
  employees,
  selectedEmployee,
  setEmployees,
  setIsEditing
}) => {
  const id = selectedEmployee.id;


  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [Compensation, setCompensation] = useState(
    selectedEmployee.Compensation
  );
  const [date, setDate] = useState(selectedEmployee.date);
 

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !Compensation || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are mandatory",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      Compensation,
      date,
    };

    for(let i=0;i < employees.length; i++) {
      if(employees[i].id === id){
        employees.splice(i, 1,employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false)

    Swal.fire({
      icon:"success",
      title:"Updated!",
      text:`${employee.firstName} ${employee.lastName}'s data has been Updated`,
      showConfirmButton:false,
      timer:1000
  })
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Compensation">Compensation ($)</label>
        <input
          id="Compensation"
          type="number"
          name="Compensation"
          value={Compensation}
          onChange={(e) => setCompensation(e.target.value)}
        />
        <label htmlFor="date">Date </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
