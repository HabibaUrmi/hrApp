const Person = (props) => {
  console.log("this is person props" , props);
  return (
    <div className ="person">
    <p>Name:{props.name}</p>
    <p>Title:{props.title}</p>
    <p>Salary:{props.salary}</p>
    <p>Email:{props.email}</p>
    <p>Animal:{props.animal}</p>
    </div>
  );
  };

  export default Person;