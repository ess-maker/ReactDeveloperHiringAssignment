import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import { courses_type } from "../../../hooks/types";
import { fetchProducts } from "../../../store/fetchproduct";
import Button_click from "../../shered/Button_click";
import { listOfdeatils } from "../../../content";
import useEditjson from "../../../hooks/useEditjson";

const Coursepage = () => {
  const [selected  , setselected] =useState('Description');
    const { pageNumber } = useParams();

    const courses = useSelector((state: RootState) => state.courses.data
    .filter((item: courses_type) => item.id.toString() === pageNumber ));

    console.log(courses);

    const dispatch: AppDispatch = useDispatch();
      
    
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
    
  return (
    <section>
    {courses.map((item:courses_type) => (
      <main className="fixed inset-0 bg-black bg-opacity-80" x-data="{activeTab: 1}" key={item.id}>
  <div className="flex justify-center items-center h-screen w-screen">
    <dialog
      open
      className="rounded-2xl overflow-hidden p-0 w-auto max-w-full md:mx-auto md:w-2/3 shadow-lg m-8"
    >
      <div className="flex flex-col lg:flex-row">
        <div
          className="relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none"
        >
          <img
            src={item.thumbnail}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span
            className="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"
          ></span>
          <div
            className="relative flex justify-end lg:justify-start flex-wrap text-white text-xl font-bold m-4"
          >
            <div className="bg-green-500 px-4 py-1 rounded">Special Offer</div>
          </div>
        </div>
        <div className="w-full">
          <div className="p-8">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold mb-8">
              {item.courseName}
              </h3>
              <a href="/" className="text-gray-400 hover:text-gray-800 p-1">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="relative flex gap-2">
              <header className="text-sm">
                {listOfdeatils.map((item:{like:string} , index:number) => (
                <button
                onClick={() => setselected(item.like)}
                key={index}
                  className={`${selected === item.like ? 'bg-blue text-white' : ''} border mb-2 block  px-3 py-1 text-sm focus:outline-none rounded-tl-md`}
                >
                  {item.like}
                </button>
                ))}
              </header>
              <div
                className="border p-2 h-64 w-full overflow-y-auto rounded-b-xl rounded-tr-xl"
                id="tabs-contents"
              >
                  <p className={`${selected === 'Description' ? 'block' : 'hidden'}
                   text-xs text-gray-500 line-clamp-3 `}>
                   {item.description}
                  </p>
                  <p className={`${selected === 'instructor'  ? 'block' : 'hidden'}
                   text-xs text-gray-500 line-clamp-3 `}>
                   {item.instructor}
                  </p>
                  <p className={`${selected ==='schedule'  ? 'block' : 'hidden'}
                   text-xs text-gray-500 line-clamp-3 `}>
                   {item.schedule}
                  </p>
                  <p className={`${selected === 'enrollmentStatus' ? 'block' : 'hidden'}
                   text-xs text-gray-500 line-clamp-3 `}>
                   {item.enrollmentStatus}
                  </p>
                  <p className={`${selected === 'Course duration' ? 'block' : 'hidden'}
                   text-xs text-gray-500 line-clamp-3 `}>
                   {item.duration}
                  </p>
                  <p className={`${selected === 'Location' ? 'block' : 'hidden'}
                   text-xs text-gray-500 line-clamp-3 `}>
                   {item.location}
                  </p>
                  <p className={`${selected === 'Schedule' ? 'block' : 'hidden'}
                   text-xs text-gray-500 line-clamp-3 `}>
                   {item.schedule}
                  </p>
                  <ul 
                  className={`${selected === 'Pre-requisites' ? 'block' : 'hidden'}`} >
                    {item.prerequisites.map((requisite:string , index:number) => (
                      <ol key={index} className="text-xs text-gray-500 line-clamp-3 " > {requisite}</ol>
                    ))}
                  </ul>
              </div>
            </div>
            <div
              className="flex justify-end items-center text-sm font-bold mt-8 gap-4"
            >
              <a href="/dashbord">
              <Button_click
              value={"enroll"} 
              toggol= {item.Enrolled}
              handelclick = {() =>
                 {useEditjson(item.id)}}
                bgcolor={"bg-blue"} />
                </a>
              <Link to='/'>
              <Button_click value={"Go To Home"}  bgcolor={"bg-blue"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </div>
      </main>
    ))}

    </section>
  )
}

export default Coursepage
