import { Outlet, useParams } from "react-router"
import { useEffect, useState } from "react";
import Sections from "./Sections";

export default function RestaurantMenu() {
	const { id } = useParams();
	const [RestData, setRestData] = useState([])

	useEffect(() => {
		async function fetchData() {
			const promise = await fetch(`https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
			const data = await promise.json();

			let mainData = data?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards;

			mainData = mainData?.filter((element) => "title" in element?.card?.card);
			
			setRestData(mainData);
		}
		fetchData()
	}, [])

	return (
		<div>
			<Outlet/>
			{
				RestData.map((item) => {
					return <Sections key={item?.card?.card?.title} item={item} />
				})
			}
		</div>
	)
}