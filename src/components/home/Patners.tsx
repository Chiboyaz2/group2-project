import AutoScroll from "./AutoScroll"
import jsonData from "@data/partners.json";
const data = jsonData.data;

const Patners = () => {
  return (
    <div className="mt-[26px] w-[90%] mx-auto ">
      <AutoScroll direction="left" speed={20} className="h-[139px] w-full flexBetween gap-[106px] flex-nowrap  bg-white">
        {
          data.map((each:any,index:number)=>(
            <img key={index} className="w-[135px] h-[135px] object-contain  " src={each} alt={`${index} patner`} loading="lazy" />
          ))
        }
      </AutoScroll>
    </div>
  )
}

export default Patners
