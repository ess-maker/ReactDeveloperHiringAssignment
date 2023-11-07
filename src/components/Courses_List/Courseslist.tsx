import { FC, useEffect } from "react";
import { fetchProducts } from "../../store/fetchproduct";
import { useSelector } from 'react-redux';
import { courses_type } from "../../hooks/types";
import { AppDispatch, RootState, useAppDispatch } from "../../store/store";
import Loding from "../shered/Loding";
import Course_card from "./Course_card";

const Courseslist: FC = () => {
  const courses = useSelector((state: RootState) => state.courses.data);
  const loadingState = useSelector((state: RootState) => state.courses.loading);
  const searchValue =  useSelector((state: RootState) => state.shearchvalue);

  console.log(searchValue);
  
  
  const dispatch: AppDispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  console.log(courses);
  
  if (loadingState) return <Loding />;
  return (
    <section className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 py-5" >
      {courses.filter((course: courses_type) =>  course.instructor.toLowerCase().startsWith(searchValue)
       ).map((course: courses_type) => (
        <Course_card 
          course={course} />
        ))}
        </section>
  );
}

export default Courseslist;