import TransparentSelect from "./TransparentSelect";
import { Link } from "react-router-dom";
import jsonData from "@data/nav.json";
const headline = jsonData.headline;
const Headline = () => {
  return (
    <div className=" mx-auto min-h-[45px] bg-[#272343] flexCenter  ">
      {/* container */}
      <div className="w-[80%] flexBetween flex-col md:flex-row ">
        <div className="flexStart gap-2 ">
          <img
            className=""
            src={headline.boxa.icon}
            alt="logo"
            loading="lazy"
          />
          <span className="font-inter font-normal text-[13px] text-white "> {headline.boxa.text} </span>
        </div>
        <div className="flexStart gap-[25px] ">
         <TransparentSelect data={headline.boxb.languages} />
          <div className="">
            <Link className="font-inter font-normal text-[13px] text-white" to={headline.boxb.link1.to} > {headline.boxb.link1.text} </Link>
          </div>
          <div className="flexStart gap-[7.33px] ">
            <img loading="lazy" src={headline.boxb.link2.icon} alt="info icon" />
            <Link className="font-inter font-normal text-[13px] text-white" to={headline.boxb.link2.to} > {headline.boxb.link2.text} </Link>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default Headline;
