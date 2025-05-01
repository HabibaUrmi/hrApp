import {employees} from "./employeedata";
import PersonCard from "./PersonCard";

const PersonList = () =>{
  return (
    <>
    <h1>All employee details</h1>
    <div className="Boxes">
   {employees.map(person =>(
    <PersonCard
    key ={person.id}
    {...person} />


   ))}
   </div>


    </>
  );
};


export default PersonList;
