import {inputType} from "../../hooks/types"

const Input = ({className , type , img , placeholder ,name , onchange}:inputType):JSX.Element => {
  return (
    <label  className={`${className} relative `}  htmlFor="">
    <img className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5" src={img} alt="" />
    <input onChange={(e) => onchange(e.target.value)} className={`${className} focus:outline-2 focus:outline-Gray focus:duration-200 rounded-xl py-2 px-2 w-[14rem] text-Gray font-medium text-sm`} type={type} name={name} placeholder= {placeholder} />
    </label>  )
}

export default Input