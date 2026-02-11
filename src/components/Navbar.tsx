import { NavLink } from "react-router-dom";
import CategorySelect from "./home/CategorySelect";
import Headline from "./home/Headline";
import PreNav from "./home/PreNav";
import jsonData from "@data/nav.json";
const nav = jsonData.nav;

const Navbar = () => {
  return (
    <div className="">
      {/* headline */}
      <Headline />
      {/* pre nav */}
      <PreNav />
      {/* main nav */}
      <div className="min-h-[75px] py-3 bg-white flexCenter">
        <div className="w-[80%] flexBetween flex-col md:flex-row">
          <div className="flexStart flex-col md:flex-row gap-4 py-2 md:gap-[32px] ">
            <CategorySelect />
            {/* links */}
            <nav className="flex flex-wrap gap-6 sm:gap-8 md:gap-[32px]">
              {nav.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `font-inter font-medium text-[14px] capitalize leading-[110%] transition-colors duration-200 
             ${isActive ? "text-[#007580]" : "text-[#636270]"}`
                  }
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>
          </div>
          {/* right */}
          <div className="">
            <span className="text-[#272343] text-[14px] font-inter font-[500]"> <span className="text-[#636270] text-[14px] font-inter font-normal ">{nav.contacts.text}:</span> {nav.contacts.tel} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
