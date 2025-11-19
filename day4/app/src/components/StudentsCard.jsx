import React from "react";

const StudentsCard = ({ studentData }) => {
  return (
    <div>
      <h1>Student Information:</h1>
      <p>Name:{studentData.studentName}</p>
      <p>Class:{studentData.class}</p>
      <p>Subject:{studentData.subject}</p>
    </div>
  );
};

export default StudentsCard;
