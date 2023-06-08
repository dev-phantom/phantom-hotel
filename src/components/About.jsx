import {useEffect} from "react"

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return ( 
        <div className="w-full p-0 lg:p-10 xl:p-10 flex flex-col overflow-x-hidden">
            <div className="flex w-full flex-col lg:flex-row xl:flex-row justify-center items-center px-5 lg:px-[4rem] xl:px-[4rem]">

                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col gap-8">
                    <div className="w-full flex flex-row gap-5">
                        <div className="w-1/2 h-[280px] lg:w-[250px] lg:h-[334px] xl:w-[250px] xl:h-[334px] text-white font-inter text-[18px] lg:text-[24px] xl:text-[24px] bg-flexible bg-cover bg-no-repeat text-center pt-2" data-aos="fade-down-right" data-aos-duration="2000">Flexible Leases</div>
                        <div className="w-1/2 lg:w-[270px] lg:h-[270px] xl:w-[270px] xl:h-[270px] text-white font-inter text-[18px] lg:text-[24px] xl:text-[24px] bg-happiness bg-cover bg-no-repeat text-center pt-2 mt-12" data-aos="zoom-in" data-aos-duration="2000">7-Day Happiness Guaranteed</div>
                    </div>
                    <div className=" w-full flex flex-row gap-5 ">
                        <div className="w-1/2 h-[230px] lg:w-[212px] lg:h-[285px] text-white font-inter text-[18px] lg:text-[24px] xl:text-[24px] bg-cleaning bg-cover bg-no-repeat text-center pt-2" data-aos="zoom-in" data-aos-duration="2000">Monthly House Cleaning</div>
                        <div className="w-1/2 lg:w-[338px] lg:h-[356px] text-white font-inter text-[18px] lg:text-[24px] xl:text-[24px] px-1 bg-roomate bg-cover bg-no-repeat text-center pt-2" data-aos="fade-down-left" data-aos-duration="2000">Choose Your Own Roommate</div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 xl:w-1/2 lg:pr-[6rem] pt-10 lg:pt-0 xl:pt-0 xl:pr-[6rem] pl-8">
                    <div>
                       <h1 className="font-interb text-[28px] lg:text-[40px] xl:text-[40px] text-secondary lg:leading-[54px] xl:leading-[54px]">Flexibility and options to suit your lifestyle.</h1> 
                    </div>
                    <div className="py-5">
                       <p className="font-inter text-[18px] font-normal text-secondary leading-[32px]">
                            You need it? We got it. We make finding your next home easy, 
                            comfortable, and simple. From our happiness guarantee to our selective 
                            roommate finder option. We provide you the flexibility that you most desire.
                        </p> 
                    </div>
                    
                    <div>
                        <button className="bg-primary text-white w-[185px] h-[63px] flex justify-center items-center rounded-[13px]">search rooms</button>
                    </div>
                </div>

            </div>

            <div className="text-center my-10 px-10 lg:px-0 xl:px-0">
                Your property with us and be Confident that Your Room will be Filled Out!
            </div>

        </div>
     );
}
 
export default About;