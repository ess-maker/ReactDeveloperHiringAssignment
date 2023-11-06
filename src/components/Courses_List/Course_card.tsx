import Icon from "../shered/Icon"

const Course_card = ({key , courseName , instructor  , enrollmentStatus }:{key:number , courseName:string, instructor:string, enrollmentStatus:string}) => {
  return (
    <section
    key={key}
        className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl cursor-pointer shadow-lg transform hover:scale-105 transition duration-500">
      <div className="relative">
        <img className="w-full rounded-xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Colors" />
        <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</p>
      </div>
      <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{courseName}</h1>
      <div className="my-4">
        <Icon iconsourse={"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" } icontext={instructor} />
        <Icon iconsourse={"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"} icontext={enrollmentStatus} />
        <button className="mt-4 text-xl w-full text-white bg-blue py-2 rounded-xl shadow-lg">enroll</button>
      </div>
    </section>
  )
}

export default Course_card