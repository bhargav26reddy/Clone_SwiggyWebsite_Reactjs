import { ShimmerContentBlock } from "react-shimmer-effects";
const ShimmerMenu =()=>{
    return(
        <div className="w-[80%] mt-7 text-2xl max-h-full">
            <ShimmerContentBlock
        title
        text
        cta
        thumbnailWidth={370}
        thumbnailHeight={370}
      />
        </div>
    )
}
export default ShimmerMenu;