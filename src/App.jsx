import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Jobspage from "./pages/Jobspage";
import JobDetail,{jobLoader} from "./pages/JobDetail";
import AddJob from "./pages/AddJob";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path='/jobs' element={<Jobspage/>} />
      <Route path='/jobs/:id' element={<JobDetail/>} loader={jobLoader} />
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
