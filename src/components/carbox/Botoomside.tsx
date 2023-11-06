import assest from "../../assets/imges"
import { styles } from "../../style"
import Button_click from "../shered/Button_click"
styles
const Botoomside = ({price} : {price:number | string}) => {
    return (
    <div className={styles.flexBetween}>
    <p className="text-3xl font-normal">${price}<span className="text-lg ml-1 font-normal">/month</span></p>
    <div className={`${styles.flexitems} gap-4`}>
    <img src={assest.hart} className="rounded-xl p-2 cursor-pointer bg-light_blue" alt="hart" />
    <Button_click value="Rent now" bgcolor="bg-blue" />
    </div>
    </div>
    )
}

export default Botoomside