import React from "react"

export default function FoodCard({ item }) {
	return (
			<a className="flex-none w-40" href={item.action.link}>
				<img className="" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item?.imageId}`} />
			</a>
	)
}