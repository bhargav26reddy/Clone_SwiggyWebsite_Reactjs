import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import Store from "../Utilis/Store";
import Headshow from "./Headshow";

const Cart =()=>{
    const store = useSelector(store=>store.Cart.cartholder)
    if(!Object.keys(store).length){
        <div className="text-center text-2xl m-12 h-96">Hungry? 🍔 Why waste your time? ⏳ Your cart is empty! 🛒 Add your favorite items and enjoy the food! 🍕😋</div>
    }
       
    return(
        <div>
            <Header />
           <div className="m-32">
             <h1 className="font-bold text-2xl text-center">Cart</h1>
          {!Object.keys(store).length == 0?<div className="w-[70%] border-4  ml-52">
                  {  Object.values(store)?.map((el)=><Headshow el={el}/>) }
             </div>:<div className="text-center text-2xl m-6 h-96">Hungry? 🍔 Why waste your time? ⏳ Your cart is empty! 🛒 Add your favorite items and enjoy the food! 🍕😋</div>}   
            </div>
            <Footer />
        </div>
    )
}
export default Cart;