import { FC } from "react"
import "../../index.scss"
import { useDispatch } from "react-redux"
import { setshearchvalue } from "../../store/shearchvalue"
import { styles } from "../../style"
import Userinfo from "./Userinfo"


const Navbar:FC = () => {
  const dispatch = useDispatch();

  const handleInputChange = (value:string) => {
  dispatch(setshearchvalue(value));
  };
  
  return (
  <nav className={`w-full py-3 h-16 px-4 shadow-2xl rounded-lg bg-scondary ${styles.flexitems} justify-between gap-6`}>
    <input className=" focus:outline-2 focus:outline-Gray focus:duration-200 rounded-xl py-2 px-2 w-[14rem] text-Gray font-medium text-sm" type="text" placeholder="Search..." onChange={(e) => handleInputChange(e.target.value)}/>
  <Userinfo />
  </nav>
  )
}

export default Navbar