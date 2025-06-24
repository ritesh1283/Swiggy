import Dishes from "./Dishes"
export default function Sections({ item }) {
	return (
		<div className="w-[60%] mx-auto pt-10 pb-2">
			{/* title (length) */}
			<p className="font-bold text-2xl pb-6" >{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</p>

			<div className="h-1 w-full bg-gray-300"></div>
			{

				item?.card?.card?.itemCards?.map((food) => {
					return <Dishes key={food?.card?.info?.id} food={food} />
				})
			}

		</div>
	)
}