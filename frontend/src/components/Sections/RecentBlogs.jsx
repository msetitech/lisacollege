import { useTranslation } from "react-i18next";
import { ArrowRight, Calendar, User } from "lucide-react";
import courseImage from "../../assets/images/course.png";

export default function RecentBlogs() {
	const { t, i18n } = useTranslation();

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
			image: courseImage,
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
			image: courseImage,
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
			image: courseImage,
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
			image: courseImage,
		},
		{
			id: 5,
			title_en: "Event Decoration Secrets",
			title_sw: "Siri za Mapambo ya Matukio",
			excerpt_en:
				"Create stunning event decorations with these insider tips and creative ideas.",
			excerpt_sw: "Tengeneza mapambo ya matamaini na masaada ya ndani.",
			date: "Jan 20, 2026",
			author_en: "Event Decorator",
			author_sw: "Mpamba wa Matukio",
			category: "Decoration",
			image: courseImage,
		},
		{
			id: 6,
			title_en: "Starting Your Beauty Business",
			title_sw: "Kuanza Biashara Yako ya Urembo",
			excerpt_en:
				"Everything you need to know about launching your own beauty business successfully.",
			excerpt_sw:
				"Kila kitu unachohitaji kujua kuhusu kuanzisha biashara yako ya urembo.",
			date: "Jan 15, 2026",
			author_en: "Business Coach",
			author_sw: "Kocha wa Biashara",
			category: "Business",
			image: courseImage,
		},
	];

	const getTitle = (blog) =>
		i18n.language === "sw" ? blog.title_sw : blog.title_en;
	const getExcerpt = (blog) =>
		i18n.language === "sw" ? blog.excerpt_sw : blog.excerpt_en;
	const getAuthor = (blog) =>
		i18n.language === "sw" ? blog.author_sw : blog.author_en;

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

	return (
		<section className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-white">
			<div className="max-w-7xl mx-auto px-4 md:px-6">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 mb-4">
						<span className="w-8 h-0.5 bg-[#EE048B]" />
						<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
							{i18n.language === "sw" ? "Habari Mpya" : "Latest News"}
						</span>
						<span className="w-8 h-0.5 bg-[#EE048B]" />
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{i18n.language === "sw"
							? "Habari na Maarifa"
							: "Recent Blogs & Insights"}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{i18n.language === "sw"
							? "Soma hadithi za mafanikio, vidokezo vya kitaalamu, na maamuzi ya najis."
							: "Discover success stories, expert tips, and industry insights."}
					</p>
				</div>

				{/* Blog Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
					{blogs.map((blog) => (
						<div
							key={blog.id}
							className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#EE048B]/30 flex flex-col h-full">
							{/* Image Container */}
							<div className="relative h-64 overflow-hidden bg-gray-200">
								<img
									src={blog.image}
									alt={getTitle(blog)}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute top-3 right-3">
									<CategoryBadge category={blog.category} />
								</div>
								{/* Overlay gradient on hover */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</div>

							{/* Content */}
							<div className="p-6 flex flex-col flex-grow">
								{/* Title */}
								<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#EE048B] transition-colors duration-300">
									{getTitle(blog)}
								</h3>

								{/* Excerpt */}
								<p className="text-gray-600 text-sm mb-5 line-clamp-3 flex-grow">
									{getExcerpt(blog)}
								</p>

								{/* Meta Info */}
								<div className="space-y-4 border-t border-gray-200 pt-4 mt-auto">
									<div className="flex items-center justify-between text-xs text-gray-500">
										<div className="flex items-center gap-1">
											<Calendar size={14} className="text-[#EE048B]" />
											<span>{blog.date}</span>
										</div>
										<div className="flex items-center gap-1">
											<User size={14} className="text-[#EE048B]" />
											<span>{getAuthor(blog)}</span>
										</div>
									</div>

									{/* Read More Button */}
									<button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-2.5 px-4 rounded-lg hover:shadow-lg transition-all duration-300 group/btn">
										{i18n.language === "sw" ? "Soma Zaidi" : "Read More"}
										<ArrowRight
											size={16}
											className="group-hover/btn:translate-x-1 transition-transform duration-300"
										/>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Button */}
				<div className="flex justify-center">
					<button className="inline-flex items-center gap-3 bg-white border-2 border-[#EE048B] text-[#EE048B] font-bold py-3 px-8 rounded-full hover:bg-[#EE048B] hover:text-white transition-all duration-300 group/all">
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
		</section>
	);
}
