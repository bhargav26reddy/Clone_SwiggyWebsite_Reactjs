import Ressubitems from "./Ressubitems";

const Headshow =(props)=>{
    const {el} = props
  
    return(
        <div className="">
            {/* el?.map((er)=> */}
            <Ressubitems info={el[0]}/>
            
        </div>
    )
}
export default Headshow;