import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import FilterPanel from "./FilterPanel";
import CourseCard from "./CourseCard";
import { coursesData } from "./coursesData";

export default function Programs() {
	const { i18n } = useTranslation();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 9;

	const [filters, setFilters] = useState({
		search: "",
		categories: [],
		durations: [],
		maxPriceFilter: 780000,
		sortBy: "name",
	});

	// Get all unique values
	const categories = [
		{
			value: "beauty",
			en: "Beauty & Salon Courses",
			sw: "Kozi za Urembo na Saluni",
			icon: "💄",
		},
		{
			value: "skills",
			en: "Other Skill Courses",
			sw: "Kozi Zingine za Ustadi",
			icon: "🎨",
		},
	];

	const allPrices = coursesData.map((c) => c.fee);
	const minPrice = Math.min(...allPrices);
	const maxPrice = Math.max(...allPrices);

	// Filtering logic
	const filteredAndSortedCourses = useMemo(() => {
		let result = [...coursesData];

		// Search filter
		if (filters.search) {
			const searchLower = filters.search.toLowerCase();
			result = result.filter(
				(course) =>
					course.name_en.toLowerCase().includes(searchLower) ||
					course.name_sw.toLowerCase().includes(searchLower) ||
					course.description_en.toLowerCase().includes(searchLower) ||
					course.description_sw.toLowerCase().includes(searchLower),
			);
		}

		// Category filter
		if (filters.categories.length > 0) {
			result = result.filter((course) =>
				filters.categories.includes(course.category),
			);
		}

		// Duration filter
		if (filters.durations.length > 0) {
			result = result.filter((course) =>
				filters.durations.includes(course.duration),
			);
		}

		// Price filter
		result = result.filter((course) => course.fee <= filters.maxPriceFilter);

		// Sorting
		switch (filters.sortBy) {
			case "price-asc":
				result.sort((a, b) => a.fee - b.fee);
				break;
			case "price-desc":
				result.sort((a, b) => b.fee - a.fee);
				break;
			case "duration-asc":
				result.sort((a, b) => a.duration - b.duration);
				break;
			case "duration-desc":
				result.sort((a, b) => b.duration - a.duration);
				break;
			case "name":
			default:
				result.sort((a, b) =>
					(i18n.language === "sw" ? a.name_sw : a.name_en).localeCompare(
						i18n.language === "sw" ? b.name_sw : b.name_en,
					),
				);
				break;
		}

		return result;
	}, [filters, i18n.language]);

	// Pagination
	const totalPages = Math.ceil(filteredAndSortedCourses.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedCourses = filteredAndSortedCourses.slice(
		startIndex,
		startIndex + itemsPerPage,
	);

	// Reset filters
	const handleResetFilters = () => {
		setFilters({
			search: "",
			categories: [],
			durations: [],
			maxPriceFilter: maxPrice,
			sortBy: "name",
		});
		setCurrentPage(1);
	};

	// Handle pagination
	const handlePageChange = (page) => {
		setCurrentPage(Math.max(1, Math.min(page, totalPages)));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			{/* Hero Section - 100vh gradient */}
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
							{i18n.language === "sw" ? "Mafunzo Yetu" : "Our Programs"}
						</span>
						<span className="w-8 h-0.5 bg-[#EE048B]" />
					</div>

					<div className="flex items-center justify-center gap-4 mb-6">
						<BookOpen size={56} className="text-[#EE048B]" />
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
							{i18n.language === "sw" ? "Kozi za Mafunzo" : "Available Courses"}
						</h1>
					</div>

					<p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
						{i18n.language === "sw"
							? "Chagua moja ya kozi zetu za kusaidia kukujenga karera yako katika urembo, salauni, na ustadi mwingine."
							: "Explore our comprehensive range of beauty, salon, and skill-based courses designed to launch your career."}
					</p>
				</div>
			</section>

			{/* Courses Section */}
			<section className="py-16 md:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					{/* Main Content - 2 Column Layout */}
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
						{/* Left Sidebar - Filters (1 column) - STICKY */}
						<div className="lg:col-span-1">
							<div className="lg:sticky lg:top-24">
								<FilterPanel
									filters={filters}
									setFilters={setFilters}
									categories={categories}
									minPrice={minPrice}
									maxPrice={maxPrice}
									onReset={handleResetFilters}
								/>
							</div>
						</div>

						{/* Right Section - Courses (3 columns) */}
						<div className="lg:col-span-3">
							{/* Results Header */}
							<div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
								<div>
									<p className="text-gray-600">
										{i18n.language === "sw"
											? `Inaonyesha ${paginatedCourses.length} kwa ${filteredAndSortedCourses.length} kozi`
											: `Showing ${paginatedCourses.length} of ${filteredAndSortedCourses.length} courses`}
									</p>
									{filteredAndSortedCourses.length === 0 && (
										<p className="text-[#EE048B] font-semibold">
											{i18n.language === "sw"
												? "Hakuna kozi zinazolingana"
												: "No courses match your filters"}
										</p>
									)}
								</div>
								{(filters.search ||
									filters.categories.length > 0 ||
									filters.durations.length > 0 ||
									filters.maxPriceFilter < maxPrice) && (
									<button
										onClick={handleResetFilters}
										className="text-[#EE048B] hover:text-[#68226A] font-semibold text-sm transition">
										{i18n.language === "sw"
											? "Ondoa Chuja"
											: "Clear All Filters"}
									</button>
								)}
							</div>

							{/* Courses Grid */}
							{filteredAndSortedCourses.length > 0 ? (
								<>
									<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
										{paginatedCourses.map((course) => (
											<CourseCard key={course.id} course={course} />
										))}
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
												{Array.from(
													{
														length: Math.min(5, totalPages),
													},
													(_, i) => {
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
													},
												)}
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
									<BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
									<p className="text-gray-600 text-lg">
										{i18n.language === "sw"
											? "Hakuna kozi zinazolingana na chuja yako"
											: "No courses match your criteria"}
									</p>
									<button
										onClick={handleResetFilters}
										className="mt-4 bg-[#EE048B] text-white px-6 py-2 rounded-lg hover:bg-[#68226A] transition">
										{i18n.language === "sw" ? "Ondoa Chuja" : "Clear Filters"}
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
