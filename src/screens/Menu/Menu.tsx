import { Fragment, useEffect, useState } from "react";
import { sections } from "../../data/sections";
import page1Image from "../../assets/images/page1.png";
import page2Image from "../../assets/images/page2.png";
import page3Image from "../../assets/images/page3.png";
import page4Image from "../../assets/images/page4.png";
import page5Image from "../../assets/images/page5.png";
import page6Image from "../../assets/images/page6.png";
import page7Image from "../../assets/images/page7.png";

const Menu = () => {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <Fragment>
      {/* <div>
        <button className="hidden lg:block m-5 bg-slate-400 w-24 h-14 rounded-xl">
          Login
        </button>
      </div>
      <div className="background">
        <div className="p-5 items-center justify-center font-serif font-black">
          <h1 className="text-5xl lg:text-8xl">Menu</h1>
        </div>
        <div className="flex flex-row items-start p-5">
          {sections?.map((item) => {
            return (
              <button
                className="rounded-lg w-auto h-10 p-4 flex items-center justify-center"
                style={{
                  backgroundColor:
                    selectedSection == item?.id ? "#cbd5e1" : "#fff",
                  color: selectedSection == item?.id ? "#fff" : "#000",
                  border: selectedSection == item?.id ? "none" : 2,
                  borderColor: "#cbd5e1",
                }}
                onClick={() => setSelectedSection(item?.id)}
              >
                {item?.title}
              </button>
            );
          })}
        </div>
        <div className="p-5 items-center justify-center font-serif font-black">
          <h1 className="text-5xl lg:text-8xl">Menu</h1>
        </div>
        <div className="flex flex-row items-start p-5">
          {sections?.map((item) => {
            return (
              <button
                className="rounded-lg w-auto h-10 p-4 flex items-center justify-center"
                style={{
                  backgroundColor:
                    selectedSection == item?.id ? "#cbd5e1" : "#fff",
                  color: selectedSection == item?.id ? "#fff" : "#000",
                  border: selectedSection == item?.id ? "none" : 2,
                  borderColor: "#cbd5e1",
                }}
                onClick={() => setSelectedSection(item?.id)}
              >
                {item?.title}
              </button>
            );
          })}
        </div>
        <div className="p-5 items-center justify-center font-serif font-black">
          <h1 className="text-5xl lg:text-8xl">Menu</h1>
        </div>
        <div className="flex flex-row items-start p-5">
          {sections?.map((item) => {
            return (
              <button
                className="rounded-lg w-auto h-10 p-4 flex items-center justify-center"
                style={{
                  backgroundColor:
                    selectedSection == item?.id ? "#cbd5e1" : "#fff",
                  color: selectedSection == item?.id ? "#fff" : "#000",
                  border: selectedSection == item?.id ? "none" : 2,
                  borderColor: "#cbd5e1",
                }}
                onClick={() => setSelectedSection(item?.id)}
              >
                {item?.title}
              </button>
            );
          })}
        </div>
        <div className="p-5 items-center justify-center font-serif font-black">
          <h1 className="text-5xl lg:text-8xl">Menu</h1>
        </div>
        <div className="flex flex-row items-start p-5">
          {sections?.map((item) => {
            return (
              <button
                className="rounded-lg w-auto h-10 p-4 flex items-center justify-center"
                style={{
                  backgroundColor:
                    selectedSection == item?.id ? "#cbd5e1" : "#fff",
                  color: selectedSection == item?.id ? "#fff" : "#000",
                  border: selectedSection == item?.id ? "none" : 2,
                  borderColor: "#cbd5e1",
                }}
                onClick={() => setSelectedSection(item?.id)}
              >
                {item?.title}
              </button>
            );
          })}
        </div>
      </div> */}
      <div>
        <img src={page1Image} className="background" />
        <img src={page2Image} className="background" />
        <img src={page3Image} className="background" />
        <img src={page4Image} className="background" />
        <img src={page5Image} className="background" />
        <img src={page6Image} className="background" />
        <img src={page7Image} className="background" />
      </div>
    </Fragment>
  );
};

export default Menu;
