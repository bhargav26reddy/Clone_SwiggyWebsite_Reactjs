import { useState } from "react";
import Ressubitems from "./Ressubitems"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const ResItemHeading =(props)=>{
    const {resMenu, showItems, setShowIndex} = props
    const {title} = resMenu.card?.card

    
    return(
        <div className="shadow-lg w-[80%]">
            <div className="border border-b-8 w-[100%] mt-2 mb-2"></div>
            <div className=" w-[100%] flex justify-between items-center">
            <h1 className="text-xl font-bold pb-4 inline-block">{title}({resMenu.card.card.itemCards.length})</h1>
            <span className="mr-4" onClick={()=>{
                setShowIndex(!showItems)
                // <FaChevronUp className="inline-block" />:
            }}><FaChevronDown className="inline-block"/></span>
            </div>
          <div>
               { showItems && resMenu.card.card.itemCards.map((e, index)=><Ressubitems key ={e.card.info.id} info ={e.card.info} index={index} />)} 
            </div>
        </div>
    )
}
export default ResItemHeading;