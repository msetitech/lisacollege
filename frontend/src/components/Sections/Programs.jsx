import { useTranslation } from "react-i18next";
import {
	ArrowRight,
	Clock,
	DollarSign,
	Star,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import courseImage from "../../assets/images/course.png";

export default function Programs() {
	const { t, i18n } = useTranslation();
	const scrollContainerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [autoPlay, setAutoPlay] = useState(true);

	const programs = [
		{
			id: 1,
			title_en: "Hair dressing, Makeup & Styling",
			title_sw: "Ususi, Makeup & Styling",
			description_en:
				"6 months comprehensive program in hair dressing and makeup",
			description_sw: "Programu ya miezi 6 ya kina katika ususi na makeup",
			price: "600,000",
			hostelPrice: "780,000",
			duration: "6 Months",
			duration_sw: "Miezi 6",
			rating: 4.8,
			reviews: 245,
			tag: "Popular",
		},
		{
			id: 2,
			title_en: "Hair dressing, Makeup & Styling",
			title_sw: "Ususi, Makeup & Styling",
			description_en: "3 months program in hair dressing and makeup",
			description_sw: "Programu ya miezi 3 katika ususi na makeup",
			price: "300,000",
			hostelPrice: "390,000",
			duration: "3 Months",
			duration_sw: "Miezi 3",
			rating: 4.8,
			reviews: 189,
			tag: "Trending",
		},
		{
			id: 3,
			title_en: "Hair Dressing Only",
			title_sw: "Ususi Pekee",
			description_en: "2 months specialized haircut and styling course",
			description_sw: "Programu ya miezi 2 ya ususi na kuboresha nywele",
			price: "250,000",
			hostelPrice: "310,000",
			duration: "2 Months",
			duration_sw: "Miezi 2",
			rating: 4.7,
			reviews: 156,
			tag: "Best Seller",
		},
		{
			id: 4,
			title_en: "Full Makeup & Hair Styling",
			title_sw: "Makeup Kamili & Hair Styling",
			description_en: "1 month intensive program combining makeup and hair",
			description_sw: "Programu ya mwezi 1 ya makupoto na ususi",
			price: "150,000",
			hostelPrice: "180,000",
			duration: "1 Month",
			duration_sw: "Mwezi 1",
			rating: 4.9,
			reviews: 312,
			tag: "Premium",
		},
		{
			id: 5,
			title_en: "Nail Art",
			title_sw: "Urembo wa Kucha",
			description_en: "Learn professional nail art and nail care techniques",
			description_sw: "Jifunze sanaa ya kucha na huduma ya kucha",
			price: "300,000",
			hostelPrice: "360,000",
			duration: "2 Months",
			duration_sw: "Miezi 2",
			rating: 4.8,
			reviews: 127,
			tag: "New",
		},
		{
			id: 6,
			title_en: "Decoration (Event Décor)",
			title_sw: "Mapambo (Decoration)",
			description_en: "Learn event decoration and interior styling",
			description_sw: "Jifunze mapambo ya matukio na styling ya ndani",
			price: "400,000",
			hostelPrice: "460,000",
			duration: "2 Months",
			duration_sw: "Miezi 2",
			rating: 4.9,
			reviews: 98,
			tag: "Popular",
		},
		{
			id: 7,
			title_en: "Cake Decoration",
			title_sw: "Mapambo ya Keki",
			description_en: "Professional cake decorating and baking techniques",
			description_sw: "Mbinu za kitaalamu za kupamba keki",
			price: "300,000",
			hostelPrice: "330,000",
			duration: "1 Month",
			duration_sw: "Mwezi 1",
			rating: 4.7,
			reviews: 89,
			tag: "Best Seller",
		},
		{
			id: 8,
			title_en: "Fashion Design, Sewing & Cloth Technology",
			title_sw: "Ubunifu wa Mavazi, Ushonaji & Teknolojia ya Nguo",
			description_en: "Complete fashion design and garment production course",
			description_sw: "Kozi kamili ya muundo wa mavazi na uzalishaji",
			price: "600,000",
			hostelPrice: "780,000",
			duration: "6 Months",
			duration_sw: "Miezi 6",
			rating: 5.0,
			reviews: 234,
			tag: "Premium",
		},
		{
			id: 9,
			title_en: "Henna (Hina/Piko)",
			title_sw: "Henna (Hina/Piko)",
			description_en:
				"Learn traditional and modern henna application techniques",
			description_sw: "Jifunze mbinu za kuandika henna",
			price: "150,000",
			hostelPrice: "180,000",
			duration: "1 Month",
			duration_sw: "Mwezi 1",
			rating: 4.6,
			reviews: 76,
			tag: "Popular",
		},
	];

	const CARD_WIDTH = 340;
	const GAP = 24;

	const getTitle = (program) =>
		i18n.language === "sw" ? program.title_sw : program.title_en;
	const getDescription = (program) =>
		i18n.language === "sw" ? program.description_sw : program.description_en;
	const getDuration = (program) =>
		i18n.language === "sw" ? program.duration_sw : program.duration;

	const scrollToIndex = (index) => {
		if (scrollContainerRef.current) {
			const scrollPosition = index * (CARD_WIDTH + GAP);
			scrollContainerRef.current.scrollTo({
				left: scrollPosition,
				behavior: "smooth",
			});
			setCurrentIndex(index);
		}
	};

	const handleNext = () => {
		const nextIndex = (currentIndex + 1) % programs.length;
		scrollToIndex(nextIndex);
		setAutoPlay(true);
	};

	const handlePrev = () => {
		const prevIndex = (currentIndex - 1 + programs.length) % programs.length;
		scrollToIndex(prevIndex);
		setAutoPlay(true);
	};

	// Auto-play carousel
	useEffect(() => {
		if (!autoPlay) return;

		const interval = setInterval(() => {
			const nextIndex = (currentIndex + 1) % programs.length;
			if (scrollContainerRef.current) {
				const scrollPosition = nextIndex * (CARD_WIDTH + GAP);
				scrollContainerRef.current.scrollTo({
					left: scrollPosition,
					behavior: "smooth",
				});
				setCurrentIndex(nextIndex);
			}
		}, 5000); // Change card every 5 seconds

		return () => clearInterval(interval);
	}, [currentIndex, autoPlay, programs.length]);

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{t("programs.title")}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{t("programs.subtitle")}
					</p>
				</div>

				{/* Carousel Container */}
				<div className="relative">
					{/* Previous Button */}
					<button
						onClick={handlePrev}
						className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-[#68226A] hover:bg-[#EE048B] text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
						aria-label="Previous course">
						<ChevronLeft className="w-6 h-6" />
					</button>

					{/* Course Cards Container */}
					<div
						ref={scrollContainerRef}
						className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
						style={{
							scrollBehavior: "smooth",
							scrollbarWidth: "none",
							msOverflowStyle: "none",
						}}>
						<style>{`div::-webkit-scrollbar { display: none; }`}</style>
						{programs.map((program) => (
							<div
								key={program.id}
								className="flex flex-col flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#EE048B] transition-all duration-300 cursor-pointer snap-start group">
								{/* Course Image Container */}
								<div className="relative h-48 overflow-hidden bg-gray-200">
									<img
										src={courseImage}
										alt={getTitle(program)}
										className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
									/>

									{/* Tag Pill - Top Left */}
									<div className="absolute top-3 left-3">
										<span className="inline-block bg-[#EE048B] text-white text-xs font-bold px-3 py-1 rounded-full">
											{program.tag}
										</span>
									</div>

									{/* Star Rating - Top Right */}
									<div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md">
										<div className="flex items-center gap-1">
											<Star
												className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
												size={16}
											/>
											<span className="text-xs font-bold text-gray-900">
												{program.rating}
											</span>
										</div>
									</div>
								</div>

								{/* Course Content */}
								<div className="p-4 flex flex-col flex-grow">
									<h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
										{getTitle(program)}
									</h3>
									<p className="text-gray-600 text-xs mb-3 line-clamp-2">
										{getDescription(program)}
									</p>

									{/* Row 1: Duration & Students */}
									<div className="grid grid-cols-2 gap-2 mb-3">
										<div className="flex items-center gap-1 bg-gray-50 rounded px-2 py-1.5">
											<Clock className="w-3 h-3 text-[#68226A]" />
											<span className="text-xs font-bold text-gray-900">
												{getDuration(program)}
											</span>
										</div>
										<div className="flex items-center gap-1 bg-blue-50 rounded px-2 py-1.5">
											<Star className="w-3 h-3 text-[#FFC107]" />
											<span className="text-xs font-bold text-gray-900">
												{program.reviews}{" "}
												{i18n.language === "sw" ? "wanafunzi" : "students"}
											</span>
										</div>
									</div>

									{/* Row 2: Prices */}
									<div className="grid grid-cols-2 gap-2 mb-4">
										<div className="bg-blue-50 rounded px-2 py-1.5">
											<p className="text-xs text-gray-600">
												{i18n.language === "sw" ? "Ada:" : "Fee:"}
											</p>
											<p className="text-xs font-bold text-gray-900">
												TZS {program.price}
											</p>
										</div>
										<div className="bg-green-50 rounded px-2 py-1.5">
											<p className="text-xs text-gray-600">
												{" "}
												{i18n.language === "sw"
													? "Ada + Hostel:"
													: "Fee + Hostel:"}
											</p>
											<p className="text-xs font-bold text-[#EE048B]">
												TZS {program.hostelPrice}
											</p>
										</div>
									</div>

									{/* Learn More Button */}
									<button className="w-full inline-flex items-center justify-center gap-2 text-[#EE048B] font-bold hover:text-[#68226A] transition-colors duration-300 py-2 px-2 rounded text-sm hover:bg-gray-50 mt-auto">
										{t("programs.learnMore")}
										<ArrowRight className="w-3 h-3" />
									</button>
								</div>
							</div>
						))}
					</div>

					{/* Next Button */}
					<button
						onClick={handleNext}
						className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-[#68226A] hover:bg-[#EE048B] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 mt-auto"
						aria-label="Next course">
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</section>
	);
}
