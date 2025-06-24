export default function DineoutCard({ item }) {
	const mediaUrl = item?.info?.mediaFiles?.[0]?.url;
	const name = item?.info?.name || "Unknown";
	const rating = item?.info?.rating?.value || "N/A";
	const cuisines = item?.info?.cuisines || [];
	const offer = item?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header;

	return (
		<div className="flex-none relative font text-white">
			{/* Background image div */}
			<div className="relative w-70 h-48 bg-cover bg-center rounded-t-2xl overflow-hidden"
				style={{
					backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${mediaUrl})`,
				}}
			>
				{/* Gradient overlay */}
				<div className="w-full h-20 bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 z-10"></div>

				{/* Content over image */}
				<p className="font-bold absolute left-2 bottom-2 z-20">{name}</p>
				<p className="absolute right-2 bottom-2 z-20">{rating}</p>
			</div>

			{/* Cuisines */}
			<div className="text-black mt-2 flex gap-2 font-medium font-[Seoge UI]">
				{cuisines.slice(0, 2).map((cuisine, idx) => (
					<span key={idx}>
						{idx > 0 && <span> • </span>}
						{cuisine}
					</span>
				))}
			</div>

			{/* Offer */}
			{offer && <p className="text-black">{offer}</p>}
		</div>
	);
}
