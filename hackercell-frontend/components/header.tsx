// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-primary text-white p-4">
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-2xl font-jetbrains">Hackercell.io</h1>
        <div>
          <Link href="/courses" className="mx-2">Courses</Link>
          <Link href="/events" className="mx-2">Events</Link>
          <Link href="/projects" className="mx-2">Join Projects</Link>
          <Link href="/jobs" className="mx-2">Get Hired</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
