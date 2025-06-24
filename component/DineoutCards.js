import DineoutCard from "./DineoutCard"
import DineoutData from "./utils/DineoutData"

export default function () {
	return (
		<div className="flex justify-center items-center" >
			<div className="w-[80%]" >
				<p className="font-black text-xl pb-10 pt-20">Discover best restaurants on Dineout</p>
				<div className="scrollBox overflow-x-scroll flex-nowrap">
					<div className="flex gap-8" >
						{
							DineoutData.map((item) => {
								return <DineoutCard key={item.info.id} item={item} />
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}