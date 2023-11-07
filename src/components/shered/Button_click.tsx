const Button_click = ({value , bgcolor , w_full , checkedvalue , handelclick , toggol } :
   {value:string , bgcolor:string , w_full?:boolean , checkedvalue?:string ,
     toggol?:boolean , handelclick?:() => void}) => {

  
  return (
    <button
    onClick={handelclick }
    type="button"
    className={`${bgcolor} ${w_full ? 'w-full' : 'w-fit'} ${toggol ? 'pointer-events-none bg-opacity-40' : ''} inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white `}
>    {toggol ? checkedvalue : value}
    </button>
  )
}

export default Button_click