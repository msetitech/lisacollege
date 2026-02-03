import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import heroImage from "../../assets/images/demolandingimage.jpg";

export default function Hero() {
	const { t } = useTranslation();
	const [filters, setFilters] = useState({
		category: "",
		duration: "",
		price: "",
		hostel: false,
	});

	const categories = [
		"Makeup & Styling",
		"Decoration",
		"Fashion Design",
		"Henna",
	];

	const durations = ["1 Month", "2 Months", "3 Months", "6 Months"];
	const priceRanges = [
		"Under 200K",
		"200K - 400K",
		"400K - 600K",
		"Above 600K",
	];

	const handleFilter = (key, value) => {
		setFilters((prev) => ({
			...prev,
			[key]: prev[key] === value ? "" : value,
		}));
	};

	const handleSearch = () => {
		console.log("Applying filters:", filters);
		// Will add course filtering logic here
	};

	return (
		<section
			className="relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-visible z-0"
			style={{
				backgroundImage: `url(${heroImage})`,
				height: "100vh",
			}}>
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-[#68226A]/65"></div>

			{/* Title & Filter Section at Bottom */}
			<div className="absolute bottom-8 left-0 right-0 w-full z-50">
				{/* Title & Subtitle */}
				<div className="max-w-6xl mx-auto px-4 py-6 text-center md:text-left">
					<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
						{t("hero.mainTitle")}
					</h1>
					<p className="text-base md:text-lg text-gray-100">
						{t("hero.mainSubtitle")}
					</p>
				</div>

				{/* Search & Filter Bar */}
				<div className="bg-white rounded-lg max-w-6xl mx-auto p-6 shadow-2xl -mb-32">
					{/* Search Input */}
					<div className="mb-6 flex items-center bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
						<Search className="text-gray-400 w-5 h-5 mr-3" />
						<input
							type="text"
							placeholder={t("hero.searchPlaceholder")}
							className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
						/>
					</div>

					{/* Filters Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
						{/* Category Filter */}
						<div>
							<label className="text-xs font-semibold text-gray-600 block mb-2">
								{t("hero.filterCategory")}
							</label>
							<select
								value={filters.category}
								onChange={(e) => handleFilter("category", e.target.value)}
								className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#68226A]">
								<option value="">{t("hero.selectCategory")}</option>
								{categories.map((cat) => (
									<option key={cat} value={cat}>
										{cat}
									</option>
								))}
							</select>
						</div>

						{/* Duration Filter */}
						<div>
							<label className="text-xs font-semibold text-gray-600 block mb-2">
								{t("hero.filterDuration")}
							</label>
							<select
								value={filters.duration}
								onChange={(e) => handleFilter("duration", e.target.value)}
								className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#68226A]">
								<option value="">{t("hero.selectDuration")}</option>
								{durations.map((dur) => (
									<option key={dur} value={dur}>
										{dur}
									</option>
								))}
							</select>
						</div>

						{/* Price Filter */}
						<div>
							<label className="text-xs font-semibold text-gray-600 block mb-2">
								{t("hero.filterPrice")}
							</label>
							<select
								value={filters.price}
								onChange={(e) => handleFilter("price", e.target.value)}
								className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#68226A]">
								<option value="">{t("hero.selectPrice")}</option>
								{priceRanges.map((price) => (
									<option key={price} value={price}>
										{price}
									</option>
								))}
							</select>
						</div>

						{/* Hostel Toggle */}
						<div>
							<label className="text-xs font-semibold text-gray-600 block mb-2">
								{t("hero.filterHostel")}
							</label>
							<button
								onClick={() => handleFilter("hostel", !filters.hostel)}
								className={`w-full px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
									filters.hostel
										? "bg-[#68226A] text-white border-[#68226A]"
										: "bg-white text-gray-700 border-gray-300 hover:border-[#68226A]"
								}`}>
								{t("hero.withHostel")}
							</button>
						</div>

						{/* Apply Button */}
						<div className="flex items-end">
							<button
								onClick={handleSearch}
								className="w-full bg-[#EE048B] hover:bg-[#d60278] text-white font-bold py-2 rounded-lg transition-all transform hover:scale-105">
								{t("hero.searchBtn")}
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
