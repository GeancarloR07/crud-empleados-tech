import type { Employee } from "../types/Employee";

interface Props {
  employees: Employee[];
  onDelete: (id: string) => void;
  onEdit: (employee: Employee) => void;
}

export const EmployeeList = ({ employees, onDelete, onEdit }: Props) => {
  return (
    <div>
      <h2>Lista de empleados</h2>

      {employees.map(emp => (
        <div key={emp.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          
          <p><strong>Nombre:</strong> {emp.name}</p>
          <p><strong>Area:</strong> {emp.area}</p>
          <p>
  <strong>Salario:</strong>{" "}
  {emp.salary.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP"
  })}
</p>
          <p><strong>Inicio:</strong> {emp.startDate}</p>
          <p><strong>Fin:</strong> {emp.endDate}</p>

          <button onClick={() => onEdit(emp)}>Editar</button>
          <button onClick={() => onDelete(emp.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};