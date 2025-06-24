import React from "react"

export default function GroceryCard({ item }) {
	return (
		<div className="flex-none">

			<a className="" href={item?.action?.link}>
				<img className="w-50" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item?.imageId}`} />
			</a>
			<h2 className="text-center font-bold " > {item?.action?.text} </h2>

		</div>

	)
}