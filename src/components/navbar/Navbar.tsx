import { FC } from "react"
import assest from "../../assets/imges"
import Input from "../shered/Input"
import Listitem from "./Listitem"
import "../../index.scss"
import { useDispatch } from "react-redux"
import { setshearchvalue } from "../../store/shearchvalue"
import { styles } from "../../style"


const Navbar:FC = () => {
  const dispatch = useDispatch();

  const handleInputChange = (value:string) => {
  dispatch(setshearchvalue(value));
  };
  
  return (
  <nav className={`w-full py-3 h-16 px-4 shadow-2xl rounded-lg bg-scondary ${styles.flexitems} gap-6`}>
  <Input onchange = {handleInputChange} type = "text"  img = {assest.shearch} placeholder = "Search..." />
  <Listitem />
  </nav>
  )
}

export default Navbar