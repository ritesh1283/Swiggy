import React from "react"
import DineoutCards from "./DineoutCards";
import GroceryCards from "./GroceryCards";
import FoodCards from "./FoodCards";

export default function Body() {
	
	return (
		<>
			<FoodCards/>
			<GroceryCards/>
			<DineoutCards/>
		</>
	)
}