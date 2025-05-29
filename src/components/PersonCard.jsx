// PersonCard.jsx
import React from 'react';

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
  skills
}) => {
  const getYearsWorked = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
    return years;
  };

  const yearsWorked = getYearsWorked(startDate);
  const roundedYears = Math.floor(yearsWorked);

  let reminder = "";
  if (roundedYears > 0 && roundedYears % 5 === 0) {
    reminder = "🎉 Schedule recognition meeting.";
  } else if (yearsWorked < 0.5) {
    reminder = "🔔 Schedule probation review.";
  }

  return (
    <div className="person-card">
      <p>ID:{id}</p>
      <h2>{name}</h2> {/* ID shown before name */}
      <p>{title} - {department}</p>
      <p>Location: {location}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Salary: €{salary}</p>
      <p>Skills: {skills.join(", ")}</p>
      <p className="animal-emoji">Favorite Animal: {animalEmoji[animal] || "🐾"}</p>
      <p>Years Worked: {roundedYears} years</p>
      {reminder && <p className="reminder">{reminder}</p>}
    </div>
  );
  
  
};

export default PersonCard;

