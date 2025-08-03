import PersonCard from "../components/PersonCard";

const PersonList = ({ employees, setEmployees }) => {
  const handleUpdate = (updatedEmp) => {
    setEmployees(prev =>
      prev.map(emp => (emp.id === updatedEmp.id ? updatedEmp : emp))
    );
  };

  return (
    <>
      <h1>All employee details</h1>
      <div className="Boxes">
        {employees.map(person => (
          <PersonCard
            key={person.id}
            {...person}
            onUpdateEmployee={handleUpdate} // 🧠 Pass function
          />
        ))}
      </div>
    </>
  );
};

export default PersonList;

