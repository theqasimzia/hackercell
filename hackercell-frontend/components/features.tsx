const Features = () => {
    return (
      <section className="w-full py-10 bg-white">
        <div className="container mx-auto grid grid-cols-2 gap-8">
          <div className="p-4 border rounded-md shadow-sm">
            <h3 className="font-bold text-xl">Courses</h3>
            <p>Learn new skills with guided courses powered by our AI tutor.</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <h3 className="font-bold text-xl">Events</h3>
            <p>Join hackathons and seminars to showcase your skills and network.</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <h3 className="font-bold text-xl">Projects</h3>
            <p>Collaborate with other developers on amazing projects.</p>
          </div>
          <div className="p-4 border rounded-md shadow-sm">
            <h3 className="font-bold text-xl">Get Hired</h3>
            <p>Apply for jobs and internships through our platform.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  