import { Search, Filter, X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FilterPanel({
	filters,
	setFilters,
	categories,
	minPrice,
	maxPrice,
	onReset,
}) {
	const { i18n } = useTranslation();

	const handleCategoryChange = (categoryValue) => {
		setFilters((prev) => ({
			...prev,
			categories: prev.categories.includes(categoryValue)
				? prev.categories.filter((c) => c !== categoryValue)
				: [...prev.categories, categoryValue],
		}));
	};

	const handleDurationChange = (duration) => {
		setFilters((prev) => ({
			...prev,
			durations: prev.durations.includes(duration)
				? prev.durations.filter((d) => d !== duration)
				: [...prev.durations, duration],
		}));
	};

	const handlePriceRangeChange = (e) => {
		setFilters((prev) => ({
			...prev,
			maxPriceFilter: parseInt(e.target.value),
		}));
	};

	const handleSortChange = (e) => {
		setFilters((prev) => ({
			...prev,
			sortBy: e.target.value,
		}));
	};

	return (
		<div className="bg-white rounded-lg p-6 sticky top-20 max-h-[calc(100vh-100px)] overflow-y-auto shadow-md">
			{/* Filter Header */}
			<div className="flex items-center justify-between mb-6">
				<div className="flex items-center gap-2">
					<Filter size={20} className="text-[#EE048B]" />
					<h3 className="text-lg font-bold text-gray-900">
						{i18n.language === "sw" ? "Chuja" : "Filters"}
					</h3>
				</div>
				{(filters.search ||
					filters.categories.length > 0 ||
					filters.durations.length > 0 ||
					filters.maxPriceFilter < maxPrice) && (
					<button
						onClick={onReset}
						className="text-[#EE048B] hover:text-[#68226A] transition text-sm font-semibold flex items-center gap-1">
						<X size={16} />
						{i18n.language === "sw" ? "Futa" : "Clear"}
					</button>
				)}
			</div>

			{/* Search Input */}
			<div className="mb-6">
				<label className="block text-sm font-semibold text-gray-700 mb-2">
					{i18n.language === "sw" ? "Tafuta" : "Search"}
				</label>
				<div className="relative">
					<Search size={18} className="absolute left-3 top-3 text-gray-400" />
					<input
						type="text"
						placeholder={
							i18n.language === "sw" ? "Tafuta kozi..." : "Search courses..."
						}
						value={filters.search}
						onChange={(e) =>
							setFilters((prev) => ({
								...prev,
								search: e.target.value,
							}))
						}
						className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#EE048B] transition"
					/>
				</div>
			</div>

			{/* Categories */}
			<div className="mb-6">
				<h4 className="font-semibold text-gray-900 mb-3 text-sm">
					{i18n.language === "sw" ? "Kategoria" : "Category"}
				</h4>
				<div className="space-y-2">
					{categories.map((cat) => (
						<label
							key={cat.value}
							className="flex items-center gap-3 cursor-pointer">
							<input
								type="checkbox"
								checked={filters.categories.includes(cat.value)}
								onChange={() => handleCategoryChange(cat.value)}
								className="w-4 h-4 rounded border-gray-300 text-[#EE048B] accent-[#EE048B]"
							/>
							<span className="text-sm text-gray-700">
								{cat.icon} {i18n.language === "sw" ? cat.sw : cat.en}
							</span>
						</label>
					))}
				</div>
			</div>

			{/* Duration */}
			<div className="mb-6">
				<h4 className="font-semibold text-gray-900 mb-3 text-sm">
					{i18n.language === "sw" ? "Muda" : "Duration"}
				</h4>
				<div className="space-y-2">
					{[1, 2, 3, 6].map((duration) => (
						<label
							key={duration}
							className="flex items-center gap-3 cursor-pointer">
							<input
								type="checkbox"
								checked={filters.durations.includes(duration)}
								onChange={() => handleDurationChange(duration)}
								className="w-4 h-4 rounded border-gray-300 text-[#EE048B] accent-[#EE048B]"
							/>
							<span className="text-sm text-gray-700">
								{duration}{" "}
								{duration === 1
									? i18n.language === "sw"
										? "Mwezi"
										: "Month"
									: i18n.language === "sw"
										? "Miezi"
										: "Months"}
							</span>
						</label>
					))}
				</div>
			</div>

			{/* Price Range */}
			<div className="mb-6">
				<h4 className="font-semibold text-gray-900 mb-3 text-sm">
					{i18n.language === "sw" ? "Bei Juu Zaidi" : "Max Price"}
				</h4>
				<input
					type="range"
					min={minPrice}
					max={maxPrice}
					step={50000}
					value={filters.maxPriceFilter}
					onChange={handlePriceRangeChange}
					className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#EE048B]"
				/>
				<div className="mt-2 flex justify-between text-sm text-gray-600">
					<span>{minPrice.toLocaleString()}</span>
					<span className="font-semibold text-[#EE048B]">
						{filters.maxPriceFilter.toLocaleString()} TSh
					</span>
				</div>
			</div>

			{/* Sort */}
			<div className="mb-6">
				<h4 className="font-semibold text-gray-900 mb-3 text-sm">
					{i18n.language === "sw" ? "Panga" : "Sort By"}
				</h4>
				<select
					value={filters.sortBy}
					onChange={handleSortChange}
					className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#EE048B] transition bg-white text-sm">
					<option value="name">
						{i18n.language === "sw" ? "Jina" : "Name"}
					</option>
					<option value="price-asc">
						{i18n.language === "sw"
							? "Bei (Chini → Juu)"
							: "Price (Low → High)"}
					</option>
					<option value="price-desc">
						{i18n.language === "sw"
							? "Bei (Juu → Chini)"
							: "Price (High → Low)"}
					</option>
					<option value="duration-asc">
						{i18n.language === "sw"
							? "Muda (Fupi → Refu)"
							: "Duration (Short → Long)"}
					</option>
					<option value="duration-desc">
						{i18n.language === "sw"
							? "Muda (Refu → Fupi)"
							: "Duration (Long → Short)"}
					</option>
				</select>
			</div>
		</div>
	);
}
