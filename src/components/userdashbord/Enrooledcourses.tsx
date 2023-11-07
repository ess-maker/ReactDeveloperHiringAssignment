import Button_click from "../shered/Button_click"
import Icon from "../shered/Icon"
import Progress_bar from "./Progress_bar"
import { courses_type } from "../../hooks/types"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { fetchProducts } from "../../store/fetchproduct"
import { RootState, AppDispatch, useAppDispatch } from "../../store/store"
import Loding from "../shered/Loding"

const Enrooledcourses = () => {
    const courses:courses_type[] = useSelector((state: RootState) => state.courses.data);
    const loadingState = useSelector((state: RootState) => state.courses.loading);
  
  const dispatch: AppDispatch = useAppDispatch();
  
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
  
    if (loadingState) return <Loding />;

    const handleClick = () => {
        console.log('hamza');
    }
  return 
        {courses.map((course) =>
        course.enrollmentStatus ?  
            (
    <section
    key={course.id}
    className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl cursor-pointer shadow-lg transform hover:scale-105 transition duration-500">
    <div className="relative">
      <img className="w-full rounded-xl"
        src={course.thumbnail} alt="Colors" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer capitalize">{course.courseName}</h1>
    <div className="my-4">
      <Icon 
      iconsourse={"M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM10 5H19V14H10V16H14.3654L17.1889 22H19.3993L16.5758 16H20C20.5523 16 21 15.5523 21 15V4C21 3.44772 20.5523 3 20 3H10V5Z"} 
      icontext={course.instructor} />
      <Icon 
      iconsourse={"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}
        icontext={course.duration as string} />
      <Icon 
      iconsourse={"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}
        icontext={course.enrollmentStatus as string} />
      <Icon 
      iconsourse={"M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"}
        icontext={course.schedule as string} />
      <Progress_bar persent={'50%'} />
    </div>
    <Button_click
      w_full={true}
      value={'Complated'}
      bgcolor={"bg-blue"}
      checkedvalue = {'Great !'} 
      handelclick = {handleClick}/>
  </section>
        ) : false
  )
} }

export default Enrooledcourses