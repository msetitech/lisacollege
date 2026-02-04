import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	ArrowLeft,
	Clock,
	DollarSign,
	Home,
	CheckCircle,
	BookOpen,
	Sparkles,
	Users,
	Award,
	TrendingUp,
	ChevronRight,
} from "lucide-react";
import { coursesData } from "./coursesData";
import courseImage from "../../assets/images/course.png";

export default function CourseDetail() {
	const { id } = useParams();
	const { i18n } = useTranslation();
	const [activeTab, setActiveTab] = useState("overview");

	const course = coursesData.find((c) => c.id === parseInt(id));

	if (!course) {
		return (
			<section className="min-h-screen flex items-center justify-center bg-gray-50">
				<div className="max-w-md mx-auto px-4 text-center">
					<div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
						<BookOpen size={40} className="text-gray-400" />
					</div>
					<h1 className="text-3xl font-bold text-gray-900 mb-3">
						{i18n.language === "sw" ? "Kozi Haipatikani" : "Course Not Found"}
					</h1>
					<p className="text-gray-600 mb-8">
						{i18n.language === "sw"
							? "Kozi unayotafuta haipatikani"
							: "The course you are looking for does not exist"}
					</p>
					<Link
						to="/programs"
						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white px-6 py-3 rounded-lg font-semibold transition">
						<ArrowLeft size={18} />
						{i18n.language === "sw" ? "Rudi kwenye Kozi" : "Back to Programs"}
					</Link>
				</div>
			</section>
		);
	}

	const courseName = i18n.language === "sw" ? course.name_sw : course.name_en;
	const courseDesc =
		i18n.language === "sw" ? course.description_sw : course.description_en;
	const categoryName =
		i18n.language === "sw" ? course.category_sw : course.category_en;

	const benefits = [
		{
			icon: Sparkles,
			title: {
				en: "Industry-Standard Techniques",
				sw: "Mbinu za Kiwango cha Kitaifa",
			},
			desc: {
				en: "Learn cutting-edge practices used by top professionals",
				sw: "Jifunze mbinu za kisasa zinazotumika na wataalamu bora",
			},
		},
		{
			icon: Users,
			title: { en: "Hands-On Experience", sw: "Uzoefu wa Vitendo" },
			desc: {
				en: "Practice with real clients in our salon every day",
				sw: "Fanya mazoezi na wateja wa kweli saluni yetu kila siku",
			},
		},
		{
			icon: Award,
			title: { en: "Professional Certification", sw: "Cheti cha Kitaalamu" },
			desc: {
				en: "Receive an internationally recognized certificate",
				sw: "Pokea cheti kinachotambuliwa duniani kote",
			},
		},
		{
			icon: TrendingUp,
			title: { en: "Career Support", sw: "Msaada wa Kazi" },
			desc: {
				en: "Job placement assistance and business guidance",
				sw: "Msaada wa kupata kazi na mwongozo wa biashara",
			},
		},
	];

	const tabs = [
		{ id: "overview", label: { en: "Overview", sw: "Maelezo" } },
		{ id: "curriculum", label: { en: "Curriculum", sw: "Mtaala" } },
		{ id: "requirements", label: { en: "Requirements", sw: "Mahitaji" } },
	];

	return (
		<div className="bg-gray-50">
			{/* Hero Section - Split Layout */}
			<section className="relative bg-gradient-to-br from-[#68226A] via-[#4a1650] to-[#3d1245] overflow-hidden">
				{/* Decorative elements */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-0 right-0 w-96 h-96 bg-[#EE048B] rounded-full blur-3xl" />
					<div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC107] rounded-full blur-3xl" />
				</div>

				<div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16">
					{/* Back button */}
					<Link
						to="/programs"
						className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold mb-8 transition group">
						<ArrowLeft
							size={20}
							className="group-hover:-translate-x-1 transition-transform"
						/>
						{i18n.language === "sw" ? "Rudi nyuma" : "Back to Programs"}
					</Link>

					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
						{/* Left: Content */}
						<div className="lg:col-span-3">
							<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
								<BookOpen size={18} className="text-[#EE048B]" />
								<span className="text-white font-semibold text-sm">
									{categoryName}
								</span>
							</div>

							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
								{courseName}
							</h1>

							<p className="text-xl text-white/70 mb-8 leading-relaxed">
								{courseDesc}
							</p>

							{/* Quick stats */}
							<div className="grid grid-cols-3 gap-4">
								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
									<Clock size={24} className="text-[#EE048B] mb-2" />
									<p className="text-2xl font-bold text-white">
										{course.duration}
									</p>
									<p className="text-white/60 text-sm">
										{course.duration === 1
											? i18n.language === "sw"
												? "Mwezi"
												: "Month"
											: i18n.language === "sw"
												? "Miezi"
												: "Months"}
									</p>
								</div>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
									<DollarSign size={24} className="text-[#FFC107] mb-2" />
									<p className="text-2xl font-bold text-white">
										{(course.fee / 1000).toFixed(0)}k
									</p>
									<p className="text-white/60 text-sm">
										{i18n.language === "sw" ? "Bei" : "Fee"}
									</p>
								</div>

								<div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
									<Award size={24} className="text-[#EE048B] mb-2" />
									<p className="text-2xl font-bold text-white">100%</p>
									<p className="text-white/60 text-sm">
										{i18n.language === "sw" ? "Vitendo" : "Practical"}
									</p>
								</div>
							</div>
						</div>

						{/* Right: Image Grid */}
						<div className="lg:col-span-2">
							<div className="grid grid-cols-2 gap-4">
								<div className="col-span-2 rounded-2xl overflow-hidden border-4 border-white/20">
									<img
										src={courseImage}
										alt="Main course"
										className="w-full h-64 object-cover"
									/>
								</div>
								<div className="rounded-xl overflow-hidden border-2 border-white/10">
									<img
										src={courseImage}
										alt="Course detail 1"
										className="w-full h-32 object-cover"
									/>
								</div>
								<div className="rounded-xl overflow-hidden border-2 border-white/10">
									<img
										src={courseImage}
										alt="Course detail 2"
										className="w-full h-32 object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-16 relative">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
						{/* Left: Main Content (2 cols) */}
						<div className="lg:col-span-2">
							{/* Tabs */}
							<div className="bg-white rounded-xl border border-gray-200 p-2 mb-8 flex gap-2">
								{tabs.map((tab) => (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition ${
											activeTab === tab.id
												? "bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white"
												: "text-gray-600 hover:bg-gray-50"
										}`}>
										{i18n.language === "sw" ? tab.label.sw : tab.label.en}
									</button>
								))}
							</div>

							{/* Tab Content */}
							<div className="bg-white rounded-2xl border border-gray-200 p-8">
								{activeTab === "overview" && (
									<div>
										<h2 className="text-3xl font-bold text-gray-900 mb-6">
											{i18n.language === "sw"
												? "Utajifunza Nini"
												: "What You'll Learn"}
										</h2>

										{/* Timeline-style benefits */}
										<div className="space-y-6">
											{benefits.map((benefit, idx) => (
												<div key={idx} className="flex gap-4 group">
													<div className="flex-shrink-0">
														<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#EE048B]/10 to-[#68226A]/10 flex items-center justify-center border border-[#EE048B]/20 group-hover:border-[#EE048B] transition">
															<benefit.icon
																size={24}
																className="text-[#EE048B]"
															/>
														</div>
													</div>
													<div className="flex-1">
														<h3 className="text-lg font-bold text-gray-900 mb-1">
															{i18n.language === "sw"
																? benefit.title.sw
																: benefit.title.en}
														</h3>
														<p className="text-gray-600">
															{i18n.language === "sw"
																? benefit.desc.sw
																: benefit.desc.en}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>
								)}

								{activeTab === "curriculum" && (
									<div>
										<h2 className="text-3xl font-bold text-gray-900 mb-6">
											{i18n.language === "sw"
												? "Mtaala wa Kozi"
												: "Course Curriculum"}
										</h2>
										<div className="space-y-4">
											{[...Array(course.duration)].map((_, i) => (
												<div
													key={i}
													className="border border-gray-200 rounded-lg p-4 hover:border-[#EE048B] transition">
													<div className="flex items-center justify-between">
														<div className="flex items-center gap-3">
															<div className="w-8 h-8 rounded-full bg-[#EE048B]/10 flex items-center justify-center">
																<span className="text-sm font-bold text-[#EE048B]">
																	{i + 1}
																</span>
															</div>
															<p className="font-semibold text-gray-900">
																{i18n.language === "sw"
																	? `Mwezi ${i + 1}`
																	: `Month ${i + 1}`}
															</p>
														</div>
														<ChevronRight size={20} className="text-gray-400" />
													</div>
												</div>
											))}
										</div>
									</div>
								)}

								{activeTab === "requirements" && (
									<div>
										<h2 className="text-3xl font-bold text-gray-900 mb-6">
											{i18n.language === "sw" ? "Mahitaji" : "Requirements"}
										</h2>
										<div className="space-y-4">
											{[
												{
													en: "No prior experience required",
													sw: "Hakuna uzoefu wa awali unahitajika",
												},
												{
													en: "Passion for beauty and creativity",
													sw: "Shauku ya urembo na ubunifu",
												},
												{
													en: "Basic English or Swahili proficiency",
													sw: "Ujuzi wa msingi wa Kiingereza au Kiswahili",
												},
												{
													en: "Commitment to complete the course",
													sw: "Kujitolea kukamilisha kozi",
												},
											].map((req, i) => (
												<div key={i} className="flex items-start gap-3">
													<CheckCircle
														size={20}
														className="text-[#EE048B] flex-shrink-0 mt-0.5"
													/>
													<p className="text-gray-700">
														{i18n.language === "sw" ? req.sw : req.en}
													</p>
												</div>
											))}
										</div>
									</div>
								)}
							</div>
						</div>

						{/* Right: Sticky CTA Card (1 col) */}
						<div className="lg:col-span-1">
							<div className="sticky top-24 bg-white rounded-2xl border-2 border-gray-200 overflow-hidden">
								{/* Price Header */}
								<div className="bg-gradient-to-br from-[#68226A] to-[#4a1650] p-6 text-white">
									<p className="text-sm text-white/70 mb-2">
										{i18n.language === "sw" ? "Kuanzia" : "Starting from"}
									</p>
									<div className="flex items-baseline gap-2 mb-4">
										<span className="text-5xl font-bold">
											{(course.fee / 1000).toFixed(0)}k
										</span>
										<span className="text-white/70">TSh</span>
									</div>
									<p className="text-sm text-white/60">
										{course.fee.toLocaleString()} TSh /{" "}
										{i18n.language === "sw" ? "mwezi" : "month"}
									</p>
								</div>

								{/* Pricing Options */}
								<div className="p-6 space-y-4">
									<div className="border-2 border-[#EE048B] rounded-xl p-4 bg-pink-50/50">
										<div className="flex items-center justify-between mb-2">
											<span className="text-sm font-semibold text-gray-700">
												{i18n.language === "sw"
													? "Bei Ya Kawaida"
													: "Regular Price"}
											</span>
											<span className="text-2xl font-bold text-gray-900">
												{(course.fee / 1000).toFixed(0)}k
											</span>
										</div>
										<p className="text-xs text-gray-500">
											{course.fee.toLocaleString()} TSh
										</p>
									</div>

									<div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
										<div className="flex items-center gap-2 mb-2">
											<Home size={16} className="text-[#68226A]" />
											<span className="text-sm font-semibold text-gray-700">
												{i18n.language === "sw" ? "Na Hostel" : "With Hostel"}
											</span>
										</div>
										<div className="flex items-baseline gap-2">
											<span className="text-2xl font-bold text-[#68226A]">
												{(course.feeWithHostel / 1000).toFixed(0)}k
											</span>
											<span className="text-xs text-gray-500">
												(+
												{((course.feeWithHostel - course.fee) / 1000).toFixed(
													0,
												)}
												k)
											</span>
										</div>
									</div>

									{/* Features */}
									<div className="pt-4 border-t border-gray-200 space-y-3">
										{[
											{
												en: "Professional Certificate",
												sw: "Cheti cha Kitaalamu",
											},
											{ en: "Modern Facilities", sw: "Vifaa Vya Kisasa" },
											{ en: "Expert Instructors", sw: "Wakufunzi Mahiri" },
										].map((feat, i) => (
											<div key={i} className="flex items-center gap-2">
												<div className="w-5 h-5 rounded-full bg-[#EE048B]/10 flex items-center justify-center flex-shrink-0">
													<CheckCircle size={14} className="text-[#EE048B]" />
												</div>
												<span className="text-sm text-gray-700">
													{i18n.language === "sw" ? feat.sw : feat.en}
												</span>
											</div>
										))}
									</div>

									{/* CTA Button */}
									<Link
										to={`/apply/${course.id}`}
										className="block w-full bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-4 px-6 rounded-xl text-center transition hover:shadow-xl group">
										<span className="flex items-center justify-center gap-2">
											{i18n.language === "sw"
												? "Jiandikishe Sasa"
												: "Enroll Now"}
											<ChevronRight
												size={20}
												className="group-hover:translate-x-1 transition-transform"
											/>
										</span>
									</Link>

									<p className="text-center text-xs text-gray-500">
										{i18n.language === "sw"
											? "Hakuna malipo ya awali yanahitajika"
											: "No upfront payment required"}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Related Courses */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
						{i18n.language === "sw" ? "Kozi Zingine" : "Related Courses"}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{coursesData
							.filter(
								(c) => c.category === course.category && c.id !== course.id,
							)
							.slice(0, 3)
							.map((relatedCourse) => (
								<Link
									key={relatedCourse.id}
									to={`/programs/${relatedCourse.id}`}
									onClick={() => window.scrollTo(0, 0)}
									className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-[#EE048B] transition">
									<div className="flex items-center gap-3 mb-4">
										<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#EE048B]/10 to-[#68226A]/10 flex items-center justify-center">
											<BookOpen size={24} className="text-[#EE048B]" />
										</div>
										<div className="text-sm text-gray-500">
											{relatedCourse.duration}{" "}
											{relatedCourse.duration === 1
												? i18n.language === "sw"
													? "mwezi"
													: "month"
												: i18n.language === "sw"
													? "miezi"
													: "months"}
										</div>
									</div>

									<h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#EE048B] transition">
										{i18n.language === "sw"
											? relatedCourse.name_sw
											: relatedCourse.name_en}
									</h3>

									<div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
										<span className="text-xl font-bold text-[#EE048B]">
											{(relatedCourse.fee / 1000).toFixed(0)}k TSh
										</span>
										<ChevronRight
											size={20}
											className="text-gray-400 group-hover:text-[#EE048B] group-hover:translate-x-1 transition"
										/>
									</div>
								</Link>
							))}
					</div>
				</div>
			</section>
		</div>
	);
}
