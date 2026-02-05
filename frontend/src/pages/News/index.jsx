import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
	ArrowRight,
	Calendar,
	User,
	Search,
	Filter,
	BookOpen,
} from "lucide-react";
import courseImage from "../../assets/images/course.png";

export default function BlogsPage() {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [searchQuery, setSearchQuery] = useState("");

	// Blog data - in real app, this would come from API/database
	const blogs = [
		{
			id: 1,
			title_en: "Hair Styling Tips for Beginners",
			title_sw: "Vidokezo vya Ususi kwa Waanzilishi",
			excerpt_en:
				"Learn the essential hair styling techniques that will transform your look and boost your confidence.",
			excerpt_sw:
				"Jifunze mbinu za ususi muhimu ambazo zitabadilisha muonekano wako.",
			content_en:
				"Hair styling is an art that combines technique, creativity, and practice...",
			content_sw: "Ususi ni sanaa inayochanganya mbinu, ubunifu, na mazoezi...",
			date: "Feb 4, 2026",
			author_en: "Expert Trainer",
			author_sw: "Mfunzi Mahiri",
			category: "Hair",
			image: courseImage,
			readTime: "5 min",
		},
		{
			id: 2,
			title_en: "Makeup Trends 2026",
			title_sw: "Maamuzi ya Makeup 2026",
			excerpt_en:
				"Discover the hottest makeup trends that are taking over social media and the beauty industry.",
			excerpt_sw:
				"Tambua maamuzi ya makeup yanayojifanya katika sekta ya urembo.",
			content_en:
				"The beauty industry is constantly evolving, and 2026 brings exciting new trends...",
			content_sw:
				"Sekta ya urembo inabadilika kila wakati, na 2026 inaleta maamuzi mapya...",
			date: "Feb 1, 2026",
			author_en: "Beauty Expert",
			author_sw: "Mtaalamu wa Urembo",
			category: "Makeup",
			image: courseImage,
			readTime: "4 min",
		},
		{
			id: 3,
			title_en: "Fashion Design Career Paths",
			title_sw: "Njia za Ajira katika Muundo wa Mavazi",
			excerpt_en:
				"Explore different career opportunities in the fashion industry and how to start your journey.",
			excerpt_sw:
				"Tukilicha furaha juu ya ajira mbalimbali katika sekta ya mavazi.",
			content_en:
				"The fashion industry offers diverse career paths for creative professionals...",
			content_sw:
				"Sekta ya mavazi inatoa njia za ajira mbalimbali kwa wataalamu wa ubunifu...",
			date: "Jan 28, 2026",
			author_en: "Fashion Consultant",
			author_sw: "Mshauri wa Mavazi",
			category: "Fashion",
			image: courseImage,
			readTime: "6 min",
		},
		{
			id: 4,
			title_en: "Nail Art: From Basics to Advanced",
			title_sw: "Sanaa ya Kucha: Kutoka Msingi hadi Kwa Kiwango Cha Juu",
			excerpt_en:
				"Master the art of nail design with our comprehensive guide covering all skill levels.",
			excerpt_sw: "Dikika sanaa ya kucha na mbinu za kitaalamu.",
			content_en:
				"Nail art has evolved from simple polish to intricate designs...",
			content_sw:
				"Sanaa ya kucha imebadilika kutoka rangi rahisi hadi miundo tata...",
			date: "Jan 25, 2026",
			author_en: "Nail Specialist",
			author_sw: "Mtaalamu wa Kucha",
			category: "Nails",
			image: courseImage,
			readTime: "5 min",
		},
		{
			id: 5,
			title_en: "Building Your Beauty Business",
			title_sw: "Kujenga Biashara Yako ya Urembo",
			excerpt_en:
				"Essential strategies for starting and growing a successful beauty business in today's market.",
			excerpt_sw:
				"Mikakati muhimu ya kuanza na kukuza biashara ya urembo yenye mafanikio.",
			content_en:
				"Starting a beauty business requires more than just skills...",
			content_sw: "Kuanza biashara ya urembo kunahitaji zaidi ya ujuzi tu...",
			date: "Jan 22, 2026",
			author_en: "Business Coach",
			author_sw: "Mkufunzi wa Biashara",
			category: "Business",
			image: courseImage,
			readTime: "7 min",
		},
		{
			id: 6,
			title_en: "Event Decoration Masterclass",
			title_sw: "Darasa Kuu la Upambaji wa Matukio",
			excerpt_en:
				"Learn professional event decoration techniques that wow clients and create memorable experiences.",
			excerpt_sw:
				"Jifunze mbinu za kitaalamu za upambaji wa matukio zinazoshangaza.",
			content_en:
				"Event decoration is about creating atmosphere and memories...",
			content_sw:
				"Upambaji wa matukio ni kuhusu kuunda mazingira na kumbukumbu...",
			date: "Jan 20, 2026",
			author_en: "Decoration Expert",
			author_sw: "Mtaalamu wa Upambaji",
			category: "Decoration",
			image: courseImage,
			readTime: "6 min",
		},
	];

	const categories = [
		"All",
		"Hair",
		"Makeup",
		"Fashion",
		"Nails",
		"Decoration",
		"Business",
	];

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
				className={`text-xs font-bold px-3 py-1 rounded-full ${colors[category] || "bg-gray-100 text-gray-700"}`}>
				{category}
			</span>
		);
	};

	const getTitle = (blog) =>
		i18n.language === "sw" ? blog.title_sw : blog.title_en;
	const getExcerpt = (blog) =>
		i18n.language === "sw" ? blog.excerpt_sw : blog.excerpt_en;
	const getAuthor = (blog) =>
		i18n.language === "sw" ? blog.author_sw : blog.author_en;

	// Filter blogs
	const filteredBlogs = blogs.filter((blog) => {
		const matchesCategory =
			selectedCategory === "All" || blog.category === selectedCategory;
		const matchesSearch =
			getTitle(blog).toLowerCase().includes(searchQuery.toLowerCase()) ||
			getExcerpt(blog).toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	const handleBlogClick = (blogId) => {
		navigate(`/news/${blogId}`);
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-white via-pink-50/20 to-white">
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
							{i18n.language === "sw" ? "Habari na Maarifa" : "News & Insights"}
						</span>
						<span className="w-8 h-0.5 bg-[#EE048B]" />
					</div>

					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
						{i18n.language === "sw" ? "Blogu Zetu" : "Our Blogs"}
					</h1>

					<p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
						{i18n.language === "sw"
							? "Soma hadithi za mafanikio, vidokezo vya kitaalamu, na maamuzi ya sekta ya urembo na mavazi."
							: "Discover success stories, expert tips, and industry insights in beauty and fashion."}
					</p>
				</div>
			</section>

			{/* Filter & Search Section */}
			<section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
						{/* Search Bar */}
						<div className="relative w-full md:w-96">
							<Search
								className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
								size={20}
							/>
							<input
								type="text"
								placeholder={
									i18n.language === "sw"
										? "Tafuta makala..."
										: "Search articles..."
								}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 transition-all"
							/>
						</div>

						{/* Category Filter */}
						<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
							<Filter size={20} className="text-gray-500 flex-shrink-0" />
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
										selectedCategory === category
											? "bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white shadow-md"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}>
									{category}
								</button>
							))}
						</div>
					</div>

					{/* Results Count */}
					<div className="mt-4 text-sm text-gray-600">
						{i18n.language === "sw"
							? `Makala ${filteredBlogs.length} zimepatikana`
							: `${filteredBlogs.length} articles found`}
					</div>
				</div>
			</section>

			{/* Blog Grid */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					{filteredBlogs.length === 0 ? (
						<div className="text-center py-20">
							<p className="text-xl text-gray-600">
								{i18n.language === "sw"
									? "Hakuna makala zilizopatikana."
									: "No articles found."}
							</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredBlogs.map((blog) => (
								<div
									key={blog.id}
									onClick={() => handleBlogClick(blog.id)}
									className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#EE048B]">
									{/* Image */}
									<div className="relative h-56 overflow-hidden bg-gray-200">
										<img
											src={blog.image}
											alt={getTitle(blog)}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

										{/* Category Badge on Image */}
										<div className="absolute top-4 left-4">
											<CategoryBadge category={blog.category} />
										</div>
									</div>

									{/* Content */}
									<div className="p-6">
										{/* Meta Info */}
										<div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
											<div className="flex items-center gap-1">
												<Calendar size={14} className="text-[#EE048B]" />
												<span>{blog.date}</span>
											</div>
											<span>•</span>
											<span>{blog.readTime}</span>
										</div>

										{/* Title */}
										<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#EE048B] transition-colors duration-300">
											{getTitle(blog)}
										</h3>

										{/* Excerpt */}
										<p className="text-gray-600 text-sm mb-4 line-clamp-3">
											{getExcerpt(blog)}
										</p>

										{/* Author & Read More */}
										<div className="flex items-center justify-between pt-4 border-t border-gray-100">
											<div className="flex items-center gap-2 text-sm text-gray-700">
												<User size={16} className="text-[#EE048B]" />
												<span className="font-medium">{getAuthor(blog)}</span>
											</div>
											<button className="flex items-center gap-1 text-[#EE048B] font-bold text-sm group-hover:gap-2 transition-all duration-300">
												{i18n.language === "sw" ? "Soma" : "Read"}
												<ArrowRight size={16} />
											</button>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white">
				<div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{i18n.language === "sw"
							? "Je! Uko Tayari Kuanza Safari Yako?"
							: "Ready to Start Your Journey?"}
					</h2>
					<p className="text-lg mb-8 text-white/90">
						{i18n.language === "sw"
							? "Jiunge na programu zetu za mafunzo na ubadilishe maisha yako."
							: "Join our training programs and transform your life."}
					</p>
					<button
						onClick={() => navigate("/programs")}
						className="inline-flex items-center gap-2 bg-white text-[#EE048B] font-bold py-4 px-8 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
						{i18n.language === "sw" ? "Angalia Programu" : "View Programs"}
						<ArrowRight size={20} />
					</button>
				</div>
			</section>
		</div>
	);
}
