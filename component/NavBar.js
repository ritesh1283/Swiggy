import { useSelector } from "react-redux"
import { Link } from "react-router"


export default function NavBar() {
	const count = useSelector((state) => state.CartSlicer.count)
	const items = useSelector((state) => state.CartSlicer.items)
	console.log(items)
	
	return (
		<>
			<div className="w-[60%] mx-auto flex justify-between mt-5">
				<div></div>
				<Link to="/cart" >
					<h1 className="font-bold text-2xl">Cart: {count}</h1>
				</Link>
			</div>
		</>
	)
}