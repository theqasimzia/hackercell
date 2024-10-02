// app/components/Courses.jsx
"use client"; // Enables client-side features like hooks
import React from 'react';

const Courses = () => {
  // Dummy data for courses (you can fetch this from an API or your state management)
  const courses = [
    { id: 1, title: "Introduction to Programming", description: "Learn the basics of programming." },
    { id: 2, title: "Web Development", description: "Build dynamic websites using HTML, CSS, and JavaScript." },
    { id: 3, title: "Data Science", description: "Explore data analysis and visualization techniques." },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-jetbrains mb-4">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <div key={course.id} className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p>{course.description}</p>
            <button className="mt-2 px-4 py-2 bg-primary text-white rounded">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
