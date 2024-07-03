import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./Components/Pages/Home";
import MainLayout from "./Components/Layouts/MainLayout";
import Job from "./Components/Pages/Job";
import AddJob from "./Components/Pages/AddJob";
import JobPage, { jobLoader } from "./Components/Pages/JobPage";
import EditJobPage from "./Components/Pages/EditJobPage";
import NotFound from "./Components/Pages/NotFound";

function App() {
  const addJob = async (newJob) => {
    // add jobs
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  // Delete Jobs
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  //Edit JObs
  const updateJob= async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/job" element={<Job />} />
        <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
        <Route
          path="/job/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit ={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
