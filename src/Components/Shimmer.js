import { ShimmerSimpleGallery } from "react-shimmer-effects";
const Shimmer =()=>{

    return(
        <section className="ml-36 w-[80%] mt-7 text-2xl">
        <ShimmerSimpleGallery imageType="circular" imageHeight={100} caption />
        <ShimmerSimpleGallery card imageHeight={300} />
        <ShimmerSimpleGallery card imageHeight={300} caption />
        </section>
    )
}
export default Shimmer;