import { configureStore } from "@reduxjs/toolkit";
import CartSlicerReducer from "./CartSlicer"


const store=configureStore({
	reducer:{
		CartSlicer:CartSlicerReducer
	}
})


export default store



