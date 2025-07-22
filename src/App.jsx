import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Root from "./pages/Root";
import About from "./pages/Aboutpage";
import PersonList from "./pages/PersonList";
import AddEmployee from "./pages/AddEmployee";

const App = () => {
  const [employees, setEmployees] = useState([]);

  // Fetch employee data on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  // Add new employee to the server and update local state
  const addEmployeeHandler = (newEmployee) => {
    axios
      .post("http://localhost:3001/employees", newEmployee)
      .then((res) => {
        setEmployees((prev) => [...prev, res.data]);
      })
      .catch((err) => console.error("Error adding employee:", err));
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









