import { useDispatch, useSelector } from "react-redux"
import { setflag } from "../Utilis/TopSlice"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Addcart, removeItem } from "../Utilis/CartSlice";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const Ressubitems =(props)=>{
    const dispatch = useDispatch()
    const store = useSelector((store)=>store?.Cart?.cartholder)

    const {info, index} = props
    if(!info){
        return
    }
    const {description, imageId, id} = info
    const price = info.price? info?.price/100:info?.defaultPrice/100

    if(!store){
        return
    }
    const number = store[info?.id]?store[info?.id].length:'0'
  
    return(
     <div className="w-[100%]">
        <div className="flex justify-between w-[100%] items-center">
            <div className="w-[70%] pl-2 pr-2">
            <div className="text-lg font-bold">{info?.name}</div>
            <span className="text-lg font-bold"><FaIndianRupeeSign className="inline-block"/>{price}</span>
            <div className="text-green-700"><FaStar className="inline-block"/> {info?.ratings?.aggregatedRating?.rating}<span>({(info?.ratings?.aggregatedRating?.ratingCountV2)?info?.ratings?.aggregatedRating?.ratingCountV2:"4.2"})</span></div>
            <p className="w-[100%]">{description}</p>
            
            </div>
            <div className="h-28 w-56 relative pr-4">
                <img className="h-28 w-56 rounded-lg shadow-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}></img>
                <button className="absolute -bottom-1 left-28 bg-black text-white rounded-lg w-7  font-bold shadow-lg" onClick={()=>{
                    dispatch(Addcart(info))
                }}><IoMdAdd className="font-bold text-2xl"/></button>
                <span className="ml-2 absolute -bottom-1 left-20 text-black rounded-lg w-6 h-7 font-bold text-xl text-center bg-gradient-to-t from-white">{number}</span>   
                <button className="absolute -bottom-1 left-16 bg-black text-white rounded-lg w-7 font-bold text-center" onClick={()=>{
                   dispatch(removeItem(info))
                }}><FiMinus className="font-bold text-2xl"/></button>
            </div>
            </div>
            <div className="border border-b-2 mt-4 mb-4"></div>
        </div>
    )
}
export default Ressubitems;