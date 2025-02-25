import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const currentDate = new Date()

  return (
    <div className="md:mx-10 cursor-pointer">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Side  */}
        <div onClick={scrollToTop}>
          <div
            className="flex flex-row items-center mb-5"
            onClick={() => navigate("/")}
          >
            <img
              className="w-10 cursor-pointer mr-2"
              src={assets.icon_brand}
              alt="BrandLogo"
            />
            <h3 className="font-semibold text-xl cursor-pointer text-gray-700 pt-2">
              CareHub
            </h3>
          </div>
          <p className="w-full mb:w-2/3 text-gray-600 leading-6">
            At CareHub, we are dedicated to providing personalized health and
            wellness services that fit your needs. Our platform connects you
            with top-rated professionals, offering convenient and efficient
            care. Whether you&#39;re looking for a consultation or ongoing
            support, we ensure you receive expert guidance every step of the
            way.
          </p>
        </div>

        {/* Center  */}
        <div>
          <h2 className="text-xl font-medium mb-5">COMPANY</h2>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li onClick={() => navigate("/")}>Home</li>
            <li
              onClick={() => {
                navigate("/about")
              }}
            >
              About Us
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right side */}
        <div>
          <h2 className="text-xl font-medium mb-5">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1 (000)-000-0000</li>
            <li>carehub@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div>
        <hr className="text-slate-400" />
        <p className="py-5 text-sm font-light text-center">
          Copyright {currentDate.getFullYear()}@ CareHub - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
