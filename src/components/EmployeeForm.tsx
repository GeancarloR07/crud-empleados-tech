import { useState} from "react";
import type { Employee } from "../types/Employee";

// Props que recibe el componente
interface Props {
  onSave: (employee: Employee) => void;
  selectedEmployee?: Employee | null;
}

export const EmployeeForm = ({ onSave, selectedEmployee }: Props) => {

  // 🔹 Estado del formulario
  const emptyEmployee: Employee = {
  id: "",
  name: "",
  area: "",
  salary: 0,
  startDate: "",
  endDate: ""
};

const [form, setForm] = useState<Employee>(
  selectedEmployee || emptyEmployee
);
  


  // 🔹 Manejar cambios en inputs
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: name === "salary" ? Number(value) : value
  });
};

  // 🔹 Enviar formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const employeeToSave = {
      ...form,
      id: form.id || crypto.randomUUID() // generar id si no existe
    };

    onSave(employeeToSave);

    // Limpiar formulario
    setForm({
      id: "",
      name: "",
      area: "",
      salary: 0,
      startDate: "",
      endDate: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">

  <div className="form-group">
    <label>Nombre</label>
    <input
      name="name"
      placeholder="Ingrese nombre"
      onChange={handleChange}
      value={form.name}
    />
  </div>

  <div className="form-group">
    <label>Area</label>
    <select name="area" onChange={handleChange} value={form.area}>
      <option value="">Seleccione un area</option>
      <option value="Frontend">Frontend</option>
      <option value="Backend">Backend</option>
      <option value="Ingeniero DevOps">Ingeniero DevOps</option>
      <option value="QA Tester">QA Tester</option>
      <option value="Product Manager">Product Manager</option>
      <option value="Diseñador UX/UI">Diseñador UX/UI</option>
    </select>
  </div>

  <div className="form-group">
    <label>Salario</label>
    <input
      name="salary"
      type="number"
      placeholder="Ej: 2000000"
      onChange={handleChange}
      value={form.salary}
    />
  </div>

  <div className="form-group">
    <label>Inicio contrato</label>
    <input
      name="startDate"
      type="date"
      onChange={handleChange}
      value={form.startDate}
    />
  </div>

  <div className="form-group">
    <label>Fin de contrato</label>
    <input
      name="endDate"
      type="date"
      onChange={handleChange}
      value={form.endDate}
    />
  </div>

  <button type="submit">Guardar</button>

</form>
  );
};