import { doctors } from "../assets/assets"

const TopDoctors = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 ">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm font-light">
        Simply browse through the Top Trusted Doctors
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] duration-500 transition-all"
            key={index}
          >
            <img className="bg-blue-50 " src={item.image} alt="doctors_image" />
            <p className="p-4">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopDoctors
