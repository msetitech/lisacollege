import { useTranslation } from "react-i18next";
import { MapPin, Users, Award } from "lucide-react";

export default function Gallery() {
	const { t, i18n } = useTranslation();

	const images = [
		{
			id: 1,
			title_en: "Live Salon",
			title_sw: "Saluni ya Halisi",
			description_en: "Students practice on real clients",
			description_sw: "Wanafunzi wanafanya kazi na wateja halisi",
			icon: "✨",
			tag_en: "Professional",
			tag_sw: "Mtaalamu",
		},
		{
			id: 2,
			title_en: "Makeup Lab",
			title_sw: "Chumba cha Makeup",
			description_en: "State-of-the-art makeup studio",
			description_sw: "Chumba cha makeup cha kisasa",
			icon: "💄",
			tag_en: "Modern",
			tag_sw: "Kisasa",
		},
		{
			id: 3,
			title_en: "Classroom",
			title_sw: "Darasa",
			description_en: "Modern learning environment",
			description_sw: "Mazingira ya kujifunza ya kisasa",
			icon: "📚",
			tag_en: "Learning",
			tag_sw: "Maandalizi",
		},
		{
			id: 4,
			title_en: "Hostel",
			title_sw: "Hosteli",
			description_en: "Comfortable student accommodation",
			description_sw: "Makazi salama kwa wanafunzi",
			icon: "🏠",
			tag_en: "Comfort",
			tag_sw: "Kutuliana",
		},
		{
			id: 5,
			title_en: "Event Venue",
			title_sw: "Mahali pa Matukio",
			description_en: "Professional showcase space",
			description_sw: "Mahali pa kuonyesha kazi",
			icon: "🎭",
			tag_en: "Creative",
			tag_sw: "Sanaa",
		},
		{
			id: 6,
			title_en: "Fashion Studio",
			title_sw: "Studio ya Mitindo",
			description_en: "Creative design workspace",
			description_sw: "Mahali pa muundo wa mitindo",
			icon: "👗",
			tag_en: "Design",
			tag_sw: "Muundo",
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{t("environment.label")}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{i18n.language === "sw"
							? "Jifunza katika kituo kinachokuwa na vifaa vya kaisasa"
							: "Explore our world-class facilities and vibrant learning community"}
					</p>
				</div>

				{/* Gallery Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{images.map((img) => (
						<div
							key={img.id}
							className="group cursor-pointer h-full transition-all duration-300">
							{/* Card Container */}
							<div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
								{/* Image Container */}
								<div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#68226A]/10 to-[#EE048B]/10">
									{/* Background with Icon */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-8xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
											{img.icon}
										</div>
									</div>

									{/* Gradient Overlay on Hover */}
									<div className="absolute inset-0 bg-gradient-to-t from-[#68226A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

									{/* Large Icon */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-6xl group-hover:scale-110 transition-transform duration-300">
											{img.icon}
										</div>
									</div>

									{/* Tag */}
									<div className="absolute top-4 right-4">
										<span className="inline-block bg-[#EE048B] text-white text-xs font-bold px-3 py-1 rounded-full">
											{i18n.language === "sw" ? img.tag_sw : img.tag_en}
										</span>
									</div>
								</div>

								{/* Content */}
								<div className="p-6 flex-grow flex flex-col">
									<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#EE048B] transition-colors duration-300">
										{i18n.language === "sw" ? img.title_sw : img.title_en}
									</h3>
									<p className="text-gray-600 text-sm mb-4 flex-grow">
										{i18n.language === "sw"
											? img.description_sw
											: img.description_en}
									</p>

									{/* Bottom Info */}
									<div className="flex items-center gap-2 text-[#68226A] font-semibold text-sm pt-4 border-t border-gray-100 group-hover:border-[#EE048B] transition-colors duration-300">
										<div className="w-2 h-2 rounded-full bg-[#EE048B]"></div>
										<span>{i18n.language === "sw" ? "Tembea" : "Explore"}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Additional Info */}
				<div className="mt-16 bg-gradient-to-r from-[#68226A] to-[#EE048B] rounded-xl p-8 md:p-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
						<div className="text-center">
							<Award className="w-12 h-12 mx-auto mb-3 opacity-80" />
							<h4 className="text-lg font-bold mb-2">
								{i18n.language === "sw" ? "Uzamili" : "World Class"}
							</h4>
							<p className="text-sm opacity-90">
								{i18n.language === "sw"
									? "Vifaa vya kiwango cha kimataifa"
									: "International standard facilities"}
							</p>
						</div>
						<div className="text-center">
							<Users className="w-12 h-12 mx-auto mb-3 opacity-80" />
							<h4 className="text-lg font-bold mb-2">
								{i18n.language === "sw" ? "Jamii" : "Community"}
							</h4>
							<p className="text-sm opacity-90">
								{i18n.language === "sw"
									? "Wanafunzi wengi kila sasa"
									: "Growing student community"}
							</p>
						</div>
						<div className="text-center">
							<MapPin className="w-12 h-12 mx-auto mb-3 opacity-80" />
							<h4 className="text-lg font-bold mb-2">
								{i18n.language === "sw" ? "Mahali" : "Location"}
							</h4>
							<p className="text-sm opacity-90">
								{i18n.language === "sw"
									? "Katikati ya mjini Dar"
									: "Center of Dar es Salaam"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
