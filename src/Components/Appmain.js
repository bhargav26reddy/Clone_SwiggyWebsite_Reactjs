import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from "./Body"
import Footer from "./Footer"
import Header from "./Header"
import Contact from "./Cart"
import ResContainer from "./ResContainer"
import Cart from "./Cart"
import Search from "./Search"



const Appmain =()=>{
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Body />,
        },
        {
            path:'/cart',
            element:<Cart />
        },{
            path:'/res/:resID',
            element:<ResContainer />
        },{
            path:'/search',
            element:<Search />,
        },
    ])
    
    return(
        <div>
            {/* <Header /> */}
            {/* <Body /> */}
              <RouterProvider router={appRouter} />
            {/* <Footer /> */}
        </div>
    )
}
export default Appmain