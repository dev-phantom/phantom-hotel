import {card, wilson, vide} from "../assets/index"
import {useEffect} from "react"

import AOS from "aos";
import "aos/dist/aos.css";

const Author = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return ( 
        <div className="w-full overflow-x-hidden flex flex-col-reverse lg:flex-row xl:flex-row pb-8 bg-[#131418] bg-opacity-10 ">
            <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-center pt-10 lg:pt-0 xl:pt-0 px-4 lg:px-20 xl:px-20" data-aos="zoom-in-right" data-aos-duration="2000">
                <div>
                    <p className="font-inter text-[21px] font-normal text-secondary leading-[36px] pl-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam interdum nisl et nunc facilisis, a commodo eros mollis. 
                        Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur
                        ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
                        faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </p>
                </div>
                <div className="flex flex-row py-4">
                    <div className="pr-4 pl-6">
                        <img src={wilson} alt="" />
                    </div>
                    <div>
                        <div className="font-interb text-[18px] font-bold text-primary">
                            Harry Wilson
                        </div>
                        <div>Property Owner</div>
                    </div>
                </div>
                <div className="flex flex-row py-4 pl-6 justify-center items-center lg:justify-start xl:justify-start">
                    <div className="font-bold text-4xl text-primary pr-1">.</div>
                    <div className="font-bold text-4xl text-[#D9DBE1] pr-1">.</div>
                    <div className="font-bold text-4xl text-[#D9DBE1]">.</div>
                </div>
            </div>
            <div className="w-full pt-10 lg:pt-0 xl:pt-0 lg:w-1/2 xl:w-1/2 px-6 lg:px-0 xl:px-0" data-aos="zoom-in-left" data-aos-duration="2000">
                {/* <img src={card} alt="" /> */}
                <video src={vide} className="w-full lg:h-[590px] h-max rounded-lg " controls>Sorry can't play video</video>
            </div>
        </div>
     );
}
 
export default Author;