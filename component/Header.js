import React from "react"
import { Link } from "react-router"

export default function Headers() {
	return (
			<header className="bg-[#ff5200] font-sans pb-10 ">

				<nav className="p-8 flex container mx-auto justify-between items-center" >

					<img className="w-40 h-12 " src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" />

					<div className="text-white font-medium text-sm font-[Nunito Sans
] flex justify-between items-center gap-8 " >
						<a className="" target="_blank" href="https://www.swiggy.com/corporate/" >Swiggy Corporate</a>
						<a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
						<a className="border-[0.8] px-4 py-3 flex justify-between items-center rounded-2xl w-auto cursor-pointer border-white p-2 " >
							<h2>Get the App</h2>
							<svg className="rotate-330" width="21" height="21" viewBox="0 0 21 21" fill="none" aria-label="rating-up-down-icon" aria-hidden="false" stroke="#FFFFFF" >
								<path d="M12.634 3.45a1 1 0 0 0-1.365 1.462l4.827 4.506c.238.221.44.41.614.577H2.996a1 1 0 0 0 0 2h13.777c-.186.18-.41.39-.677.64l-4.769 4.45a1 1 0 0 0 1.365 1.462l4.817-4.495c.546-.51 1.03-.96 1.367-1.376.365-.449.664-.979.664-1.65 0-.672-.299-1.201-.664-1.65-.338-.415-.821-.866-1.367-1.376z" fill="#FFFFFF"></path>
							</svg>
						</a>
						<a className="bg-black font-white px-4 py-3 w-33 h-13 flex justify-center items-center rounded-2xl" >Sign in</a>
					</div>
				</nav>

				<div className="flex justify-center items-center relative text-white pt-16 pb-8">

					<img className="absolute left-0 top-0 w-63" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
					<img className="absolute right-0 top-0 w-63" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />

					<div className="w-[60%] text-center " >
						<h1 className="text-5xl font-bold mb-8" >Order food & groceries. Discover best restaurants. Swiggy it!</h1>

						<input type="text" placeholder="Delhi,India" className="bg-white text-black font-bold px-4 w-52 h-14 rounded-2xl" />

						<input type="text" placeholder="Search for restaurants and food" className="bg-white text-black font-bold px-4 ml-3 w-120 h-14 rounded-2xl"></input>
					</div>


				</div>


				<div className="flex justify-center items-center">
					<div className="flex justify-center items-center w-[80%] ">

						<Link to={"/restaurant"}>
							<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
						</Link>

						<a href="https://www.swiggy.com/dineout">
							<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" />
						</a>

						<a href="https://www.swiggy.com/dineout" >
							<img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" />
						</a>

					</div>
				</div>



			</header >
	)
}