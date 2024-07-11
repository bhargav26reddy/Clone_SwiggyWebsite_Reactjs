import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import ResCard from "./ResCard";

const Search =()=>{
    const store = useSelector(store =>store.Topratedcusines.filteredsearch)
    return(
        <div>
            <Header />
            {/* <div className="h-screen"> */}
            <div className="Topreschains m-20">
                <div className="flex flex-wrap">
                {
                    store?.map((data)=><Link to={`/res/${data.info.id}`}><ResCard key={data.info.id} info={data.info}/></Link>)
                }
                </div>
                <div className="border border-b-2 mt-10 mb-10"></div>
            </div>

            {/* </div> */}

            <Footer /> 
        </div>
    )
}
export default Search;