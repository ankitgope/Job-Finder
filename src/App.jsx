import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Components/Pages/Home";
import MainLayout from "./Components/Layouts/MainLayout";
import Job from "./Components/Pages/Job"
import AddJob from "./Components/Pages/AddJob";
import JobPage from "./Components/Pages/JobPage";
import NotFound from "./Components/Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/job" element={<Job/>}/>
      {/* <Route path="/add-job" element={<AddJob/>}/> */}
      <Route path="/job/:id" element={<JobPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router}/> 
}

export default App;
