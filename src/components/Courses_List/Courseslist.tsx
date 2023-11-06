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

  
  const dispatch: AppDispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  
  console.log(courses);
  
  if (loadingState) return <Loding />;
  return (
    <section className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 py-5" >
      {courses.map((course: courses_type, index: number) => (
        <Course_card 
        key={index}
        courseName={course.courseName}
        instructor={course.instructor}
        enrollmentStatus={course.enrollmentStatus}  />
        ))}
        </section>
  );
}

export default Courseslist;