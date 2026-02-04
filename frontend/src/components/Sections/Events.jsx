import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

export default function Events() {
	const { i18n } = useTranslation();
	const [sparkles] = useState(() =>
		Array.from({ length: 8 }, (_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			delay: i * 0.25,
		})),
	);

	const events = [
		{
			id: 1,
			date: 19,
			month_en: "February",
			month_sw: "Februari",
			title_en: "Cosmetology Workshop National",
			title_sw: "Warsha ya Cosmetology Kitaifa",
			excerpt_en: "Learn advanced makeup and beauty techniques",
			excerpt_sw: "Jifunze mbinu za makeup na urembo wa juu",
			location_en: "Main Hall",
			location_sw: "Ukumbi Mkuu",
			capacity: 150,
			category_en: "Workshop",
			category_sw: "Warsha",
		},
		{
			id: 2,
			date: 23,
			month_en: "February",
			month_sw: "Februari",
			title_en: "Series: Hair Styling Masterclass",
			title_sw: "Mfululizo: Harusi ya Ususi",
			excerpt_en: "Professional hair styling techniques",
			excerpt_sw: "Mbinu za ususi wa kitaalamu",
			location_en: "Studio A",
			location_sw: "Studio A",
			capacity: 80,
			category_en: "Masterclass",
			category_sw: "Darasa Kubwa",
		},
		{
			id: 3,
			date: 2,
			month_en: "March",
			month_sw: "Machi",
			title_en: "Award Giveaway & Graduation",
			title_sw: "Sherehe na Uzamili",
			excerpt_en: "Celebrate achievements and success",
			excerpt_sw: "Acha kuzaliwa na mafanikio",
			location_en: "Auditorium",
			location_sw: "Auditorium",
			capacity: 300,
			category_en: "Graduation",
			category_sw: "Uzamili",
		},
		{
			id: 4,
			date: 8,
			month_en: "March",
			month_sw: "Machi",
			title_en: "Nail Art Grower Training",
			title_sw: "Mafunzo ya Sanaa ya Kucha",
			excerpt_en: "Advanced nail design techniques",
			excerpt_sw: "Mbinu za juu za sanaa ya kucha",
			location_en: "Practice Center",
			location_sw: "Kituo cha Mafunzo",
			capacity: 60,
			category_en: "Training",
			category_sw: "Mafunzo",
		},
	];

	const getTitle = (event) =>
		i18n.language === "sw" ? event.title_sw : event.title_en;
	const getExcerpt = (event) =>
		i18n.language === "sw" ? event.excerpt_sw : event.excerpt_en;
	const getMonth = (event) =>
		i18n.language === "sw" ? event.month_sw : event.month_en;
	const getLocation = (event) =>
		i18n.language === "sw" ? event.location_sw : event.location_en;
	const getCategory = (event) =>
		i18n.language === "sw" ? event.category_sw : event.category_en;

	return (
		<section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 md:px-6">
				{/* Section Header */}
				<div className="mb-12 md:mb-16">
					<div className="inline-flex items-center gap-2 mb-5">
						<span className="w-8 h-0.5 bg-[#EE048B]" />
						<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
							{i18n.language === "sw" ? "Matukio Yajayo" : "Upcoming Events"}
						</span>
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						{i18n.language === "sw"
							? "Matukio na Ratiba za Chuo"
							: "College Events & Workshops"}
					</h2>
					<p className="text-base md:text-lg text-gray-600 max-w-2xl">
						{i18n.language === "sw"
							? "Jiandikishe kwa matukio yajayo na jifunze mafunzo mapya."
							: "Register for upcoming events and learn new skills."}
					</p>
				</div>

				{/* Gradient Background with Events */}
				<style>{`
					@keyframes float {
						0%, 100% { transform: translateY(0px) translateX(0px); }
						25% { transform: translateY(-10px) translateX(5px); }
						50% { transform: translateY(-5px) translateX(-5px); }
						75% { transform: translateY(-15px) translateX(10px); }
					}
					@keyframes sparkle {
						0%, 100% { opacity: 0; transform: scale(0); }
						50% { opacity: 1; transform: scale(1); }
					}
					@keyframes shimmer {
						0% { background-position: -1000px 0; }
						100% { background-position: 1000px 0; }
					}
					.float-animation {
						animation: float 6s ease-in-out infinite;
					}
					.sparkle-animation {
						animation: sparkle 2s ease-in-out infinite;
					}
					.shimmer-animation {
						background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
						background-size: 1000px 100%;
						animation: shimmer 3s infinite;
					}
				`}</style>

				<div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 h-80">
					{/* Gradient Background */}
					<div className="absolute inset-0 bg-gradient-to-br from-[#2D1B4E] via-[#68226A] to-[#EE048B] opacity-90" />

					{/* Animated Background Shapes */}
					<div className="absolute inset-0 overflow-hidden">
						{/* Large circle top left */}
						<div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#EE048B]/30 to-transparent rounded-full float-animation blur-3xl" />

						{/* Medium circle top right */}
						<div
							className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br from-[#FFB6D9]/25 to-transparent rounded-full float-animation blur-2xl"
							style={{ animationDelay: "1s" }}
						/>

						{/* Small circle bottom center */}
						<div
							className="absolute -bottom-10 left-1/3 w-40 h-40 bg-gradient-to-br from-[#68226A]/40 to-transparent rounded-full float-animation blur-2xl"
							style={{ animationDelay: "2s" }}
						/>

						{/* Large circle bottom right */}
						<div
							className="absolute bottom-0 -right-24 w-80 h-80 bg-gradient-to-tl from-[#EE048B]/25 to-transparent rounded-full float-animation blur-3xl"
							style={{ animationDelay: "1.5s" }}
						/>
					</div>

					{/* Sparkle Effects */}
					<div className="absolute inset-0 overflow-hidden">
						{sparkles.map((sparkle) => (
							<div
								key={sparkle.id}
								className="absolute sparkle-animation"
								style={{
									width: "4px",
									height: "4px",
									backgroundColor: "#FFB6D9",
									borderRadius: "50%",
									boxShadow: "0 0 8px #FFB6D9",
									left: `${sparkle.left}%`,
									top: `${sparkle.top}%`,
									animationDelay: `${sparkle.delay}s`,
								}}
							/>
						))}
					</div>

					{/* Shimmer Overlay */}
					<div className="absolute inset-0 shimmer-animation opacity-20" />

					{/* Events Grid Overlay */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full p-6 md:p-8 max-w-4xl mx-auto">
							{events.map((event) => (
								<div
									key={event.id}
									className="group relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md border border-white/40 rounded-lg p-4 hover:from-white/25 hover:to-white/10 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
									{/* Date Circle */}
									<div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#FFB6D9] to-[#EE048B] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 border-2 border-white/50">
										<div className="text-center">
											<div className="text-white font-black text-xl drop-shadow-lg">
												{event.date}
											</div>
										</div>
									</div>

									{/* Content */}
									<div className="pt-2">
										<div className="text-white/80 text-xs font-semibold mb-2 uppercase tracking-widest">
											{getMonth(event)}
										</div>
										<h3 className="text-white font-bold text-sm leading-tight group-hover:text-[#FFB6D9] transition-colors duration-300 line-clamp-2 drop-shadow">
											{getTitle(event)}
										</h3>
									</div>

									{/* Hover reveal button */}
									<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 rounded-b-lg">
										<button className="w-full text-xs font-bold text-white bg-gradient-to-r from-[#EE048B] to-[#68226A] rounded py-1.5 hover:shadow-lg transition-all duration-300 border border-white/30">
											{i18n.language === "sw" ? "Tafauti" : "View Details"}
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Events Details Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{events.map((event) => (
						<div
							key={event.id}
							className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#EE048B]">
							{/* Date Badge */}
							<div className="relative h-40 bg-gradient-to-br from-[#EE048B] via-[#68226A] to-[#3D1145] flex items-center justify-center overflow-hidden">
								{/* Decorative circles */}
								<div className="absolute inset-0 opacity-10">
									<div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
									<div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
								</div>

								{/* Date Display */}
								<div className="relative text-center">
									<div className="text-6xl font-black text-white">
										{event.date}
									</div>
									<div className="text-white/80 font-bold text-sm uppercase tracking-widest">
										{getMonth(event)}
									</div>
								</div>
							</div>

							{/* Content */}
							<div className="p-6 md:p-8">
								{/* Category badge */}
								<div className="inline-block mb-4">
									<span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EE048B]/10 text-[#EE048B] uppercase tracking-widest">
										{getCategory(event)}
									</span>
								</div>

								{/* Title */}
								<h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#EE048B] transition-colors duration-300 leading-tight">
									{getTitle(event)}
								</h3>

								{/* Description */}
								<p className="text-gray-600 text-sm mb-5">
									{getExcerpt(event)}
								</p>

								{/* Info row */}
								<div className="flex flex-col gap-3 mb-6 text-sm text-gray-600">
									<div className="flex items-center gap-2">
										<MapPin
											size={16}
											className="text-[#EE048B] flex-shrink-0"
										/>
										<span>{getLocation(event)}</span>
									</div>
									<div className="flex items-center gap-2">
										<Users size={16} className="text-[#EE048B] flex-shrink-0" />
										<span>
											{i18n.language === "sw"
												? `Uwezo: ${event.capacity}`
												: `Capacity: ${event.capacity}`}
										</span>
									</div>
								</div>

								{/* Action buttons */}
								<div className="flex gap-3">
									<button className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn">
										{i18n.language === "sw" ? "Fungua" : "Open"}
										<ArrowRight
											size={16}
											className="group-hover/btn:translate-x-1 transition-transform"
										/>
									</button>
									<button className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-[#EE048B] text-[#EE048B] font-bold py-3 px-4 rounded-lg hover:bg-[#EE048B] hover:text-white transition-all duration-300">
										{i18n.language === "sw" ? "Jiandikishe" : "Register"}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Events Button */}
				<div className="flex justify-center mt-12">
					<button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group/all">
						{i18n.language === "sw"
							? "Angalia Matukio Yote"
							: "View All Events"}
						<ArrowRight
							size={20}
							className="group-hover/all:translate-x-1 transition-transform"
						/>
					</button>
				</div>
			</div>
		</section>
	);
}
