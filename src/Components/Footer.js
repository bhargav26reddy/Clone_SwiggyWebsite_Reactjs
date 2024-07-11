const Footer =()=>{
    return(
        <div>
            <div className="bg-[#F0F0F5] flex justify-around p-7">
                <span className="text-2xl font-bold">For better experience,download <br/>the Swiggy app now</span>
                <div className="flex">
                <div><img className="h-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"></img></div>
                <div><img className="h-20" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"></img></div>
                </div>
            </div>
            {/* Footer */}
            <div className="bg-black h-40 flex justify-around">
                <div className="ml-48 mt-8">
                    <span className="text-white text-2xl">Swiggy</span>
                    <div className="text-gray-400 text-xl">© 2024 Bundl Technologies<br /> Pvt. Ltd</div>
                </div>
                <div>
                    <ul className="text-white text-xl">
                        <li className="font-bold pt-3 pb-3">Contact us</li>
                        <li className="pb-1">Help & Support</li>
                        <li className="pb-1">partner with us</li>
                        <li className="pb-1">Ride with us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;