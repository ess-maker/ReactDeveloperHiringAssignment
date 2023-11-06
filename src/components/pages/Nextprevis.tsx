import { Link } from "react-router-dom";
import assest from "../../assets/imges"
import { dicrment, incrment, setNumber } from "../../store/selectednumber";
import { styles } from "../../style"
import { useDispatch, useSelector } from "react-redux";

const Nextprevis = () => {
    const selectednum:(number | string) = useSelector((state:{selectedNum:number}) => state.selectedNum); 
    const arrayFrom1To20 = Array.from({ length: 10 }, (_, index) => index + 1);
    const dispatch = useDispatch();    
    return (
    <div className={`${styles.flexitems}  gap-2 mx-4`}>
    <img onClick={() => dispatch(dicrment(selectednum))} className="bg-white cursor-pointertext-Gray text-xl px-2.5 py-2.5 rounded-md shadow-2xl cursor-pointer duration-200 hover:bg-blue" src={assest.arrow_pages} alt="arrow_pages" />
    <ul className={`${styles.flexitems} gap-2`}>
    {arrayFrom1To20.map((number) => (
    <Link onClick={() => dispatch(setNumber(number))} key={number} to={`${number}`}>
    <li className={`bg-white duration-200 after:absolute relative after:top-0 after:left-0 after:w-0 after:duration-200  after:h-full ${number === selectednum ? "after:w-full text-white" : "hover:after:w-full hover:text-white" }  duration-200 after:bg-blue after:rounded-md hover:text-white text-Gray text-xl px-3 py-1 rounded-md shadow-2xl cursor-pointer after:-z-10 z-10 w-10 h-9 ${styles.flexCenter}`}>
    {number}
    </li>
    </Link>
    ))}
    </ul>
    <img onClick={() => dispatch(incrment(selectednum))}  className="bg-white cursor-pointer text-Gray text-xl px-2.5 py-2.5 rounded-md shadow-2xl duration-200 hover:bg-blue rotate-180" src={assest.arrow_pages} alt="arrow_pages" />
    </div>
    )
}

export default Nextprevis