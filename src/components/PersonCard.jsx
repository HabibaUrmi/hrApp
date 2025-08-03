import React, { useState } from 'react';
import axios from 'axios';
import './PersonCard.css';

const animalEmoji = {
  Owl: "🦉",
  Cat: "🐱",
  Dog: "🐶",
  Bear: "🐻",
  Fox: "🦊",
  Elephant: "🐘",
  Rabbit: "🐰",
  Tiger: "🐯",
  Lion: "🦁",
  Wolf: "🐺",
};

const PersonCard = ({
  id,
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
  onUpdateEmployee // 💡 Pass this in from parent
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ salary, location, department, skills: skills.join(", ") });
  const [message, setMessage] = useState("");

  const getYearsWorked = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(years);
  };

  const yearsWorked = getYearsWorked(startDate);
  let reminder = "";
  if (yearsWorked > 0 && yearsWorked % 5 === 0) {
    reminder = "🎉 Schedule recognition meeting.";
  } else if (yearsWorked < 0.5) {
    reminder = "🔔 Schedule probation review.";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const updatedFields = {
      salary: editData.salary,
      location: editData.location,
      department: editData.department,
      skills: editData.skills.split(",").map(skill => skill.trim())
    };

    axios.patch(`http://localhost:3001/employees/${id}`, updatedFields)
      .then(res => {
        onUpdateEmployee(res.data); // Update parent state
        setIsEditing(false);
        setMessage("✅ Saved!");
        setTimeout(() => setMessage(""), 2000);
      })
      .catch(err => console.error("Error updating employee:", err));
  };

  const handleCancel = () => {
    setEditData({ salary, location, department, skills: skills.join(", ") });
    setIsEditing(false);
  };

  return (
    <div className="person-card">
      <p>ID: {id}</p>
      <h2>{name}</h2>
      <p>{title} - {department}</p>
      <p>Location: {isEditing ? (
        <input name="location" value={editData.location} onChange={handleChange} />
      ) : location}</p>

      <p>Phone: {phone}</p>
      <p>Email: {email}</p>

      <p>Salary: {isEditing ? (
        <input name="salary" type="number" value={editData.salary} onChange={handleChange} />
      ) : `€${salary}`}</p>

      <p>Department: {isEditing ? (
        <input name="department" value={editData.department} onChange={handleChange} />
      ) : department}</p>

      <p>Skills: {isEditing ? (
        <input name="skills" value={editData.skills} onChange={handleChange} />
      ) : skills.join(", ")}</p>

      <p className="animal-emoji">Favorite Animal: {animalEmoji[animal] || "🐾"}</p>
      <p>Years Worked: {yearsWorked} years</p>
      {reminder && <p className="reminder">{reminder}</p>}

      {message && <p style={{ color: "green" }}>{message}</p>}

      {isEditing ? (
        <>
          <button onClick={handleSave}>💾 Save</button>
          <button onClick={handleCancel}>❌ Cancel</button>
        </>
      ) : (
        <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
      )}
    </div>
  );
};

export default PersonCard;


