// app/main/page.jsx
"use client"; // This line enables client-side features like hooks
import Link from 'next/link';

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-4xl font-jetbrains mb-4">Welcome to Hackercell!</h1>
      <h2 className="text-2xl mb-4">What would you like to do today?</h2>
      <div className="flex flex-col space-y-4">
        <Link href="/courses" className="px-4 py-2 bg-primary text-white rounded">Courses</Link>
        <Link href="/events" className="px-4 py-2 bg-primary text-white rounded">Events</Link>
        <Link href="/projects" className="px-4 py-2 bg-primary text-white rounded">Join Projects</Link>
        <Link href="/jobs" className="px-4 py-2 bg-primary text-white rounded">Get Hired</Link>
      </div>
    </div>
  );
};

export default MainPage;
