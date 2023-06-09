import { useEffect } from "react";
import Navbar from "../../common/Navbar";
// Data
import data from "../../data/data.json";
import { map } from "../../assets/index";
import { Menu } from "@headlessui/react";
import Dropdown from "../../components/Dropdown";
import Offers from "../../components/Offers";
import PropertiesList from "../../components/PropertiesList";
import About from "../../components/About";
import AddProperty from "../../components/AddProperty";
import Author from "../../components/Author";
import Footer from "../../common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  let home = data.home;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="w-full">
      <header className="bg-[url('https://res.cloudinary.com/phantom1245/image/upload/v1672847368/rental/home_f1aame.png')] h-screen w-full bg-cover bg-no-repeat ">
        <Navbar />

        <div className="flex w-full flex-col xl:flex-row lg:flex-row pt-12 justify-center items-center">
          <div className="lg:w-1/2 xl:w-1/2 w-full">
            <div className="px-5 lg:px-0 xl:px-0 lg:pr-[8rem] xl:pr-[8rem] font-inter text-white lg:leading-[70px] xl:leading-[70px] text-center lg:text-left xl:text-left capitalize font-normal text-[22px] lg:text-[42px] xl:text-[42px]">
              The most <span className="">affordable</span> place to stay in the
              san franciso bay area
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start xl:justify-start">
            <div className="flex justify-center items-center pt-8 lg:justify-start xl:justify-start">
              <img src={map} alt="" className="w-[90%] lg:w-full xl:w-full" />
            </div>
            <div className="py-4 rounded-xl gap-2 w-[90%] bg-white px-2 justify-center items-center flex-wrap lg:pl-8 flex flex-row">
              <div>
                <Dropdown value={"all types"} />
              </div>
              <div className="">
                <Dropdown value={"Neighborhood"} />
              </div>
              <div className="flex justify-center items-center bg-[#23A6F0] p-2 cursor-pointer rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <Offers />
        </section>
        <section>
          <PropertiesList />
        </section>
        <section>
          <About />
        </section>
        <section>
          <AddProperty />
        </section>
        <section>
          <Author />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Home;
