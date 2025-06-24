import GroceryCard from "./GroceryCard"
import GroceryData from "./utils/GroceryData"

export default function GroceryCards() {
	return (
		<div className="flex justify-center items-center " >

			<div className="w-[80%] ">

				<h2 className="font-black text-xl pb-10 " >Shop groceries on Instamart</h2>

				<div className="scrollBox overflow-x-scroll flex-nowrap" >
					<div className="flex gap-4">
						{
							GroceryData.map((item) => <GroceryCard key={item.id} item={item} />)
						}

					</div>
				</div>
			</div>
		</div>
	)
}