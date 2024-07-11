const Card =({imageid})=>{

    return(
        <div  className="flex-grow shrink-0 w-44 cursor-pointer">
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/'+ imageid} className=""></img>
        </div>   
    )
}
export default Card;