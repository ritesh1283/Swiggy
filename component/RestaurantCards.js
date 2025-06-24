import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";

export default function RestaurantCards() {

	const [RestData, setRestData] = useState([])

	useEffect(() => {
		async function fetchData() {
			const promise = await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
			const data = await promise.json();

			const mainData = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
			setRestData(mainData);
		}

		fetchData()
	}, [])


	return (
		<>
			<Outlet />
			<div className="py-40 flex justify-center items-center">

				<div className="w-[80%]">

					<p className="font-bold text-3xl pb-10 " >Top Restaurant Chains in Delhi</p>

					<div className="flex" >
						<div className="flex flex-wrap gap-8 " >
							{
								RestData?.map((item) => {
									return (
										<div key={item?.info?.id} className="gap-5 w-70 pb-5 relative transition duration-100 ease-in-out transform hover:scale-115 " >

											<div className="relative">
												<Link to={`/restaurant/${item?.info?.id}/menu`} >
													<img className="rounded-xl w-80 h-50 object-cover z-10" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item?.info?.cloudinaryImageId}`} alt={item?.info?.name || "Restaurant Image"} />
													<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>
												</Link>
											</div>

											<div className="w-[90%] mx-auto">
												<p className="font-bold"> {item?.info?.name} </p>
												<div className="flex gap-2">
													<svg className="w-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
														<defs>
															<mask id="star-mask">
																<rect width="100" height="100" fill="white" />
																<path
																	d="M50 15 L58 38 H82 L62 54 L70 78 L50 63 L30 78 L38 54 L18 38 H42 Z"
																	fill="black"
																/>
															</mask>
														</defs>
														<circle cx="50" cy="50" r="48" fill="green" mask="url(#star-mask)" />
													</svg>
													<p> {item?.info?.avgRating} </p>
													<li className="p-0 m-0"> {item?.info?.sla?.slaString} </li>
												</div>
												<p className="overflow-x-hidden whitespace-nowrap text-ellipsis w-full"> {item?.info?.cuisines.join(", ")} </p>
											</div>
										</div>
									);
								})
							}
						</div>
					</div>
				</div>
			</div>
		</>
	)

}