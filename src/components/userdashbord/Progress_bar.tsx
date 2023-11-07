const Progress_bar = ({persent}:{persent:string}) => {
  return (
  <div className="w-full bg-gray-200 my-3 rounded-full dark:bg-gray-700">
  <div className={`bg-blue text-xs font-medium text-blue-100 text-center py-1 text-white leading-none rounded-full`}
  style={{width:persent}}> {persent}</div>
</div>

  )
}

export default Progress_bar