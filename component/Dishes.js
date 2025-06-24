import { Add, Increment, Decrement } from "../store/CartSlicer"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";

export default function Dishes({ food }) {

	const dispatch = useDispatch();
	const items = useSelector((state) => state.CartSlicer.items)
	const count = items.find((item) => item?.card?.info?.id == food?.card?.info?.id)?.count ?? 0

	function AddItem(food) {
		dispatch(Add(food))
	}

	function IncrementItem(food) {
		dispatch(Increment(food))
	}

	function DecrementItem(food) {
		dispatch(Decrement(food))
	}

	return (
		<>
			<div className="flex justify-center items-center py-2 font-serif ">

				<div className="w-[100%] flex justify-between py-6">
					<div className="text-gray-800">
						{/* food name */}
						<p className="font-bold py-2">{food?.card?.info?.name}</p>

						{/* Price */}
						<p className="font-bold py-2">₹{food?.card?.info?.defaultPrice ? food?.card?.info?.defaultPrice / 100 : "wait"}</p>

						{/* Rating(rating Count) */}
						<div className="inline py-2">{food?.card?.info?.ratings?.aggregatedRating?.rating}
							<p className="text-gray-600 inline">
								<span> </span>
								({food?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
							</p>
						</div>

						{/* Description */}
						<p className="overflow-hidden text-ellipsis w-150 text-gray-600 " style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
							{food?.card?.info?.description || "Description not available"}
						</p>

					</div>

					<div className="relative group">
						<img className="w-40 h-40 object-cover rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${food?.card?.info?.imageId}`} ></img>

						{count === 0 ? (
							<button className="absolute left-6 bottom-[-15px] px-10 py-2 border border-gray-600 rounded-lg bg-white text-green-600 font-bold hover:bg-gray-300 transition-colors ease-in-out duration-100" onClick={() => AddItem(food)} >ADD</button>
						) : (
							<div className="absolute left-6 bottom-[-15px] border border-gray-100 rounded-lg bg-white text-green-600 font-bold text-2xl grid grid-cols-3" >
								<button className="hover:bg-gray-300 transition-colors ease-in-out duration-100 rounded-lg px-3 py-1" onClick={() => DecrementItem(food)}>-</button>
								<span className="flex justify-center items-center">{count} </span>
								<button className="hover:bg-gray-300 transition-colors ease-in-out duration-100 rounded-lg px-3 py-1" onClick={() => IncrementItem(food)}>+ </button>
							</div>
						)}
					</div>
				</div>

			</div>
			<div className="h-1 w-full bg-gray-300"></div>
		</>
	)
}
