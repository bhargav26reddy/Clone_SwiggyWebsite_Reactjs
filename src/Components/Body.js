import { useEffect, useState} from "react";
import { addTopcusines, addTopreschains, addallres } from "../Utilis/TopSlice";
import { useDispatch, useSelector} from "react-redux";
import Card from "./Card";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Shimmer from "./Shimmer";
import { ShimmerThumbnail } from "react-shimmer-effects";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


const Body =()=>{

    const [sim, setSim] = useState(true)
    const[load, setLoad] = useState(true)
   const dispatch = useDispatch()
    const toprated = useSelector((store)=>store.Topratedcusines)
    const resa = useSelector((store)=>store.Topratedcusines.resMenu)
   
    const getresults =async()=>{
        setSim(true)
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json()
        dispatch(addTopcusines(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info))
        dispatch(addTopreschains(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
        dispatch(addallres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
        setSim(false)

    }
    

    useEffect(()=>{
       
        getresults()
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])

    const handleScroll =()=>{        
        if( window.scrollY + window.innerHeight >= document.body.scrollHeight -5){
          setLoad(true)
          dispatch(addallres())
        }
        setLoad(false)
      }
   
    if(!toprated.Topratecus || !toprated.Topreschain || !toprated.Allres){
        return
    }
   
    return(
       <>
          <Header />
        {sim?<Shimmer />:<section className="ml-36 w-[80%] mt-7 text-2xl">
            {/* Whats in your mind? */}
            <div className="whatsinmind">
                <div className="flex justify-between">
                <h1 className="font-bold">What's on your mind?</h1>
                <div className="flex m-5">
                <span className="mr-2" ><FaArrowCircleLeft /></span>
                <span ><FaArrowCircleRight /></span>
                </div>
                </div>
                <div className="flex overflow-x-scroll">
                {
                    toprated.Topratecus.map((data)=><Card key={data.id} imageid={data.imageId}/>)
                }
                </div>
                <div className="border border-b-2 mt-10 mb-10"></div>
            </div>
            {/* Top restaurant chains in Bangalore */}
            <div className="Topreschains">
                <h1 className="font-bold">Top restaurant chains in Bangalore</h1>
                <div className="flex overflow-x-scroll">
                {
                    toprated.Topreschain.map((data)=><Link to={`/res/${data.info.id}`}><ResCard key={data.info.id} info={data.info}/></Link>)
                }
                </div>
                <div className="border border-b-2 mt-10 mb-10"></div>
            </div>
             {/* Restaurants with online food delivery in Bangalore*/}
            <div className="Topreschains">
                <h1 className="font-bold">Restaurants with online food delivery in Bangalore</h1>
                <div className="flex flex-wrap">
                {
                    toprated.Allres[0]?.map((data)=><Link to={`/res/${data.info.id}`}><ResCard key={data.info.id} info={data.info}/></Link>)
                }
                {
                    !load && Array(4).fill().map(()=><div className="m-2 w-72"><ShimmerThumbnail height={250} rounded /></div>)
                }
                </div>
                <div className="border border-b-2 mt-10 mb-10"></div>
            </div>
        </section>}  
        <Footer />
        </>
        
    )
}
export default Body;