import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer2() {
  const Logo = "/src/assets/images/logo_bgputih.png";
  return (
    <div className=" mx-auto">
      {/* footer a */}
      <div className="col-12 p-20 md:mx-[350px]">
        <div className="col-3">
          <h1 className="font-bold text-xl pb-2 text-white">
            <span className="block py-1 md:text-2xl">Subscribe Newsletter</span>
            <span className="block md:text-2xl">For the Latest Update</span>
          </h1>
        </div>
        <div className="col-6 table">
          <form className="text-center table-cell align-middle">
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-gray-400 px-4 py-2 rounded-full flex-1 leading-10"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-white px-20 py-2 rounded-full ml-[-45px] font-extrabold hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-3 table text-right">
          <div className="table-cell align-middle">
            <button className="inline-block border border-white bg-blue-500 mx-2 py-2.5 px-3 rounded-full">
              <FontAwesomeIcon className="text-xl " icon={faFacebook} />
            </button>
            <button className="inline-block border border-white bg-blue-500 mx-2 py-2.5 px-3 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faTwitter} />
            </button>
            <button className="inline-block border border-white bg-blue-500 mx-2 py-2.5 px-3 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faInstagram} />
            </button>
            <button className="inline-block border border-white bg-blue-500 mx-2 py-2.5 px-3 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faYoutube} />
            </button>
          </div>
        </div>
      </div>
      <div className="border border-gray-300"></div>
      {/* footer b */}
      <div className="col-12 p-20 md:mx-[350px]">
        <div className="col-3">
          <div className="grid">
            <img src={Logo} alt="" />
            <h1 className="font-bold text-zinc-200 pt-5 font-sans">
              Felis consquat magnis fames sagittis ultrices plasodales porttitor
            </h1>
            <ul>
              <li className="text-white pt-5">
                <FontAwesomeIcon className="mr-5" icon={faPhoneVolume} />
                +123 888 9999
              </li>
              <li className="text-white pt-5">
                <FontAwesomeIcon className="mr-5" icon={faEnvelope} />
                info@apexa.com
              </li>
              <li className="text-white pt-5 flex flex-col">
                <div className="flex items-center">
                  <FontAwesomeIcon className="mr-5" icon={faLocationDot} />
                  <span>Sydney Harbour Bridge Circular City</span>
                </div>
                <span className="ml-10 whitespace-pre-line">
                  of Sydney, Australia.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3 footer-link-list mx-auto">
          <h4 className="font-bold text-zinc-200 text-2xl pb-4 font-sans">
            Information
          </h4>
          <ul className="list-wrap">
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              <a href="#">Information</a>
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              About Us
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Meet our team
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Case stories
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Latest news
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Contact us
            </li>
          </ul>
        </div>
        <div className="col-3 mx-auto">
          <h4 className="font-bold text-zinc-200 text-2xl pb-4 font-sans">
            Top Links
          </h4>
          <ul>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              How its Work
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Partners
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Testimonials
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Case studies
            </li>
            <li className="text-white pt-3 hover:text-yellow-500 cursor-pointer">
              Pricing
            </li>
          </ul>
        </div>
        <div className="col-3 mx-auto">
          <h4 className="font-bold text-zinc-200 text-2xl pb-4 font-sans">
            Instagram Posts
          </h4>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
          <form className="text-center">
            <div className="grid grid-flow-col auto-cols-max">
              <div>
                {" "}
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-gray-400 px-4 py-2 rounded-l-lg w-max"
                />
              </div>
              <div>
                {" "}
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-r-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div> */
}

{
  /* <li className="text-white pt-5">
                <FontAwesomeIcon className="mr-5" icon={faLocationDot} />
                <span className="ml-5 whitespace-pre-line">Sydney Harbour Bridge Circular City</span>
                <span className="ml-10 whitespace-pre-line"> of Sydney, Australia.</span>
              </li> */
}
