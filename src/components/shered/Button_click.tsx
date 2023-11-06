const Button_click = ({value , bgcolor} : {value:string , bgcolor:string}) => {
  return (
    <button className={`${bgcolor} text-white py-2 px-4 rounded-[1rem] font-normal  text-xl`}>{value}</button>
  )
}

export default Button_click