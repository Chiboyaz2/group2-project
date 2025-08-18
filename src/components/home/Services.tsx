import jsonData from "@data/hero.json";
const services = jsonData.hero.services;

const Services = () => {
  return (
    <div className=" lg:w-[85%] mx-auto flexCenter  " >
        <div className="grid py-[20px] px-4 lg:py-[30px] lg:px-[50px]  grid-cols-2 lg:grid-cols-4 bg-white rounded-[12px] custom-shadow1 ">
        {
            services.map((each:any,index:number)=>(
                <div key={index} className="flexStart gap-[17.44px] ">
                    <img className="" src={each.icon} alt={each.h6} loading="lazy" />
                    <div className="">
                        <h6 className="font-inter font-[500] text-[14px] lg:text-[16px] text-[#272343] ">{each.h6} </h6>
                        <p className="font-inter font-normal text-[11px] lg:text-[13px] text-[#9A9CAA] mt-[6px] "> {each.p} </p>
                    </div>
                </div>
            ))
        }

        </div>
    </div>
  )
}

export default Services