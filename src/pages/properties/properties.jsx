import React from "react";
import Navbar from "../../common/Navbar";
import { Tab } from "@headlessui/react";
import Properties from "../../components/Properties";


export default function Propertie() {
    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }
  return (
    <div className="flex bg-[#222] flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      <>
        <div>
          <h2 className="font-interb text-center pl-6 pt-10 lg:text-left xl:text-left capitalize text-[26px] text-white">
            <span className="border-b-2 pb-2 w-full border-primary">Top</span>{" "}
            properties
          </h2>
        </div>

        <div className="">
          <Tab.Group>
            <Tab.Panels>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </>
      <>
        <div>
          <h2 className="font-interb text-center pl-6 pt-10 lg:text-left xl:text-left capitalize text-[26px] text-white">
            <span className="border-b-2 pb-2 w-full border-primary">friday</span>{" "}
            special
          </h2>
        </div>

        <div className="">
          <Tab.Group>
            <Tab.Panels>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </>
      <>
        <div>
          <h2 className="font-interb text-center pl-6 pt-10 lg:text-left xl:text-left capitalize text-[26px] text-white">
            <span className="border-b-2 pb-2 w-full border-primary">affordable</span>{" "}
            properties
          </h2>
        </div>

        <div className="">
          <Tab.Group>
            <Tab.Panels>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
              <Tab.Panel>
                <Properties />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </>
    </div>
  );
}
