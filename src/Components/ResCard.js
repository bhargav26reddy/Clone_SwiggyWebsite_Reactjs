import { MdStars } from "react-icons/md";

const ResCard =(props)=>{
    const {info} = props
    const {cloudinaryImageId, name, avgRating,sla, cuisines, locality, aggregatedDiscountInfoV3} = info

    return(
        <div className="flex-grow shrink-0 w-64 m-5 relative cursor-pointer">
            <img className="rounded-2xl h-44 w-72" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+ cloudinaryImageId}></img>
            <div className="absolute top-36 pl-3 text-white font-bold text-xl bg-gradient-to-r from-black">{aggregatedDiscountInfoV3?.header +" "+ aggregatedDiscountInfoV3?.subHeader}</div>
            <p className="font-bold text-xl ">{name}</p>
            <span><MdStars className="inline-block text-green-700"/><span className="text-lg">{avgRating}</span></span>
            <span className="text-lg p-2 font-bold">{sla.slaString}</span>
            <div className="text-lg overflow-hidden ">{cuisines.join(',')}</div>
            <div className="text-lg">{locality}</div>
        </div>
    )
}
export default ResCard;