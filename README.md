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






