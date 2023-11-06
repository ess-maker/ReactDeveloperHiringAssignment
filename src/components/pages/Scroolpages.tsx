import { useSelector } from "react-redux";
import { styles } from "../../style"
import Nextprevis from "./Nextprevis"

const Scroolpages = () => {
    const selectednum = useSelector((state:{selectedNum:number}) => state.selectedNum); 
    return (
    <footer className={`mt-10 w-full py-3 h-16 px-4 shadow-2xl rounded-lg  bg-scondary ${styles.flexBetween}`}>
        <p className="font-normal text-blacky text-lg ">{selectednum * 6} from <span>{ 6 * 10}</span></p>
        <Nextprevis />
    </footer>
    )
}

export default Scroolpages