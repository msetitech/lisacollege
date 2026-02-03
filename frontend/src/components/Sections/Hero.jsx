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
			className="relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: `url(${heroImage})`,
				height: "100vh",
			}}>
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-[#68226A]/65"></div>
			<div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
				<div className="max-w-2xl">
					{/* Subtitle */}
					<p className="text-[#FFC107] text-lg font-semibold mb-4 uppercase tracking-wider">
						Professional Vocational Training
					</p>

					{/* Main Title */}
					<h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
						{t("hero.mainTitle")}
					</h1>

					{/* Description */}
					<p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-xl">
						{t("hero.mainSubtitle")}
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="bg-[#EE048B] hover:bg-[#d60278] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
							{t("hero.tourBtn")}
						</button>
						<button className="border-2 border-white text-white hover:bg-white hover:text-[#68226A] px-8 py-4 rounded-lg font-bold text-lg transition-all">
							{t("hero.exploreBtn")}
						</button>
					</div>
				</div>
			</div>

			{/* Search & Filter Bar */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl rounded-2xl bg-white p-6 shadow-2xl">
				{/* Search Input */}
				<div className="mb-6 flex items-center bg-gray-50 rounded-lg px-4 py-2 border border-gray-200">
					<Search className="text-gray-400 w-5 h-5 mr-3" />
					<input
						type="text"
						placeholder="Search courses..."
						className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
					/>
				</div>

				{/* Filters Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
					{/* Category Filter */}
					<div>
						<label className="text-xs font-semibold text-gray-600 block mb-2">
							Category
						</label>
						<select
							value={filters.category}
							onChange={(e) => handleFilter("category", e.target.value)}
							className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#68226A]">
							<option value="">Select Category</option>
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
							Duration
						</label>
						<select
							value={filters.duration}
							onChange={(e) => handleFilter("duration", e.target.value)}
							className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#68226A]">
							<option value="">Select Duration</option>
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
							Price Range
						</label>
						<select
							value={filters.price}
							onChange={(e) => handleFilter("price", e.target.value)}
							className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:border-[#68226A]">
							<option value="">Select Price</option>
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
							Hostel
						</label>
						<button
							onClick={() => handleFilter("hostel", !filters.hostel)}
							className={`w-full px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
								filters.hostel
									? "bg-[#68226A] text-white border-[#68226A]"
									: "bg-white text-gray-700 border-gray-300 hover:border-[#68226A]"
							}`}>
							With Hostel
						</button>
					</div>

					{/* Apply Button */}
					<div className="flex items-end">
						<button
							onClick={handleSearch}
							className="w-full bg-[#EE048B] hover:bg-[#d60278] text-white font-bold py-2 rounded-lg transition-all transform hover:scale-105">
							Search
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
