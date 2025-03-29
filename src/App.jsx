import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJob from "./components/ViewAllJob";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCards />
      <JobListings />
      <ViewAllJob />
    </>
  );
};

export default App;
