import { useState } from "react";

export default function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (name.trim() === "" || role.trim() === "") return;

    addEmployee(name, role);
    setName("");
    setRole("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Employee Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "8px 15px" }}>
          Add Employee
        </button>
      </div>
    </form>
  );
}
