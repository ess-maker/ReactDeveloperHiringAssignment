const Icon = ({iconsourse, icontext } : {iconsourse: string, icontext: string }) => {
  return (
    <div className="flex space-x-1 items-center">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconsourse} />
      </svg>
    </span>
    <p>{icontext}</p>
  </div>
  )
}

export default Icon