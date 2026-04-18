// Definimos la estructura de un empleado (TIPADO FUERTE con TypeScript)
export interface Employee {
  id: string; // Identificador único
  name: string; // Nombre del empleado
  area: string; // Área (Frontend, Backend, etc.)
  salary: number; // Salario
  startDate: string; // Fecha inicio
  endDate: string; // Fecha fin
}