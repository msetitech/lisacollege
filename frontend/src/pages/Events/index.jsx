import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
	Calendar,
	MapPin,
	Users,
	ArrowRight,
	Clock,
	Filter,
	Search,
	ChevronLeft,
	ChevronRight,
	Sparkles,
	Award,
	Brush,
	GraduationCap,
	BookOpen,
	Trophy,
	Briefcase,
} from "lucide-react";

export default function EventsPage() {
	const { t, i18n } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [searchQuery, setSearchQuery] = useState("");
	const itemsPerPage = 6;

	// All events data
	const allEvents = [
		{
			id: 1,
			date: 19,
			month_en: "February",
			month_sw: "Februari",
			year: 2026,
			title_en: "Cosmetology Workshop National",
			title_sw: "Warsha ya Cosmetology Kitaifa",
			excerpt_en:
				"Learn advanced makeup and beauty techniques from industry professionals",
			excerpt_sw:
				"Jifunze mbinu za makeup na urembo wa juu kutoka kwa wataalam wa sekta",
			description_en:
				"Join us for an intensive full-day workshop covering the latest trends in cosmetology, makeup application, and beauty techniques. Our expert instructors will guide you through hands-on sessions.",
			description_sw:
				"Jiunge nasi kwa warsha kamili ya siku moja inayofunika mitindo ya hivi karibuni katika cosmetology, matumizi ya makeup, na mbinu za urembo. Waalimu wetu wataalam watakuongoza kupitia vikao vya vitendo.",
			location_en: "Main Hall, Lisa College",
			location_sw: "Ukumbi Mkuu, Chuo cha Lisa",
			capacity: 150,
			registered: 87,
			category: "workshop",
			time: "9:00 AM - 5:00 PM",
			fee: 50000,
			featured: true,
		},
		{
			id: 2,
			date: 23,
			month_en: "February",
			month_sw: "Februari",
			year: 2026,
			title_en: "Hair Styling Masterclass Series",
			title_sw: "Mfululizo wa Darasa Kuu la Ususi",
			excerpt_en: "Professional hair styling techniques for all skill levels",
			excerpt_sw: "Mbinu za ususi wa kitaalamu kwa viwango vyote vya ujuzi",
			description_en:
				"A comprehensive 3-day masterclass series focusing on advanced hair styling, braiding, wig installation, and salon management. Perfect for both beginners and professionals looking to upgrade their skills.",
			description_sw:
				"Mfululizo wa siku 3 wa darasa kuu unazingatia ususi wa juu, kusuka, ufungaji wa wigi, na usimamizi wa saluni. Kamili kwa wanaoanza na wataalam wanaotafuta kuboresha ujuzi wao.",
			location_en: "Studio A & B",
			location_sw: "Studio A na B",
			capacity: 80,
			registered: 65,
			category: "masterclass",
			time: "10:00 AM - 4:00 PM",
			fee: 120000,
			featured: true,
		},
		{
			id: 3,
			date: 2,
			month_en: "March",
			month_sw: "Machi",
			year: 2026,
			title_en: "Annual Graduation & Awards Ceremony",
			title_sw: "Sherehe ya Uzamili na Tuzo za Kila Mwaka",
			excerpt_en:
				"Celebrate achievements and success with our graduating students",
			excerpt_sw:
				"Sherehekea mafanikio na ushindi pamoja na wanafunzi wetu wanaomaliza",
			description_en:
				"Join us for our prestigious annual graduation ceremony where we celebrate the achievements of our students. The event includes awards presentation, speeches, and networking opportunities.",
			description_sw:
				"Jiunge nasi kwa sherehe yetu ya kila mwaka ya uzamili ambapo tunasherehekea mafanikio ya wanafunzi wetu. Tukio hilo linajumuisha utoaji wa tuzo, hotuba, na fursa za kuunda mitandao.",
			location_en: "Main Auditorium",
			location_sw: "Auditorium Kuu",
			capacity: 300,
			registered: 245,
			category: "graduation",
			time: "2:00 PM - 6:00 PM",
			fee: 0,
			featured: true,
		},
		{
			id: 4,
			date: 8,
			month_en: "March",
			month_sw: "Machi",
			year: 2026,
			title_en: "Advanced Nail Art Training",
			title_sw: "Mafunzo ya Juu ya Sanaa ya Kucha",
			excerpt_en: "Master advanced nail design and decoration techniques",
			excerpt_sw: "Ubingwa wa mbinu za juu za muundo na mapambo ya kucha",
			description_en:
				"An intensive 2-day training program covering gel nails, acrylic application, 3D nail art, and the latest trends in nail decoration. All materials included.",
			description_sw:
				"Programu ya mafunzo ya siku 2 inayofunika kucha za gel, matumizi ya acrylic, sanaa ya kucha ya 3D, na mitindo ya hivi karibuni katika mapambo ya kucha. Vifaa vyote vimejumuishwa.",
			location_en: "Practice Center",
			location_sw: "Kituo cha Mazoezi",
			capacity: 60,
			registered: 42,
			category: "training",
			time: "9:00 AM - 3:00 PM",
			fee: 80000,
			featured: false,
		},
		{
			id: 5,
			date: 15,
			month_en: "March",
			month_sw: "Machi",
			year: 2026,
			title_en: "Bridal Makeup & Styling Workshop",
			title_sw: "Warsha ya Makeup na Ususi wa Bibi Arusi",
			excerpt_en: "Specialize in bridal beauty and styling services",
			excerpt_sw: "Utaalamu katika huduma za urembo na ususi wa bibi arusi",
			description_en:
				"Learn the art of bridal makeup, hairstyling, and complete bridal transformation. Includes traditional and modern techniques, color theory, and client consultation.",
			description_sw:
				"Jifunze sanaa ya makeup wa bibi arusi, ususi wa nywele, na mabadiliko kamili ya bibi arusi. Inajumuisha mbinu za kitamaduni na za kisasa, nadharia ya rangi, na ushauri wa mteja.",
			location_en: "Bridal Studio",
			location_sw: "Studio la Bibi Arusi",
			capacity: 50,
			registered: 38,
			category: "workshop",
			time: "8:00 AM - 5:00 PM",
			fee: 95000,
			featured: false,
		},
		{
			id: 6,
			date: 22,
			month_en: "March",
			month_sw: "Machi",
			year: 2026,
			title_en: "Fashion Design Expo & Competition",
			title_sw: "Maonyesho na Mashindano ya Muundo wa Mitindo",
			excerpt_en: "Showcase your creativity in our annual fashion competition",
			excerpt_sw:
				"Onyesha ubunifu wako katika mashindano yetu ya mitindo ya kila mwaka",
			description_en:
				"Annual fashion design competition featuring student work, industry guest judges, and prizes for top designs. Open to all fashion design students and alumni.",
			description_sw:
				"Mashindano ya kila mwaka ya muundo wa mitindo yanayoonyesha kazi za wanafunzi, waamuzi wageni wa sekta, na tuzo kwa miundo bora. Wazi kwa wanafunzi wote wa muundo wa mitindo na wahitimu.",
			location_en: "Exhibition Hall",
			location_sw: "Ukumbi wa Maonyesho",
			capacity: 200,
			registered: 156,
			category: "competition",
			time: "1:00 PM - 8:00 PM",
			fee: 30000,
			featured: false,
		},
		{
			id: 7,
			date: 5,
			month_en: "April",
			month_sw: "Aprili",
			year: 2026,
			title_en: "Entrepreneurship & Business Skills Seminar",
			title_sw: "Semina ya Ujasiriamali na Ujuzi wa Biashara",
			excerpt_en: "Learn how to start and grow your beauty business",
			excerpt_sw: "Jifunze jinsi ya kuanza na kukuza biashara yako ya urembo",
			description_en:
				"Comprehensive seminar on starting a beauty salon, marketing strategies, financial management, and building a client base. Guest speakers include successful salon owners.",
			description_sw:
				"Semina kamili kuhusu kuanzisha saluni ya urembo, mikakati ya masoko, usimamizi wa fedha, na kujenga msingi wa wateja. Wasemaji wageni ni pamoja na wamiliki wa saluni wenye mafanikio.",
			location_en: "Conference Room",
			location_sw: "Chumba cha Mkutano",
			capacity: 100,
			registered: 73,
			category: "seminar",
			time: "10:00 AM - 4:00 PM",
			fee: 40000,
			featured: false,
		},
		{
			id: 8,
			date: 12,
			month_en: "April",
			month_sw: "Aprili",
			year: 2026,
			title_en: "Skin Care & Facial Treatment Workshop",
			title_sw: "Warsha ya Utunzaji wa Ngozi na Matibabu ya Uso",
			excerpt_en: "Advanced techniques in skincare and facial treatments",
			excerpt_sw: "Mbinu za juu katika utunzaji wa ngozi na matibabu ya uso",
			description_en:
				"Detailed training on skin analysis, facial treatments, massage techniques, and product knowledge. Learn to provide professional spa-quality services.",
			description_sw:
				"Mafunzo ya kina kuhusu uchanganuzi wa ngozi, matibabu ya uso, mbinu za massage, na maarifa ya bidhaa. Jifunze kutoa huduma za ubora wa spa wa kitaalamu.",
			location_en: "Spa Training Center",
			location_sw: "Kituo cha Mafunzo ya Spa",
			capacity: 40,
			registered: 28,
			category: "workshop",
			time: "9:00 AM - 2:00 PM",
			fee: 70000,
			featured: false,
		},
	];

	// Categories with Lucide icons
	const categories = [
		{
			value: "all",
			label_en: "All Events",
			label_sw: "Matukio Yote",
			icon: Calendar,
		},
		{
			value: "workshop",
			label_en: "Workshops",
			label_sw: "Warsha",
			icon: Brush,
		},
		{
			value: "masterclass",
			label_en: "Masterclasses",
			label_sw: "Madarasa Makuu",
			icon: Sparkles,
		},
		{
			value: "graduation",
			label_en: "Graduations",
			label_sw: "Uzamili",
			icon: GraduationCap,
		},
		{
			value: "training",
			label_en: "Training",
			label_sw: "Mafunzo",
			icon: BookOpen,
		},
		{
			value: "competition",
			label_en: "Competitions",
			label_sw: "Mashindano",
			icon: Trophy,
		},
		{
			value: "seminar",
			label_en: "Seminars",
			label_sw: "Semina",
			icon: Briefcase,
		},
	];

	// Filter and search events
	const filteredEvents = allEvents.filter((event) => {
		const matchesCategory =
			selectedCategory === "all" || event.category === selectedCategory;
		const matchesSearch =
			searchQuery === "" ||
			(i18n.language === "sw" ? event.title_sw : event.title_en)
				.toLowerCase()
				.includes(searchQuery.toLowerCase()) ||
			(i18n.language === "sw" ? event.excerpt_sw : event.excerpt_en)
				.toLowerCase()
				.includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Pagination
	const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedEvents = filteredEvents.slice(
		startIndex,
		startIndex + itemsPerPage,
	);

	// Featured events (for hero section)
	const featuredEvents = allEvents.filter((e) => e.featured);

	const handlePageChange = (page) => {
		setCurrentPage(Math.max(1, Math.min(page, totalPages)));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{/* Hero Section */}
			<section
				className="relative overflow-hidden pt-32 pb-16"
				style={{
					background:
						"linear-gradient(135deg, #68226A 0%, #4a1650 60%, #3d1245 100%)",
				}}>
				{/* Decorative circles */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
					<div className="absolute -top-20 -left-20 w-96 h-96 rounded-full border border-white/10" />
					<div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full border border-white/10" />
					<div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-white/10" />
				</div>

				<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
					<div className="inline-flex items-center gap-2 mb-6">
						<span className="w-8 h-0.5 bg-[#EE048B]" />
						<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
							{t("events.label")}
						</span>
						<span className="w-8 h-0.5 bg-[#EE048B]" />
					</div>

					<div className="flex items-center justify-center gap-4 mb-6">
						<Calendar size={56} className="text-[#EE048B]" />
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
							{t("events.heroTitle")}
						</h1>
					</div>

					<p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
						{t("events.heroDescription")}
					</p>
				</div>
			</section>

			{/* Main Events Section */}
			<section className="py-16 md:py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					{/* Upcoming Events Timeline - Featured Section */}
					<div className="mb-16">
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 mb-5">
								<span className="w-8 h-0.5 bg-[#EE048B]" />
								<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
									{t("events.nextUp")}
								</span>
								<span className="w-8 h-0.5 bg-[#EE048B]" />
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								{t("events.comingSoon")}
							</h2>
						</div>

						{/* Featured Events Grid - Top 3 */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							{featuredEvents.map((event) => {
								const categoryData = categories.find(
									(c) => c.value === event.category,
								);
								const CategoryIcon = categoryData?.icon || Calendar;

								return (
									<div
										key={event.id}
										className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 hover:border-[#EE048B] hover:shadow-xl transition-all duration-300 overflow-hidden">
										{/* Background decoration */}
										<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#EE048B]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

										{/* Header with icon and date */}
										<div className="flex items-start justify-between mb-4 relative z-10">
											<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#EE048B] to-[#68226A] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
												<CategoryIcon className="text-white" size={28} />
											</div>
											<div className="text-right">
												<div className="text-3xl font-black text-gray-900">
													{event.date}
												</div>
												<div className="text-xs font-bold text-gray-500 uppercase">
													{i18n.language === "sw"
														? event.month_sw
														: event.month_en}
												</div>
											</div>
										</div>

										{/* Category badge */}
										<div className="mb-3">
											<span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EE048B]/10 text-[#EE048B] uppercase tracking-wider">
												{i18n.language === "sw"
													? categoryData?.label_sw
													: categoryData?.label_en}
											</span>
										</div>

										{/* Title */}
										<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#EE048B] transition-colors line-clamp-2">
											{i18n.language === "sw" ? event.title_sw : event.title_en}
										</h3>

										{/* Excerpt */}
										<p className="text-sm text-gray-600 mb-4 line-clamp-2">
											{i18n.language === "sw"
												? event.excerpt_sw
												: event.excerpt_en}
										</p>

										{/* Quick info */}
										<div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
											<div className="flex items-center gap-1">
												<Clock size={12} className="text-[#EE048B]" />
												<span>{event.time.split(" - ")[0]}</span>
											</div>
											<div className="flex items-center gap-1">
												<Users size={12} className="text-[#EE048B]" />
												<span>
													{event.capacity - event.registered}{" "}
													{t("events.spotsLeft")}
												</span>
											</div>
										</div>

										{/* CTA */}
										<button className="w-full bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
											{t("events.register")}
											<ArrowRight size={16} />
										</button>

										{/* Accent line */}
										<div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#EE048B] to-[#68226A] group-hover:w-full transition-all duration-500 ease-out" />
									</div>
								);
							})}
						</div>
					</div>

					{/* Section Header with Filters */}
					<div className="mb-12">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
							<div>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
									{t("events.allEventsTitle")}
								</h2>
								<p className="text-gray-600">
									{t("events.showingResults", {
										showing: paginatedEvents.length,
										total: filteredEvents.length,
									})}
								</p>
							</div>

							{/* Search Bar */}
							<div className="relative w-full md:w-80">
								<Search
									className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
									size={20}
								/>
								<input
									type="text"
									placeholder={t("events.searchPlaceholder")}
									value={searchQuery}
									onChange={(e) => {
										setSearchQuery(e.target.value);
										setCurrentPage(1);
									}}
									className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 transition-all"
								/>
							</div>
						</div>

						{/* Category Filters */}
						<div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
							<Filter className="text-gray-400 flex-shrink-0" size={20} />
							{categories.map((cat) => {
								const IconComponent = cat.icon;
								return (
									<button
										key={cat.value}
										onClick={() => {
											setSelectedCategory(cat.value);
											setCurrentPage(1);
										}}
										className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
											selectedCategory === cat.value
												? "bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white shadow-lg"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}>
										<IconComponent size={16} />
										{i18n.language === "sw" ? cat.label_sw : cat.label_en}
									</button>
								);
							})}
						</div>
					</div>

					{/* Events Grid */}
					{filteredEvents.length > 0 ? (
						<>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
								{paginatedEvents.map((event) => {
									const categoryData = categories.find(
										(c) => c.value === event.category,
									);
									const CategoryIcon = categoryData?.icon || Calendar;

									return (
										<div
											key={event.id}
											className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#EE048B]">
											{/* Header with gradient and icon */}
											<div className="relative bg-gradient-to-br from-[#68226A] to-[#EE048B] p-6">
												{/* Icon circle */}
												<div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
													<CategoryIcon className="text-white" size={24} />
												</div>

												{/* Date */}
												<div className="mb-2">
													<div className="text-5xl font-black text-white mb-1">
														{event.date}
													</div>
													<div className="text-white/80 font-semibold text-sm uppercase tracking-widest">
														{i18n.language === "sw"
															? event.month_sw
															: event.month_en}{" "}
														{event.year}
													</div>
												</div>
											</div>

											{/* Content */}
											<div className="p-6">
												{/* Category & Fee row */}
												<div className="flex items-center justify-between mb-3">
													<span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EE048B]/10 text-[#EE048B] uppercase tracking-wider">
														{i18n.language === "sw"
															? categoryData?.label_sw
															: categoryData?.label_en}
													</span>
													{event.fee > 0 ? (
														<span className="text-sm font-bold text-[#68226A]">
															TShs. {event.fee.toLocaleString()}/=
														</span>
													) : (
														<span className="text-sm font-bold text-green-600">
															{t("events.free")}
														</span>
													)}
												</div>

												{/* Title */}
												<h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#EE048B] transition-colors duration-300 line-clamp-2 leading-tight">
													{i18n.language === "sw"
														? event.title_sw
														: event.title_en}
												</h3>

												{/* Excerpt */}
												<p className="text-gray-600 text-sm mb-4 line-clamp-2">
													{i18n.language === "sw"
														? event.excerpt_sw
														: event.excerpt_en}
												</p>

												{/* Info section */}
												<div className="space-y-2 mb-5">
													<div className="flex items-center gap-2 text-sm text-gray-600">
														<div className="w-5 h-5 rounded bg-[#EE048B]/10 flex items-center justify-center flex-shrink-0">
															<Clock size={12} className="text-[#EE048B]" />
														</div>
														<span className="text-xs">{event.time}</span>
													</div>
													<div className="flex items-center gap-2 text-sm text-gray-600">
														<div className="w-5 h-5 rounded bg-[#EE048B]/10 flex items-center justify-center flex-shrink-0">
															<MapPin size={12} className="text-[#EE048B]" />
														</div>
														<span className="text-xs line-clamp-1">
															{i18n.language === "sw"
																? event.location_sw
																: event.location_en}
														</span>
													</div>
													<div className="flex items-center gap-2 text-sm text-gray-600">
														<div className="w-5 h-5 rounded bg-[#EE048B]/10 flex items-center justify-center flex-shrink-0">
															<Users size={12} className="text-[#EE048B]" />
														</div>
														<span className="text-xs">
															{event.registered}/{event.capacity}{" "}
															{t("events.registered")}
														</span>
													</div>
												</div>

												{/* Action Buttons */}
												<div className="flex gap-2">
													<button className="flex-1 inline-flex items-center justify-center gap-1 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-2.5 px-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm">
														{t("events.register")}
														<ArrowRight
															size={14}
															className="group-hover:translate-x-1 transition-transform"
														/>
													</button>
													<button className="px-4 py-2.5 border-2 border-[#EE048B] text-[#EE048B] font-bold rounded-lg hover:bg-[#EE048B] hover:text-white transition-all duration-300 text-sm">
														{t("events.details")}
													</button>
												</div>
											</div>

											{/* Bottom accent bar */}
											<div className="h-1 bg-gradient-to-r from-[#68226A] via-[#EE048B] to-[#68226A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
										</div>
									);
								})}
							</div>

							{/* Pagination */}
							{totalPages > 1 && (
								<div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-gray-200">
									<button
										onClick={() => handlePageChange(currentPage - 1)}
										disabled={currentPage === 1}
										className="p-2 rounded-lg border border-gray-200 hover:border-[#EE048B] hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed transition">
										<ChevronLeft size={20} className="text-[#EE048B]" />
									</button>

									{/* Page Numbers */}
									<div className="flex items-center gap-1">
										{Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
											let pageNum;
											if (totalPages <= 5) {
												pageNum = i + 1;
											} else if (currentPage <= 3) {
												pageNum = i + 1;
											} else if (currentPage > totalPages - 3) {
												pageNum = totalPages - 4 + i;
											} else {
												pageNum = currentPage - 2 + i;
											}
											return (
												<button
													key={pageNum}
													onClick={() => handlePageChange(pageNum)}
													className={`w-10 h-10 rounded-lg transition font-semibold ${
														currentPage === pageNum
															? "bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white"
															: "border border-gray-200 text-gray-700 hover:border-[#EE048B]"
													}`}>
													{pageNum}
												</button>
											);
										})}
									</div>

									<button
										onClick={() => handlePageChange(currentPage + 1)}
										disabled={currentPage === totalPages}
										className="p-2 rounded-lg border border-gray-200 hover:border-[#EE048B] hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed transition">
										<ChevronRight size={20} className="text-[#EE048B]" />
									</button>
								</div>
							)}
						</>
					) : (
						<div className="text-center py-16">
							<Calendar size={64} className="mx-auto text-gray-300 mb-4" />
							<p className="text-gray-600 text-lg mb-4">
								{t("events.noEventsFound")}
							</p>
							<button
								onClick={() => {
									setSelectedCategory("all");
									setSearchQuery("");
									setCurrentPage(1);
								}}
								className="bg-[#EE048B] text-white px-6 py-2 rounded-lg hover:bg-[#68226A] transition">
								{t("events.clearFilters")}
							</button>
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-[#68226A] to-[#EE048B]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						{t("events.cta.title")}
					</h2>
					<p className="text-xl text-white text-opacity-90 mb-8">
						{t("events.cta.description")}
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="tel:0763493716"
							className="bg-white text-[#68226A] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
							📞 0763 – 493 716
						</a>
						<a
							href="tel:0654806567"
							className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#68226A] transition-colors">
							📞 0654 - 806 567
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
