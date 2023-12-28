import Footer2 from "../components/footer2";
import Header from "../components/header";
import CarouselSlider from "../components/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faLightbulb,
  faBullseye,
  faRankingStar,
  faArrowRight,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const bgHome = "/src/assets/images/bg1.jpg";
  const pict1 = "/src/assets/images/foto-1.jpg";
  const pict2 = "/src/assets/images/foto-2.jpg";
  const blog1 = "/src/assets/images/blog-1.jpg";
  const blog2 = "/src/assets/images/blog-2.jpg";
  const blog3 = "/src/assets/images/blog-3.jpg";
  const profile1 = "/src/assets/images/profile-1.png";
  return (
    <div>
      {/* header */}
      <div className="items-center py-6 p-4 bg-white fixed w-full z-50 shadow-lg">
        <Header />
      </div>
      {/* main area */}
      <div>
        <img className="w-full pt-20" src={bgHome} alt="" />
        <div className="absolute top-1/2 left-1 flex-wrap md:w-1/2">
          <div className="items-center text-left flex-col mx-auto justify-start w-1/2">
            <div className="inline-block border border-white mx-auto px-4 py-2 rounded-xl">
              <span className="font-light text-xl pb-2 text-white">
                WE ARE EXPERT IN THIS FIELD
              </span>
            </div>
            <h1 className="font-sans font-bold text-4xl text-white">
              <span className="block py-1">Transforming Dreams into</span>
              <span className="block">Financial Reality</span>
            </h1>
            <p className="font-sans font-light text-md text-white pb-5">
              <span className="block py-1">
                Apexa helps you to convert your data into a strategic asset and{" "}
              </span>
              <span className="block">
                get business insights Apexa helps you to convert.
              </span>
            </p>
            <button className="bg-yellow-500 rounded-xl text-white px-6 py-2 w-50 hover:bg-blue-700">
              <span className="font-semibold">Free Consulting</span>
            </button>
          </div>
        </div>
      </div>
      {/* main area 2 */}
      <div className="grid grid-cols-4">
        <div className="flex items-center justify-center p-20 border border-gray-200">
          <div className="mr-3 bg-cyan-100 p-5">
            <FontAwesomeIcon
              icon={faArrowUpRightDots}
              className="object-cover transition-transform duration-300 transform hover:scale-x-[-1]"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="text-left flex space-x-8">
            <h1 className="font-sans  text-black">
              <button>
                <span className="block py-1 font-bold text-2xl text-blue-900 hover:text-yellow-500">
                  Finance Planning
                </span>
              </button>
              <span className="block text-xl text-blue-900 font-normal">
                Apexa helps youcona doing tempor incididunt.
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center p-20 border border-gray-200">
          <div className="mr-3 bg-cyan-100 p-5">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="object-cover transition-transform duration-300 transform hover:scale-x-[-1]"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="text-left flex space-x-8">
            <h1 className="font-sans  text-black">
              <button>
                <span className="block py-1 font-bold text-2xl text-blue-900 hover:text-yellow-500">
                  Strategic Idea
                </span>
              </button>
              <span className="block text-xl text-blue-900 font-normal">
                Apexa helps youcona doing tempor incididunt.
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center p-20 border border-gray-200">
          <div className="mr-3 bg-cyan-100 p-5">
            <FontAwesomeIcon
              icon={faBullseye}
              className="object-cover transition-transform duration-300 transform hover:scale-x-[-1]"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="text-left flex space-x-8">
            <h1 className="font-sans  text-black">
              <button>
                <span className="block py-1 font-bold text-2xl text-blue-900 hover:text-yellow-500">
                  Business Goal
                </span>
              </button>
              <span className="block text-xl text-blue-900 font-normal">
                Apexa helps youcona doing tempor incididunt.
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center p-20 border border-gray-200">
          <div className="mr-3 bg-cyan-100 p-5">
            <FontAwesomeIcon
              icon={faRankingStar}
              className="object-cover transition-transform duration-300 transform hover:scale-x-[-1]"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="text-left flex space-x-8">
            <h1 className="font-sans  text-black">
              <button>
                <span className="block py-1 font-bold text-2xl text-blue-900 hover:text-yellow-500">
                  Marketing Growth
                </span>
              </button>
              <span className="block text-xl text-blue-900 font-normal">
                Apexa helps youcona doing tempor incididunt.
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* main area 3 */}
      <div className="col-12 p-20 md:mx-[350px]">
        <div className="col-6 img-wrap">
          <img className="rounded-lg" src={pict1} alt="" />
        </div>
        <div className="col-6 relative">
          <span className="text-base font-semibold text-yellow-500">
            ABOUT OUR COMPANY
          </span>
          <div className="py-5 text-4xl font-bold text-blue-900">
            <span className="type-test"></span>
          </div>
          <p className="text-blue-900 font-normal pb-6">
            Mauris ut enim sit amet lacus ornare ullamcorper. Praesent placerat
            neque eu purus rhoncus, vel tincidunt odio ultrices. Sed theya are
            feugiat elis Curabitur posuere tristique.
          </p>

          <div className="col-12">
            <div className="col-8">
              <ul>
                <li className="table">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full bg-yellow-500 text-white p-2"
                  />
                  <span className="table-cell align-middle font-medium text-blue-900 text-lg pl-3">
                    Challenge Business Growth
                  </span>
                </li>
                <li className="table">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full bg-yellow-500 text-white p-2"
                  />
                  <span className="table-cell align-middle font-medium text-blue-900 text-lg pl-3">
                    Analysis & Research
                  </span>
                </li>
                <li className="table">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full bg-yellow-500 text-white p-2"
                  />
                  <span className="table-cell align-middle font-medium text-blue-900 text-lg pl-3">
                    Finance Security Solutions
                  </span>
                </li>
                <li className="table">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="rounded-full bg-yellow-500 text-white p-2"
                  />
                  <span className="table-cell align-middle font-medium text-blue-900 text-lg pl-3">
                    100% Money Growth
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <img className="w-full align-top rounded-lg" src={pict2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* main area 4 */}
      <div className="mb-20">
        <div className="w-auto text-center pb-10">
          <span className="text-base font-semibold text-yellow-500 text-xl">
            OUR BLOG UPDATE
          </span>
          <h1 className="text-5xl font-bold text-blue-900 pt-5">
            Featured News And Insights
          </h1>
        </div>
        <div className="col-12 md:mx-[350px]">
          <div className="col-4 text-center border-2 m-[25px]">
            <img src={blog1} alt="" />
            <div className="text-left text-blue-900">
              <button className="border-2 border-blue-800 m-5 p-2 rounded-md hover:bg-yellow-500 hover:text-white">
                Business
              </button>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="ml-3">Oct 21, 2024</span>
            </div>
            <div className="text-left ml-5 pb-5">
              <span className="font-bold text-xl text-blue-900">
                Marketing Your Area Business Downturn Now A Days
              </span>
            </div>
            <div className="flex text-left ml-5 pb-5">
              <img src={profile1} alt="" className="w-10 h-10 mr-5" />
              <div className="items-center">
                <span className="font-normal">
                  By&nbsp;
                  <a href="#" className="text-black hover:text-yellow-500">
                    Doman Smith
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-4 text-center border-2 m-[25px]">
            <img src={blog2} alt="" />
            <div className="text-left text-blue-900">
              <button className="border-2 border-blue-800 m-5 p-2 rounded-md hover:bg-yellow-500 hover:text-white">
                Audit
              </button>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="ml-3">Oct 21, 2024</span>
              <div className="text-left ml-5 pb-5">
                <span className="font-bold text-xl text-blue-900">
                  Improving The Double Diamond Design Process
                </span>
              </div>
              <div className="flex text-left ml-5 pb-5">
                <img src={profile1} alt="" className="w-10 h-10 mr-5" />
                <div className="items-center">
                  <span className="font-normal">
                    By&nbsp;
                    <a href="#" className="text-black hover:text-yellow-500">
                      Doman Smith
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 text-center border-2 m-[25px]">
            <img src={blog3} alt="" />
            <div className="text-left text-blue-900">
              <button className="border-2 border-blue-800 m-5 p-2 rounded-md hover:bg-yellow-500 hover:text-white">
                Investment
              </button>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="ml-3">Oct 21, 2024</span>
              <div className="text-left ml-5 pb-5">
                <span className="font-bold text-xl text-blue-900">
                  Revealing Images With CSS Mask Animations
                </span>
              </div>
              <div className="flex text-left ml-5 pb-5">
                <img src={profile1} alt="" className="w-10 h-10 mr-5" />
                <div className="items-center">
                  <span className="font-normal">
                    By&nbsp;
                    <a href="#" className="text-black hover:text-yellow-500">
                      Doman Smith
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <CarouselSlider/>
      <div className="w-full bg-gradient-to-r from-blue-950 to-blue-800">
        <Footer2 />
      </div>
    </div>
  );
}

{
  /* <p></p>
<p>
  <span className="block py-1 text-xl">We Provide Brilliant Ideas & </span>
  <span className="block py-1 text-xl">Adding Success To Your </span>
  <span className="block py-1 text-xl">Business Motion.</span>              
</p>
<p>
  Mauris ut enim sit amet lacus ornare ullamcorper. Praesent
  placerat neque eu purus rhoncus, vel tincidunt odio ultrices.
  Sed theya are feugiat elis Curabitur posuere tristique.
</p> */
}
