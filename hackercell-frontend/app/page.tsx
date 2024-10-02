// app/page.jsx (or where your home page component is)
import HomePage from './components/homepage';
import Courses from './components/courses';
import Events from './components/events';
import JoinProjects from './components/Projects';
import GetHired from './components/jobs';


const MainPage = () => {
  return (
    <div>
      <HomePage />
      <Courses />
      <Events />
      <JoinProjects />
      <GetHired />
    </div>
  );
};

export default MainPage;
