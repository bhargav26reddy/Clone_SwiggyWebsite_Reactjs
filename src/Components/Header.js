import { Link } from "react-router-dom";
import { SWIGGY_LOGO } from "../Utilis/Constants";
import { MdShoppingCart } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfilteredsearch } from "../Utilis/TopSlice";

const Header = ()=>{
    const val = useRef(null)
    const store = useSelector(store=>store.Topratedcusines.Topreschain)
    const store1 = useSelector(store=>store.Cart.cartholder)
    const dispatch = useDispatch()
    const handlesearch =()=>{
        const filtered = store.filter((e)=>e.info.name.toLowerCase().includes(val.current.value.toLowerCase()))
        dispatch(addfilteredsearch(filtered)) 
    }

    const count = Object.values(store1).reduce((acc, ele)=>{
       return acc + ele.length
    },0)
   
   
    return(
        <nav className="w-[100%] p-4 h-20 flex justify-between shadow-xl items-center">        
           <div><Link to='/'><img src={SWIGGY_LOGO} className="w-[60%] h-14"></img></Link></div> 
            <div className="w-2/5 relative border border-black flex rounded-xl">
            <input className="h-12 w-4/5 border rounded-l-xl overflow-hidden" ref={val}></input>
            <button className="w-1/5  h-12 rounded-r-xl bg-[#FF5D0D]" onClick={()=>{
                handlesearch()
            }}> <Link to={'/search'}>Search</Link></button>
            </div>
            {/* <div className="flex justify-around"> */}
            <Link to="/cart"> <div className="mr-4 text-xl cursor-pointer hover:bg-orange-600 rounded-lg p-2"><MdShoppingCart className="inline-block"/> Cart-({count})</div></Link>
            <div className="text-xl cursor-pointer hover:bg-orange-600 rounded-lg p-2"><BiSolidOffer className="inline-block"/> Offers</div>
            <div className="text-xl cursor-pointer hover:bg-orange-600 rounded-lg p-2"><IoHelpBuoyOutline className="inline-block"/> Help</div>
            <Link to="/contact"><div className="text-xl hover:bg-orange-600 rounded-lg p-2"><GrContactInfo className="inline-block "/> Contact</div></Link>
            {/* </div> */}
        </nav>
    )
}
export default Header;