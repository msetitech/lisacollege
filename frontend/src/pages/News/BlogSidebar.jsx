import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search, Calendar, TrendingUp, ArrowRight } from "lucide-react";
import courseImage from "../../assets/images/course.png";

export default function BlogSidebar({ currentBlogId, allBlogs }) {
	const navigate = useNavigate();
	const { i18n } = useTranslation();
	const [searchQuery, setSearchQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [isSearching, setIsSearching] = useState(false);

	const getTitle = (blog) =>
		i18n.language === "sw" ? blog.title_sw : blog.title_en;
	const getExcerpt = (blog) =>
		i18n.language === "sw" ? blog.excerpt_sw : blog.excerpt_en;

	// Get popular posts (excluding current blog)
	const popularPosts = allBlogs
		.filter((blog) => blog.id !== currentBlogId)
		.slice(0, 5);

	// Handle search
	const handleSearch = (query) => {
		setSearchQuery(query);
		if (query.trim().length > 0) {
			setIsSearching(true);
			const results = allBlogs.filter(
				(blog) =>
					blog.id !== currentBlogId &&
					(getTitle(blog).toLowerCase().includes(query.toLowerCase()) ||
						getExcerpt(blog).toLowerCase().includes(query.toLowerCase())),
			);
			setSearchResults(results);
		} else {
			setIsSearching(false);
			setSearchResults([]);
		}
	};

	const handleBlogClick = (blogId) => {
		navigate(`/news/${blogId}`);
		setSearchQuery("");
		setIsSearching(false);
		setSearchResults([]);
	};

	const CategoryBadge = ({ category }) => {
		const colors = {
			Hair: "bg-pink-100 text-pink-700",
			Makeup: "bg-purple-100 text-purple-700",
			Fashion: "bg-blue-100 text-blue-700",
			Nails: "bg-amber-100 text-amber-700",
			Decoration: "bg-green-100 text-green-700",
			Business: "bg-indigo-100 text-indigo-700",
		};
		return (
			<span
				className={`text-xs font-bold px-2 py-1 rounded-full ${colors[category] || "bg-gray-100 text-gray-700"}`}>
				{category}
			</span>
		);
	};

	const displayPosts = isSearching ? searchResults : popularPosts;

	return (
		<div className="space-y-6">
			{/* Search Box */}
			<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-4 z-10">
				<h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
					<Search size={20} className="text-[#EE048B]" />
					{i18n.language === "sw" ? "Tafuta Makala" : "Search Articles"}
				</h3>
				<div className="relative">
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => handleSearch(e.target.value)}
						placeholder={
							i18n.language === "sw" ? "Tafuta makala..." : "Search articles..."
						}
						className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 transition-all"
					/>
					<Search
						size={18}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
					/>
				</div>
				{isSearching && (
					<div className="mt-3 text-sm text-gray-600">
						{searchResults.length === 0
							? i18n.language === "sw"
								? "Hakuna matokeo yaliyopatikana"
								: "No results found"
							: `${searchResults.length} ${i18n.language === "sw" ? "makala" : "articles"} ${i18n.language === "sw" ? "zimepatikana" : "found"}`}
					</div>
				)}
			</div>
			{/* Posts List */}
			<div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
				<h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
					<TrendingUp size={20} className="text-[#EE048B]" />
					{isSearching
						? i18n.language === "sw"
							? "Matokeo ya Utafutaji"
							: "Search Results"
						: i18n.language === "sw"
							? "Makala Mengine"
							: "Other Articles"}
				</h3>

				<div className="space-y-4">
					{displayPosts.length === 0 ? (
						<p className="text-gray-500 text-sm text-center py-8">
							{i18n.language === "sw"
								? "Hakuna makala yaliyopatikana"
								: "No articles found"}
						</p>
					) : (
						displayPosts.map((blog) => (
							<div
								key={blog.id}
								onClick={() => handleBlogClick(blog.id)}
								className="group cursor-pointer border-b border-gray-100 last:border-0 pb-4 last:pb-0">
								<div className="flex gap-4">
									{/* Thumbnail */}
									<div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 z-0">
										<img
											src={blog.image || courseImage}
											alt={getTitle(blog)}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
										/>
									</div>
									{/* Content */}
									<div className="flex-1 min-w-0">
										<div className="mb-2">
											<CategoryBadge category={blog.category} />
										</div>
										<h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-[#EE048B] transition-colors mb-2 leading-tight">
											{getTitle(blog)}
										</h4>
										<div className="flex items-center gap-2 text-xs text-gray-500">
											<Calendar size={12} className="text-[#EE048B]" />
											<span>{blog.date}</span>
											<span>•</span>
											<span>{blog.readTime}</span>
										</div>
									</div>
								</div>
							</div>
						))
					)}
				</div>

				{/* View All Button */}
				{!isSearching && (
					<button
						onClick={() => navigate("/news")}
						className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group">
						{i18n.language === "sw" ? "Angalia Zote" : "View All"}
						<ArrowRight
							size={18}
							className="group-hover:translate-x-1 transition-transform"
						/>
					</button>
				)}
			</div>

			{/* Categories Widget */}
			<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border border-gray-100">
				<h3 className="text-lg font-bold text-gray-900 mb-4">
					{i18n.language === "sw" ? "Aina za Makala" : "Categories"}
				</h3>
				<div className="flex flex-wrap gap-2">
					{["Hair", "Makeup", "Fashion", "Nails", "Decoration", "Business"].map(
						(category) => (
							<button
								key={category}
								onClick={() => navigate(`/news?category=${category}`)}
								className="px-4 py-2 bg-white hover:bg-gradient-to-r hover:from-[#EE048B] hover:to-[#68226A] text-gray-700 hover:text-white font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-md">
								{category}
							</button>
						),
					)}
				</div>
			</div>
		</div>
	);
}
