import { MdStars } from "react-icons/md"
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import ResItemHeading from "./ResItemHeading";
import { useState } from "react";

const ResMenu =(props)=>{
    const {resInfo, resMenu} = props
    const [flag, setflag] = useState(false)
    const [showIndex, setShowIndex] = useState(0)
    if(!resInfo){
        return
    }
    const {info} = resInfo
    const {cloudinaryImageId, name, avgRating,sla, cuisines, locality, aggregatedDiscountInfoV3, totalRatingsString, costForTwo} = info
    
    return(
        <div className="mt-16 ml-[18%] p-10">
            <h1 className="pb-8 font-bold text-2xl">{name}</h1>
        <div className="border-b-8 border-l-8 border-r-8 border border-t-2 rounded-xl  w-[80%] space-y-2 shadow-xl">
            <span className="text-2xl font-bold"><MdStars className="inline-block text-green-700 mr-2"/><span className="text-lg">{avgRating}</span><span className="text-lg m-1">({totalRatingsString} ratings)</span></span>
            <span className="text-lg p-2 font-bold">. {costForTwo}</span>
            <div className="text-lg overflow-hidden ">{cuisines.join(',')}</div>
            <div className="text-lg">{locality}</div>
            <span className="text-lg p-2 "><MdOutlineDeliveryDining className="inline-block text-xl"/> {sla.slaString}</span>
        </div>
        <div className="m-6 ml-[32%]">
            <h2 className="text-2xl"><MdOutlineRestaurantMenu className="inline-block"/>Menu<MdOutlineRestaurantMenu className="inline-block"/></h2>
        </div>
          { resMenu?.map((e, index)=><ResItemHeading resMenu={e} showItems={index === showIndex ?true:false} setShowIndex={()=>setShowIndex(index)}/>) }
        </div>
    )
}
export default ResMenu;