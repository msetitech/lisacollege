import { useTranslation } from "react-i18next";
import { ArrowRight, Calendar, User } from "lucide-react";
import courseImage from "../../assets/images/course.png";

export default function RecentBlogs() {
	const { i18n } = useTranslation();

	const blogs = [
		{
			id: 1,
			title_en: "Hair Styling Tips for Beginners",
			title_sw: "Vidokezo vya Ususi kwa Waanzilishi",
			excerpt_en:
				"Learn the essential hair styling techniques that will transform your look and boost your confidence.",
			excerpt_sw:
				"Jifunze mbinu za ususi muhimu ambazo zitabadilisha muonekano wako.",
			date: "Feb 4, 2026",
			author_en: "Expert Trainer",
			author_sw: "Mfunzi Mahiri",
			category: "Hair",
			featured: true, // This will be the big card
		},
		{
			id: 2,
			title_en: "Makeup Trends 2026",
			title_sw: "Maamuzi ya Makeup 2026",
			excerpt_en:
				"Discover the hottest makeup trends that are taking over social media and the beauty industry.",
			excerpt_sw:
				"Tambua maamuzi ya makeup yanayojifanya katika sekta ya urembo.",
			date: "Feb 1, 2026",
			author_en: "Beauty Expert",
			author_sw: "Mtaalamu wa Urembo",
			category: "Makeup",
		},
		{
			id: 3,
			title_en: "Fashion Design Career Paths",
			title_sw: "Njia za Ajira katika Muundo wa Mavazi",
			excerpt_en:
				"Explore different career opportunities in the fashion industry and how to start your journey.",
			excerpt_sw:
				"Tukilicha furaha juu ya ajira mbalimbali katika sekta ya mavazi.",
			date: "Jan 28, 2026",
			author_en: "Fashion Consultant",
			author_sw: "Mshauri wa Mavazi",
			category: "Fashion",
		},
		{
			id: 4,
			title_en: "Nail Art: From Basics to Advanced",
			title_sw: "Sanaa ya Kucha: Kutoka Msingi hadi Kwa Kiwango Cha Juu",
			excerpt_en:
				"Master the art of nail design with our comprehensive guide covering all skill levels.",
			excerpt_sw: "Dikika sanaa ya kucha na mbinu za kitaalamu.",
			date: "Jan 25, 2026",
			author_en: "Nail Specialist",
			author_sw: "Mtaalamu wa Kucha",
			category: "Nails",
		},
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

	const featured = blogs.find((b) => b.featured);
	const recentPosts = blogs.filter((b) => !b.featured).slice(0, 3);

	return (
		<section className="py-16 md:py-20 bg-gradient-to-b from-white via-pink-50/20 to-white">
			<div className="max-w-7xl mx-auto px-4 md:px-6">
				{/* Section Header */}
				<div className="mb-12 md:mb-16">
					<div className="inline-flex items-center gap-2 mb-5">
						<span className="w-8 h-0.5 bg-[#EE048B]" />
						<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
							{i18n.language === "sw" ? "Habari Mpya" : "Latest News"}
						</span>
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						{i18n.language === "sw"
							? "Habari na Maarifa"
							: "Recent Blogs & Insights"}
					</h2>
					<p className="text-base md:text-lg text-gray-600 max-w-2xl">
						{i18n.language === "sw"
							? "Soma hadithi za mafanikio, vidokezo vya kitaalamu, na maamuzi ya sekta."
							: "Discover success stories, expert tips, and industry insights."}
					</p>
				</div>

				{/* Two-Column Layout: Featured Left + Recent Right */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* ──── LEFT: Big Featured Card (2/3) ──── */}
					<div className="lg:col-span-2">
						<div className="group relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
							{/* Background Image */}
							<img
								src={courseImage}
								alt={getTitle(featured)}
								className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>

							{/* Dark gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

							{/* Content overlay */}
							<div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
								{/* Category badge */}
								{/* {featured && (
									<div className="mb-4">
										<CategoryBadge category={featured.category} />
									</div>
								)} */}

								{/* Title */}
								<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
									{getTitle(featured)}
								</h3>

								{/* Excerpt */}
								<p className="text-white/80 text-sm md:text-base mb-5 line-clamp-2 max-w-2xl">
									{getExcerpt(featured)}
								</p>

								{/* Meta row */}
								<div className="flex items-center gap-4 text-white/70 text-xs md:text-sm mb-5">
									<div className="flex items-center gap-1.5">
										<Calendar size={16} className="text-[#EE048B]" />
										<span>{featured.date}</span>
									</div>
									<div className="flex items-center gap-1.5">
										<User size={16} className="text-[#EE048B]" />
										<span>{getAuthor(featured)}</span>
									</div>
								</div>

								{/* Read More Button */}
								<button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit group/btn">
									{i18n.language === "sw" ? "Soma Zaidi" : "Read More"}
									<ArrowRight
										size={18}
										className="group-hover/btn:translate-x-1 transition-transform duration-300"
									/>
								</button>
							</div>
						</div>
					</div>

					{/* ──── RIGHT: 3 Stacked Recent Cards (1/3) ──── */}
					<div className="lg:col-span-1 flex flex-col gap-4">
						{recentPosts.map((blog) => (
							<div
								key={blog.id}
								className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#EE048B] transition-all duration-300 flex flex-row h-32">
								{/* Small image left */}
								<div className="relative w-32 flex-shrink-0 overflow-hidden bg-gray-200">
									<img
										src={courseImage}
										alt={getTitle(blog)}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
								</div>

								{/* Content right */}
								<div className="flex-1 p-3 flex flex-col justify-between">
									{/* Category pill */}
									<div className="mb-1">
										<CategoryBadge category={blog.category} />
									</div>

									{/* Title */}
									<h4 className="text-sm font-bold text-gray-900 line-clamp-2 group-hover:text-[#EE048B] transition-colors duration-300 leading-snug">
										{getTitle(blog)}
									</h4>

									{/* Date and Author */}
									<div className="flex items-center gap-2 text-xs text-gray-500 mt-auto flex-wrap">
										<div className="flex items-center gap-1">
											<Calendar size={12} className="text-[#EE048B]" />
											<span>{blog.date}</span>
										</div>
										<span>•</span>
										<div className="flex items-center gap-1">
											<User size={12} className="text-[#EE048B]" />
											<span className="truncate">{getAuthor(blog)}</span>
										</div>
									</div>
								</div>
							</div>
						))}

						{/* View All Button */}
						<button className="w-full flex items-center justify-center gap-3 bg-white border-2 border-[#EE048B] text-[#EE048B] font-bold py-3 px-6 rounded-full hover:bg-[#EE048B] hover:text-white transition-all duration-300 group/all mt-4">
							{i18n.language === "sw"
								? "Angalia Habari Zote"
								: "View All Articles"}
							<ArrowRight
								size={20}
								className="group-hover/all:translate-x-1 transition-transform"
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
