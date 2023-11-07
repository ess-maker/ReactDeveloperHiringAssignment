import { Link } from "react-router-dom"
import Button_click from "../shered/Button_click"
import Icon from "../shered/Icon"
import Enrooledcourses from "./Enrooledcourses"

const Dashbord = () => {

  return (
    <div className="px-2 pt-4 pb-8">
<ul className="space-y-2 mb-4">
    <li>
    <a className="bg-blue bg-opacity-30 text-blue-500 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
    <span className="flex items-center space-x-2">
        <Icon iconsourse={"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"}
         icontext={"Enrolled Course"} />
    </span>
    <Link to='/'>
      <Button_click value={"Back Home"}  bgcolor={"bg-blue"} />
    </Link>
    </a>
    </li>
</ul>
<Enrooledcourses />
</div>
  )
}

export default Dashbord