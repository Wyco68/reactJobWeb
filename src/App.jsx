import { Route,RouterProvider, createBrowserRouter,createRoutesFromElements } from "react-router-dom";

import MainLayout from "./Pages/MainLayout";
import HomePage from "./Pages/HomePage";
import JobPage from "./Pages/JobPage";
import NotFoundPage from "./Pages/NotFoundPage";

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/jobs" element={<JobPage/>}/>
      <Route path= "*" element={<NotFoundPage/>}/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
