import jsonData from "@data/nav.json";
import SearchBar from "./SearchBar";
const prenav = jsonData.preNav;
const PreNav = () => {
  return (
    <div className="min-h-[84px] py-2 flexCenter bg-[#F0F2F3] " >
        {/* container */}
        <div className="w-[80%] flexBetween gap-2 flex-col md:flex-row">
            {/* boxa */}
            <div className="flexStart gap-2 ">
                <img src={prenav.boxa.icon} alt="Comforty logo" loading="lazy" />
                <span className="font-inter font-[500] text-[#272343] text-[26px] "> {prenav.boxa.text} </span>
            </div>
            <SearchBar icon={prenav.boxb.icon} placeholder={prenav.boxb.placeholder} />
            <div className="flexStart gap-3 ">
                <div className="bg-white py-[11px] px-4 rounded-[8px] gap-3 h-[44px] flexCenter ">
                    <img src={prenav.boxc.cart.icon} alt="cart icon" loading="lazy" />
                    <span className="text-[#272343] font-[500] text-[12px] "> {prenav.boxc.cart.text} </span>
                    <span className="flexCenter w-[20px] h-[20px] bg-[#007580] text-white font-sans font-[500] text-[10px] rounded-full "> {prenav.boxc.cart.itemss} </span>
                </div>
                <div className="bg-white py-[11px] px-4 rounded-[8px] gap-3 h-[44px] flexCenter ">
                    <img src={prenav.boxc.icon2} alt="heart icon" loading="lazy" />
                   
                </div>
                <div className="bg-white py-[11px] px-4 rounded-[8px] gap-3 h-[44px] flexCenter ">
                    <img src={prenav.boxc.icon3} alt="user icon" loading="lazy" />
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default PreNav