import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Add, Increment, Decrement } from "../store/CartSlicer"

export default function Cart() {
	const items = useSelector((state) => state.CartSlicer.items);

	console.log(items);
	const dispatch = useDispatch();

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
			<Outlet />
			<div className="flex flex-col gap-5 pt-5" >
				{
					items.map((food) => {
						return (<div key={food.card.info.id} className="w-[40%] mx-auto flex justify-between" >
							<div>
								<p>name: {food?.card?.info?.name}</p>
								<p>count: {food?.count}</p>
								<p>price:₹{food?.card?.info?.defaultPrice ? food?.card?.info?.defaultPrice / 100 : "wait"}</p>
							</div>

							<div className="relative group">
								<img className="w-30 h-30 object-cover rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${food?.card?.info?.imageId}`} ></img>

								{food?.count === 0 ? (
									<button className="absolute left-0 bottom-[-10px] px-10 py-2 border border-gray-600 rounded-lg bg-white text-green-600 font-bold hover:bg-gray-300 transition-colors ease-in-out duration-100" onClick={() => AddItem(food)} >ADD</button>
								) : (
									<div className="absolute left-1 bottom-[-10px] border border-gray-100 rounded-lg bg-white text-green-600 font-bold text-2xl grid grid-cols-3" >
										<button className="hover:bg-gray-300 transition-colors ease-in-out duration-100 rounded-lg px-2 py-1" onClick={() => DecrementItem(food)}>-</button>
										<span className="flex justify-center items-center">{food?.count} </span>
										<button className="hover:bg-gray-300 transition-colors ease-in-out duration-100 rounded-lg px-3 py-1" onClick={() => IncrementItem(food)}>+ </button>
									</div>
								)}
							</div>

						</div>
						)
					})
				}
			</div>

		</>
	)
}