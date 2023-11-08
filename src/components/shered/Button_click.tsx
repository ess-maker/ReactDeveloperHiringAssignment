const Button_click = ({value , bgcolor ,completed , w_full  , handelclick , toggol } :
   {value:string , bgcolor:string , w_full?:boolean | undefined , completed?:boolean | undefined ,toggol?:boolean | undefined , handelclick?:() => void }) => {

  
  return (
    <button
    onClick={handelclick }
    type="button"
    className={`${bgcolor} ${w_full ? 'w-full' : 'w-fit'}
    ${toggol && completed ? 'bg-green pointer-events-none bg-opacity-40' :''}
     ${completed ? '!text-black' : ''}inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white `}
>    {toggol && completed ? 'Great job you did here':
      toggol ? 'Enrolled' : value}
    </button>
  )
}

export default Button_click