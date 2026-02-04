import { useState } from "react";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";

export default function App() {
  const [employees, setEmployees] = useState([]);

  function addEmployee(name, role) {
    setEmployees(prev => [...prev, { name, role }]);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>
      <AddEmployee addEmployee={addEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}
