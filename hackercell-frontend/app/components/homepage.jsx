// app/components/HomePage.jsx
"use client"; // This line enables client-side features like hooks
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Adjusted import to next/navigation for Next.js 13+

const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const router = useRouter(); // Initialize useRouter for navigation

  const handleStart = () => {
    if (userName) {
      setIsStarted(true); // Start the interaction
    } else {
      alert('Please enter your name'); // Prompt to enter name if empty
    }
  };

  const handleSkipEmail = () => {
    // Navigate to the main page when skipping email
    router.push('/main'); // Adjust the path according to your routing structure
  };

  const handleEmailSubmit = () => {
    if (email) {
      console.log(`Verification link sent to: ${email}`);
      alert(`Please check your email (${email}) for a verification link.`);
      // You can add email verification logic here
    } else {
      alert('Please enter your email'); // Prompt if email is empty
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {!isStarted ? (
        <>
          <h1 className="text-4xl font-jetbrains">Welcome to Hackercell!</h1>
          <p className="mt-4">Hi, I'm Qasim. I'm here to guide you through this experience.</p>
          <p className="mt-4">Can you please tell us what to call you?</p>
          <input
            type="text"
            placeholder="What's your name?"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-4 p-2 border rounded"
          />
          <button onClick={handleStart} className="mt-4 px-4 py-2 bg-primary text-white rounded">
            Let's get started
          </button>
        </>
      ) : (
        <div>
          <h2 className="text-3xl">Hello, {userName}!</h2>
          <p className="mt-4">Before we move on to our journey, would you like to share your email so that your progress is not lost?</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 p-2 border rounded"
          />
          <button onClick={handleEmailSubmit} className="mt-4 px-4 py-2 bg-primary text-white rounded">
            Submit
          </button>
          <button onClick={handleSkipEmail} className="mt-4 px-4 py-2 bg-gray-300 text-black rounded">
            Skip
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
