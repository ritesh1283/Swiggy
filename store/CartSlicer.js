import { createSlice } from "@reduxjs/toolkit"

const CartSlicer = createSlice({
	name: "CartSlicer",
	initialState: { count: 0, items: [] },
	reducers: {
		Add: (state, action) => {
			state.count++;
			state.items.push({ ...action.payload, count: 1 });
		},
		Increment: (state, action) => {
			state.count++;
			state.items.find((element) => element.card.info.id === action.payload.card.info.id).count++
		},
		Decrement: (state, action) => {
			state.count--;
		
			const index = state.items.findIndex(
				(item) => item.card.info.id === action.payload.card.info.id
			);
		
			if (index !== -1) {
				if (state.items[index].count === 1) {
					// Remove the item from the array
					state.items.splice(index, 1);
				} else {
					// Decrement count
					state.items[index].count--;
				}
			}
		},
		
	}
})

export const { Add, Increment, Decrement } = CartSlicer.actions

export default CartSlicer.reducer

