import FoodCard from "./FoodCard"
import FoodData from "./utils/FoodData"

export default function FoodCards() {
	function scrollRight() {
		document.getElementById("scrollBox").scrollBy({
			left: -500,
			behavior: "smooth"
		});
	}

	function scrollLeft() {
		document.getElementById("scrollBox").scrollBy({
			left: 500,
			behavior: "smooth"
		});
	}



	return (
		<>
			<div className="relative flex justify-center items-center ">
				<div className="absolute flex gap-2 right-40 top-4 " >
					<button className=" cursor-pointer " onClick={scrollRight}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711L5.41421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H5.41421L9.70711 17.2929C10.0976 17.6834 10.0976 18.3166 9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L2.29289 12.7071C1.90237 12.3166 1.90237 11.6834 2.29289 11.2929L8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289Z" fill="black" />
						</svg>

					</button>
					<button className="cursor-pointer" onClick={scrollLeft} >
						<svg width="24" height="24" viewBox="0 0 24 24" fill="#0000" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071C13.9024 18.3166 13.9024 17.6834 14.2929 17.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L14.2929 6.70711C13.9024 6.31658 13.9024 5.68342 14.2929 5.29289Z" fill="black" />
						</svg>

					</button>
				</div>
			</div>


			<div className="flex justify-center items-center pb-20" >

				<div id="scrollBox" className="scrollBox pt-10 overflow-x-scroll w-[80%]">
					<div className="flex flex-nowrap">
						{
							FoodData.slice(0, Math.ceil(FoodData.length / 2)).map((FoodItem) => {
								return <FoodCard key={FoodItem.id} item={FoodItem} />
							})
						}
					</div>


					<div className="flex flex-nowrap">
						{
							FoodData.slice(Math.ceil(FoodData.length / 2), FoodData.length).map((FoodItem) => {
								return <FoodCard key={FoodItem.id} item={FoodItem} />
							})
						}
					</div>
				</div>
			</div>
		</>
	)
}