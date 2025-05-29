import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { employees as initialEmployees } from "./data/employeedata"; // Initial data
import Root from "./pages/Root";
import About from "./pages/Aboutpage"; 
import PersonList from "./pages/PersonList"; 
import AddEmployee from "./pages/AddEmployee";

const App = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployeeHandler = (newEmployee) => {
    setEmployees((prev) => [
      ...prev,
      { ...newEmployee, id: Date.now() },
    ]);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <PersonList employees={employees} />,
        },
        {
          path: "/add",
          element: <AddEmployee onAddEmployee={addEmployeeHandler} />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;








