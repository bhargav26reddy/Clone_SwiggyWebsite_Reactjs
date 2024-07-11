import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmenu } from "../Utilis/TopSlice";
import ResMenu from "./ResMenu";
import Shimmer from "./Shimmer";
import ShimmerMenu from "./ShimmerMenu";
import { FaIndianRupeeSign } from "react-icons/fa6";

const ResContainer =()=>{
    const {resID} = useParams()
    const dispatch = useDispatch()
    const [stat, setStat] = useState(false)
    const store = useSelector(store => store.Topratedcusines)
    
    let resInfo = store.Allres[0]?.filter(ele=>ele.info?.id === resID)[0]
    if(!resInfo){
        resInfo = store.Topreschain?.filter(ele=>ele.info.id === resID)[0]
    }
    const getresmenu =async()=>{
        setStat(true)
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resID}`)
        const json = await data.json()
        dispatch(addmenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(ele=>ele.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")))
        setStat(false)
    }
    useEffect(()=>{
        getresmenu()
    },[])
    return(
        <div>
            <Header />
         { stat?<ShimmerMenu />:  <ResMenu resInfo ={resInfo} resMenu={store.resMenu}/> }
            <Footer />

        </div>
    )
}
export default ResContainer;