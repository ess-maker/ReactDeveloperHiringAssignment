import { detiles } from "../../content"
import {detilesTyes} from "../../hooks/types"

const Detiles = () => {
  return (
    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 pb-6 mb-6 border-b-2 border-solid border-Gray_two">
    {detiles.map((detile:detilesTyes) => (
    <div key={detile.id} className="flex items-center gap-2">
    <img src={detile.icon} alt="user" />
    <p className="text-blacky text-lg font-normal">{detile.titel}</p>
    </div>
    ))}
    </div>
  )
}

export default Detiles