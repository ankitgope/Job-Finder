
pagination , hamburger menu (Nav Bar), search bar
organise the line shiift alt f

**PROPS**
**_CAN BE CALLED PROPERTES IN EASY TERMS_**

we can pass props 3 types
After we pass the data in App.jsx like this
<HeroSection 
        title="title passed by props destructure" 
        subTitle="subtitle passed by props"/>

</div>

    a) -> Normal way

            const HeroSection = (props) => {
            return (
            <section>
                <div>
                    <h1>props.title</h1>
                    <p>props.subtitle</p>
                </div>
            </section>

    b) -> By destructuring

          const HeroSection = ({title,subTitle}) => {
            return (
            <section>
                <div>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </section>

    c) -> by default method (for this one we dont have to pass any data in App.jsx file in hero section because this will override the default data passing as a title and subtile )

            const HeroSection = ({title="title passed by props default"
            subTitle="subtitle passed by default"}) => {
            return (
            <section>
                <div>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </section>

**Card.jsx**
using Wrapper component here 
 A wrapper component is a common pattern used to encapsulate reusable functionality or layout that you want to apply to multiple child components

 import React from 'react'
//making the colur dyanamic so using this bg='bg-gray-100 
const Card = ({children, bg='bg-yellow-100'}) => {
  return (
    // making the below code dyaamic previously it was like this "div className='bg-yellow-400 rounded-[12px] p-7"
    <div className={`${bg} rounded-[12px] p-7 shadow-2xl`}>
      {children}
    </div>
  )
}
**jobListing.jsx**
Before cooking this card  we need to have a dummy json file in src 
using map in here --> in map we are using a map in map there is a card div in which job details are there

import data from "../jobs.json";
const JobListing = () => {
  const { jobs } = data; // here destructuring the jobs and putting 

**Now Adding the React Router**
1st we need to install the react router -- npm i react-router-dom
then we have to import Route, RouterProvider , createBrowserreact, createRouteForElement

then we have to create a variable 
const router= createBrowseRouter(
  createRouteForElement(
    <Route path="/" element={<Home/>}/>
  )
)
and in 
function App(){
<RouterProvider router={router} /> // {router} --> variable name 
}

The Above is the process of creating a route 
Now we are adding a layout  for the fixed component like nave bar and footer which will be constant for all the pages
Now we are creating a folder Name Layout where the layout will be present 

Then,
in mainLayout whatever content comes like footer , header it comes throught ***Outlet**
so we need to  import Outlet first 

Now how to use layout

import mainLayout
we will create a parent Route and wrap the other route
const router= createBrowseRouter(
  createRouteForElement(
    <Route path="/" element={<MainLayout/>}>
      <Route path="/" element={<Home/>}/>
      put all the elements in here 
    </Route>
  )
)

*Next steps*

**we made changes in Joblisting**
const JobListing = ({isHome=false}) => {
  const { jobs } = data;
  const jobsListings = isHome? jobs.slice(0,3): jobs

  we are reusing the JobListing part so for theat we need some changes for both the different pages  so here is the changes made 

  <h2 className="text-center text-3xl font-bold text-indigo-700 mb-3">
          {isHome?'Browse Jobs' :'Recent Jobs'}
        </h2>
making changes in here for the abve reusing case 

*Next steps*
*DATA fETCHING USING USEFFECT*

**using jason.Server** 
we want to fetch the data 
So basically we are mocking a backed Types 
we need to install it first from site 
Then adding  below in packge, in packge.json  
"server": "jason-server --watch srec/jobs.json --port 8000"

**Now making changes in JobListing as we are now fetching the data as an Api**
*for that we need*
  -- we gona make a request inside a  useEffect --  this will help in canges after getting the data 
  -- when we get the APi we gona a put it in a state 

Line 9 --> we are adding state for jobs fetch data  with an empty array []  as when we get the data from API it will fill the state  array with the  response 

line 10--> adding a state for Loading and set it in true as when the jobs will get the data it will load every time and when the data will be fetched then the loder will stop.

line 11 --> using useEffect and in it we need to use async in it we need to make a new function for it as we cannot make the inital function to use async
                      &
and putting in a try catch  to handel error 
using a *finally* for loading setting it in false as the loading will stop

Line 36-->  we are doing conditional rendering
 {loading ? (
            <h2>lOADING..</h2>
          ) : (
            <>
              {jobs.map((job) => (
                // passing the key for unique value and passing the job as prop
                <JobListingCard key={job.id} job={job} />
              ))}

*now we want in our home page we have only 3 job card for that*
we do is 
**we will add spinner later**
copied spinner file from react sinner page 2nd link from git hub pages

**Adding Proxy**
A proxy is an intermediary server that separates end users from the websites they browse. 
Suppose sending letter in the hands of a child to your girfriend . (child as a proxy)

so we make changes in *vit.config.js*
in *server*
proxy:{
      '/api':{
        target : 'http://localhost:8000',
        changeOrigin: true,
        rewrite:(path)=> path.replace(/^\/api/,''),
      },
    },

*WE CAN USE **REACT SUSPENCE** WHICH ALLOWS REACT RENDER WHILE FETCHING --> WHAT ARE DOINF HERE IS FETCH ON RENDER BECAUSE WHEN WE RENDER IT HAS A SIDE EFFECT OF FETCHING THE DATA (as we used useEffect) BUT SUSPENSE WILL ALLOW YOU  RENDER WHILE FETCHING AND YOU BASICALLY BE PROVIDING A FALLBACK UI SUCH AS A SPINNER OR A LOADING TEXT WHAEVER IS PASSED AS A PROP OR AN ATTRIBUTE

**Now we are building the *JobPage* to get the jobs data**
*this is the 1st type*
import React from 'react'
import { useState,useEffect, } from 'react'
import Spinner from '../Spinner'
import { useParams } from 'react-router-dom' 

const JobPage = () => {
const [job,setJob]= useState(null)
const [loading, setLoading]= useState(true)
const {id} = useParams();
useEffect(()=>{
  const fetchData= async()=>{
    try {
      const res = await fetch(`/api/jobs/${id}`)
      const data = await res.json()
      setJob(data)
      
    } catch (error) {
      console.log('no data found')
    }
    finally{
      setLoading(false)
    }
  }
  fetchData();
},[])

  return loading ? <Spinner/>: <h1>
    {job.title}
  </h1>
}

export default JobPage

*using loader a feature of react router dom*

we are doing is **using useParams to get the id** by destructuring 
  const { id } = useParams();

Now 
we are making a function name jobLoader **below the return and above the export** in which we will have the API call and retrun it  
After that 
we are wraping up both the jobPage as a default and jobloader in export as we want to export the jobpage as default

**Now in App.jsx page**
*importing jobLoader*
import JobPage,{jobLoader} from "./Components/Pages/JobPage";

now passing  the loader in *Route*
<Route path="/job/:id" element={<JobPage/>} loader={jobLoader}/>

*Next Step*
now to acces the loader fromm the inner component(JobPage.js) we use 
**useLoaderData hook** from react-router-dom
and to use it we need to set the useLoaderData like this
 const job = useLoaderData(); 
    **the data is comming from the loader in route which is connecting to useLoaderData to  get the data**
***************************************************************************

**IN ADDITION WE CAN USE THE JOB LOADER IN OTHER COMPONENT IN APP.JSX TO GET THE DATA USING ID**

***************************************************************************
**Handeling Form**
in here we are using core form to handel forms using useState
1st creating useState
2nd add valure in the input* and set it in {type} --> now when we add the pice of state in input we have add a onchange because when we change it we have to update and cal setType (accorfing to the project)  
doing for all the field setting the value ={in here we are seting the useState value like --> contactPhone}
in onChange{
  setting the setContactPhone (it store the changes occure in value--> (e)=>{e.target.value} )
}
*Now we want to submit the form*
// Making function for onSubmit
const submitForm =(e)=>{
  //*constructuing the form field that we can submit to form API*
  //*creating a object below ans since we re writing titlr:title we are writing only titile and below same(seting the value of useState)*
  const newJob={
      title,
      type,
      location,
      description,
      salary,
      company:{
        name: companyName,
        description:companyDescription,
        contactEmail,
        contactPhone
      }
  
*We are making the newJob object to organize and structure all the details of a new job listing in one place. This makes it easier to handle, process, and send the job information to a backend server or an API for storage or further processing.*

 console.log(newJob); // this will print the data above
    }

    <form onSubmit={submitForm}>

**Making post request to the backned**
*Line5* 
passing a prop here
const AddJob = ({addJobSubmit}) => & replacing *line 32* console.log(newJob) to addJobSubmit(newJob)

*Now after the above i want is i want to redirect to job page once we submit for that we need a hook name **useNavigate** from react router DOM*

How it works we are making a variable const navigation = useNavigation 
and then in const submitForm(e)=>{
  we are returning the navigation
  *line 35* 
  return navigation 
}

*Now in App.jsx8*
adding the prop in addJobSubmit={addJob} and passsing a function addJob and describing above
 <Route path="/add-job" element={<AddJob/>} addJobSubmit={addJob}/>

**NOTE**
we are moving the whole

const addJob= (newJob)=>{
  console.log(newJob)
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/job" element={<Job/>}/>
      <Route path="/add-job" element={<AddJob/>} addJobSubmit={addJob}/>
      <Route path="/job/:id" element={<JobPage/>} loader={jobLoader}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)
Part in function App()

above return <RouterProvider router={router}/> because we want the actual request functon(POST, DELETE, PUT) be in main function that the reasone we are shifting the whole part in function App()
*Line7*
const addJob= (newJob)=>{
  adding jobs here *A POST  , DELETE & PUT REQUEST WE ARE MAKING HERE*
  some parameters pass in addJob page check once 
  same for delete --> ome parameters pass in JobPage page check once
  and same goes with edit job
  
  *this add delete and edit the new job in the Job page*

}
This above operation we can use Context API, REDUX  also as this is a small application we are doing like this 

*Adding Toastify for toast message* 

**Now we are adding the EditJob Page**
in here we will be using the JobLoader for fetching the data 
