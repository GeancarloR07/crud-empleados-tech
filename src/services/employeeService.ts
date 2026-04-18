import type { Employee } from "../types/Employee";

const STORAGE_KEY = "employees";

// 🔹 Obtener todos los empleados
export const getEmployees = (): Employee[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// 🔹 Guardar lista completa
export const saveEmployees = (employees: Employee[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};

// 🔹 Crear empleado
export const addEmployee = (employee: Employee) => {
  const employees = getEmployees();
  employees.push(employee);
  saveEmployees(employees);
};

// 🔹 Eliminar empleado
export const deleteEmployee = (id: string) => {
  const employees = getEmployees().filter(emp => emp.id !== id);
  saveEmployees(employees);
};

// 🔹 Actualizar empleado
export const updateEmployee = (updated: Employee) => {
  const employees = getEmployees().map(emp =>
    emp.id === updated.id ? updated : emp
  );
  saveEmployees(employees);
};