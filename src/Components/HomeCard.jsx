import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const HomeCard = () => {
  const navigate = useNavigate();
  return (
    <section className="py-4 bg-white overflow-auto ">
      <div className="container-xl lg: container m-auto ">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="font-bold text-2xl m-1"> for developer</h2>
            <p className="mx-1 mb-4">
              List your job to find the perfect developer
            </p>
            <Link to='/job' className="bg-black text-white mx-1 px-3 py-2 rounded-[5px]">
              Browse Jobs
            </Link>
          </Card>
          <div className="rounded-[12px] bg-slate-400 shadow-2xl p-7">
            <h2 className="font-bold text-2xl m-1"> For Employer</h2>
            <p className="mx-1 mb-4">
              List your job to find the perfect developer
            </p>
            <Link to='/add-job' className="bg-black text-white mx-1 px-3 py-2 rounded-[5px]">
              Add Job
            </Link>
          </div>
          {/* adding coustome bg after we make the card dyanamic */}
          <Card bg="bg-indigo-400">
            <h2 className="font-bold text-2xl m-1"> EXPERIMENT</h2>
            <p className="mx-1">List your job to find the perfect developer</p>
            <button
              className="bg-black text-white mx-1 my-2 px-3 py-[6px] rounded-[5px]"
              onClick={() => {
                navigate("/add-job");
              }}
            >
              {/* using useNavigation hook instead of an anchor tag  (different way ) */}
              Add jobs
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
