import "./App.css";
import { useState } from "react";
import type{ Employee } from "./types/Employee";
import { getEmployees, addEmployee, deleteEmployee, updateEmployee } from "./services/employeeService";
import { EmployeeForm } from "./components/EmployeeForm";
import { EmployeeList } from "./components/EmployeeList";

function App() {

  // 🔹 Estado global de empleados
  const [employees, setEmployees] = useState<Employee[]>(getEmployees());

  // 🔹 Empleado seleccionado para editar
  const [selected, setSelected] = useState<Employee | null>(null);

  // 🔹 Cargar datos al iniciar;

  // 🔹 Guardar (crear o actualizar)
  const handleSave = (employee: Employee) => {
    if (selected) {
      updateEmployee(employee);
      setSelected(null);
    } else {
      addEmployee(employee);
    }

    setEmployees(getEmployees());
  };

  // 🔹 Eliminar
  const handleDelete = (id: string) => {
    deleteEmployee(id);
    setEmployees(getEmployees());
  };

  // 🔹 Editar
  const handleEdit = (employee: Employee) => {
    setSelected(employee);
  };

  return (
  <div className="container">
      <h1>Empresa Tech - Gestión de empleados</h1>

      <EmployeeForm
  key={selected ? selected.id : "new"}
  onSave={handleSave}
  selectedEmployee={selected}
/>

      <EmployeeList
        employees={employees}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;