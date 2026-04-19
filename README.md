# CRUD de Empleados - Empresa TECH

## Descripción del Proyecto

Aplicación web desarrollada con React, Vite y TypeScript que permite gestionar empleados mediante un sistema CRUD (Create, Read, Update, Delete).

El sistema está orientado a una empresa del sector tecnológico, permitiendo la administración eficiente del personal.

---

## Tecnologías Utilizadas

- React
- Vite
- TypeScript
- LocalStorage

---

## Contexto del Sistema

La aplicación está diseñada para una empresa de desarrollo de software (TECH), la cual organiza su personal en diferentes áreas según su especialidad técnica.

### Organización de áreas

Las áreas definidas dentro del sistema son:

- Frontend  
- Backend  
- QA (Quality Assurance)  
- DevOps  
- UX/UI  

Cada empleado pertenece a un área específica dentro de la organización.

### Relación entre empleados y roles

Cada empleado desempeña un rol implícito según el área en la que trabaja. Por ejemplo:

- Área Frontend → Desarrollador Frontend  
- Área Backend → Desarrollador Backend  
- Área QA → QA Tester  
- Área DevOps → Ingeniero DevOps  
- Área UX/UI → Diseñador UX/UI  

Esta relación permite clasificar a los empleados según su especialidad técnica dentro de la empresa.

### Datos relevantes del sistema

El sistema gestiona la siguiente información para cada empleado:

- Nombre  
- Área o departamento  
- Salario  
- Fecha de inicio de contrato  
- Fecha de finalización de contrato  

### Funcionalidad del sistema

El sistema permite gestionar empleados mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), facilitando la administración del personal dentro de la empresa.

---

## Funcionalidades

- Crear empleados  
- Listar empleados  
- Editar empleados  
- Eliminar empleados  

---

## Persistencia de datos

Los datos se almacenan en el navegador utilizando localStorage, lo que permite mantener la información incluso después de recargar la página.

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/GeancarloR07/crud-empleados-tech.git

### 2. Navegar al directorio del proyecto

```bash
cd crud-empleados-tech

### 3. Instalar dependencias

```bash
npm install

### 4. Iniciar la aplicación

```bash
npm run dev

La aplicación estará disponible en `http://localhost:5173` (o el puerto asignado por Vite).

Autor

Geancarlo
Estudiante de Ingeniería de Sistemas