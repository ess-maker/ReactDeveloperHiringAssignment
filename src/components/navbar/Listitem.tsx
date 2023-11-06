import { FC, useState } from "react"
import assest from "../../assets/imges"
import { listnav } from "../../content"
import {listNavtypes} from "../../hooks/types"
import { styles } from "../../style"

const Listitem:FC = () => {
    const [toggol , settoggol] = useState<boolean>(false)

    return (
    <ul className={`${styles.flexitems} gap-4`}>
    {listnav.map((list:listNavtypes) =>  (
        <li onClick={() => settoggol(prev => (!prev))} className={`${styles.flexitems} gap-2`} key={list.id}>
        <a className="text-Gray font-medium">{list.titel}</a>
        <img src={assest.arrwo} alt="arrwo" className={`rotate-90 duration-200 ease-out ${toggol ? "rotate-[-90deg]" : ""}`} />
        </li>
    ))}
    </ul>
    )
}

export default Listitem