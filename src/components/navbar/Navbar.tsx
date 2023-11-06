import { FC } from "react"
import assest from "../../assets/imges"
import Input from "../shered/Input"
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
  <Input onchange = {() => handleInputChange} type = "text"  img = {assest.shearch} placeholder = "Search..." />
  <Userinfo />
  </nav>
  )
}

export default Navbar