import { useTranslation } from "react-i18next";
import { MapPin, Users, Award, ArrowRight } from "lucide-react";
import courseImage from "../../assets/images/course.png";

export default function Gallery() {
	const { i18n } = useTranslation();

	const images = [
		{
			id: 1,
			title_en: "Hair Styling Salon",
			title_sw: "Saluni ya Ususi",
			description_en: "Professional salon setup",
			description_sw: "Chumba cha ususi cha kisasa",
			colSpan: "lg:col-span-2",
			rowSpan: "lg:row-span-1",
			height: "h-48",
		},
		{
			id: 2,
			title_en: "Makeup Artistry",
			title_sw: "Sanaa ya Makeup",
			description_en: "Advanced makeup techniques",
			description_sw: "Mbinu za juu za makeup",
			colSpan: "lg:col-span-1",
			rowSpan: "lg:row-span-2",
			height: "h-96",
		},
		{
			id: 3,
			title_en: "Fashion Design",
			title_sw: "Muundo wa Mavazi",
			description_en: "Creative design workspace",
			description_sw: "Chumba cha muundo",
			colSpan: "lg:col-span-1",
			rowSpan: "lg:row-span-1",
			height: "h-48",
		},
		{
			id: 4,
			title_en: "Beauty Therapy",
			title_sw: "Tiba ya Urembo",
			description_en: "Relaxation and wellness",
			description_sw: "Nafuu na afya",
			colSpan: "lg:col-span-1",
			rowSpan: "lg:row-span-1",
			height: "h-48",
		},
		{
			id: 5,
			title_en: "Nail Art Studio",
			title_sw: "Studio ya Sanaa ya Kucha",
			description_en: "Precision nail design",
			description_sw: "Sanaa ya kucha ya hali ya juu",
			colSpan: "lg:col-span-1",
			rowSpan: "lg:row-span-1",
			height: "h-48",
		},
		{
			id: 6,
			title_en: "Classroom",
			title_sw: "Darasa",
			description_en: "Modern learning space",
			description_sw: "Mazingira ya kujifunza",
			colSpan: "lg:col-span-1",
			rowSpan: "lg:row-span-1",
			height: "h-48",
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header with View All Button */}
				<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
					<div className="mb-8 md:mb-0">
						<div className="inline-flex items-center gap-2 mb-5">
							<span className="w-8 h-0.5 bg-[#EE048B]" />
							<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
								{i18n.language === "sw" ? "Mahali Pa Mafunzo" : "Facilities"}
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							{i18n.language === "sw" ? "Gpicha za Chuo" : "College Gallery"}
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl">
							{i18n.language === "sw"
								? "Jifunza katika kituo kinachokuwa na vifaa vya kaisasa"
								: "Explore our world-class facilities and vibrant learning community"}
						</p>
					</div>

					{/* View All Button */}
					<button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 group whitespace-nowrap mt-4 md:mt-0">
						{i18n.language === "sw" ? "Angalia Zote" : "View All Gallery"}
						<ArrowRight
							size={18}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>
				</div>

				{/* Masonry Gallery Grid - 4 Columns */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 auto-rows-max">
					{images.map((img) => (
						<div
							key={img.id}
							className={`${img.colSpan} ${img.rowSpan} group relative rounded-xl overflow-hidden`}>
							{/* Image Container */}
							<div
								className={`relative bg-white rounded-xl overflow-hidden flex flex-col ${img.height}`}>
								{/* Background Image */}
								<img
									src={courseImage}
									alt={i18n.language === "sw" ? img.title_sw : img.title_en}
									className="absolute inset-0 w-full h-full object-cover"
								/>

								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

								{/* Content */}
								<div className="absolute inset-0 flex flex-col justify-between p-6">
									{/* Top - Tag */}
									<div className="flex justify-end">
										<span className="inline-block bg-[#EE048B] text-white text-xs font-bold px-3 py-1 rounded-full">
											{i18n.language === "sw" ? "Chaguo" : "Featured"}
										</span>
									</div>

									{/* Bottom - Title & Description */}
									<div>
										<h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">
											{i18n.language === "sw" ? img.title_sw : img.title_en}
										</h3>
										<p className="text-white/80 text-sm drop-shadow">
											{i18n.language === "sw"
												? img.description_sw
												: img.description_en}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Additional Info */}
				<div className="bg-gradient-to-r from-[#68226A] to-[#EE048B] rounded-xl p-8 md:p-12">
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
