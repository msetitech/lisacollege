import { useTranslation } from "react-i18next";

export default function Gallery() {
	const { t } = useTranslation();

	const images = [
		{
			id: 1,
			title_en: "Live Salon",
			title_sw: "Saluni ya Halisi",
			description_en: "Students practice on real clients",
			description_sw: "Wanafunzi wanafanya kazi na wateja halisi",
			color: "from-purple-500 to-pink-500",
		},
		{
			id: 2,
			title_en: "Makeup Lab",
			title_sw: "Chumba cha Makeup",
			description_en: "State-of-the-art makeup studio",
			description_sw: "Chumba cha makeup cha kisasa",
			color: "from-pink-500 to-red-500",
		},
		{
			id: 3,
			title_en: "Classroom",
			title_sw: "Darasa",
			description_en: "Modern learning environment",
			description_sw: "Mazingira ya kujifunza ya kisasa",
			color: "from-red-500 to-orange-500",
		},
		{
			id: 4,
			title_en: "Hostel",
			title_sw: "Hosteli",
			description_en: "Comfortable student accommodation",
			description_sw: "Makazi salama kwa wanafunzi",
			color: "from-orange-500 to-yellow-500",
		},
		{
			id: 5,
			title_en: "Event Venue",
			title_sw: "Mahali pa Matukio",
			description_en: "Professional showcase space",
			description_sw: "Mahali pa kuonyesha kazi",
			color: "from-blue-500 to-purple-500",
		},
		{
			id: 6,
			title_en: "Fashion Studio",
			title_sw: "Studio ya Mitindo",
			description_en: "Creative design workspace",
			description_sw: "Mahali pa muundo wa mitindo",
			color: "from-green-500 to-blue-500",
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						📸 {t("environment.label")}
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Explore our world-class facilities and vibrant learning community
					</p>
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{images.map((img) => (
						<div
							key={img.id}
							className={`bg-gradient-to-br ${img.color} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer`}>
							{/* Placeholder Image */}
							<div className="h-48 md:h-56 bg-white/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
								<div className="text-center z-10">
									<div className="text-4xl mb-2">📷</div>
									<p className="text-white font-semibold text-sm opacity-90">
										Gallery Image
									</p>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/60 transition-all duration-300"></div>
							</div>

							{/* Content */}
							<div className="p-4 bg-white">
								<h3 className="font-bold text-gray-900 mb-1">{img.title_en}</h3>
								<p className="text-gray-600 text-sm">{img.description_en}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
