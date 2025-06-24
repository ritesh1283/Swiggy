import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "../component/Home"
import RestaurantCards from "../component/RestaurantCards"
import RestaurantMenu from "../component/RestaurantMenu"
import NavBar from "../component/NavBar"
import store from "../store/stores"
import { Provider } from "react-redux"
import Cart from "../component/Cart"

function App() {
	return (
		<>
		<Provider store={store} >
			<BrowserRouter>
				<Routes >
					<Route path="/" element={<Home />} ></Route>
					<Route path="/restaurant" element={<RestaurantCards />}>
						<Route index element={<NavBar />}></Route>
					</Route>
					<Route path="/restaurant/:id/menu" element={<RestaurantMenu />}>
						<Route index element={<NavBar />}></Route>
					</Route>

					<Route path="/cart" element={<Cart />}>
						<Route index element={<NavBar />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
			</Provider>
		</>
	)
}

const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
Reactroot.render(<App />)