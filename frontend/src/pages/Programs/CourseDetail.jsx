import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	ArrowLeft,
	Clock,
	DollarSign,
	Home,
	CheckCircle,
	BookOpen,
} from "lucide-react";
import { coursesData } from "./coursesData";

export default function CourseDetail() {
	const { id } = useParams();
	const { i18n } = useTranslation();

	const course = coursesData.find((c) => c.id === parseInt(id));

	if (!course) {
		return (
			<section className="py-20 bg-gray-50 min-h-screen">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						{i18n.language === "sw" ? "Kozi Haipatikani" : "Course Not Found"}
					</h1>
					<p className="text-gray-600 mb-8">
						{i18n.language === "sw"
							? "Kozi unayotafuta haipatikani"
							: "The course you are looking for does not exist"}
					</p>
					<Link
						to="/programs"
						className="inline-flex items-center gap-2 bg-[#EE048B] text-white px-6 py-3 rounded-lg hover:bg-[#68226A] transition">
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

	return (
		<section className="py-20 bg-gray-50 min-h-screen pt-32">
			<div className="max-w-4xl mx-auto px-4">
				{/* Back Button */}
				<Link
					to="/programs"
					className="inline-flex items-center gap-2 text-[#EE048B] hover:text-[#68226A] font-semibold mb-8 transition">
					<ArrowLeft size={20} />
					{i18n.language === "sw" ? "Rudi nyuma" : "Back to Programs"}
				</Link>

				{/* Header */}
				<div className="bg-gradient-to-r from-[#EE048B] to-[#68226A] rounded-lg p-8 mb-12 text-white">
					<div className="flex items-start justify-between gap-4">
						<div>
							<div className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-4">
								<span className="font-semibold">
									{course.icon} {categoryName}
								</span>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								{courseName}
							</h1>
							<p className="text-lg text-white/90">{courseDesc}</p>
						</div>
						<div className="text-6xl opacity-20">{course.icon}</div>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Column - Details */}
					<div className="lg:col-span-2">
						{/* Key Information */}
						<div className="bg-white rounded-lg shadow-md p-8 mb-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								{i18n.language === "sw" ? "Taarifa Kuu" : "Key Information"}
							</h2>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Duration */}
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF5F9]">
											<Clock size={24} className="text-[#EE048B]" />
										</div>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											{i18n.language === "sw"
												? "Muda wa Kozi"
												: "Course Duration"}
										</h3>
										<p className="text-gray-600 mt-1">
											{course.duration}{" "}
											{course.duration === 1 ? "month" : "months"}
										</p>
									</div>
								</div>

								{/* Base Fee */}
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF5F9]">
											<DollarSign size={24} className="text-[#EE048B]" />
										</div>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											{i18n.language === "sw" ? "Bei" : "Course Fee"}
										</h3>
										<p className="text-gray-600 mt-1">
											{course.fee.toLocaleString()} TSh
										</p>
									</div>
								</div>

								{/* Hostel Fee */}
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF5F9]">
											<Home size={24} className="text-[#EE048B]" />
										</div>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											{i18n.language === "sw" ? "Na Hostel" : "With Hostel"}
										</h3>
										<p className="text-gray-600 mt-1">
											{course.feeWithHostel.toLocaleString()} TSh
										</p>
										<p className="text-sm text-gray-500 mt-1">
											({((course.feeWithHostel - course.fee) / 1000).toFixed(0)}
											k {i18n.language === "sw" ? "ziada" : "additional"})
										</p>
									</div>
								</div>

								{/* Category */}
								<div className="flex gap-4">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#FFF5F9]">
											<BookOpen size={24} className="text-[#EE048B]" />
										</div>
									</div>
									<div>
										<h3 className="font-semibold text-gray-900">
											{i18n.language === "sw" ? "Kategoria" : "Category"}
										</h3>
										<p className="text-gray-600 mt-1">{categoryName}</p>
									</div>
								</div>
							</div>
						</div>

						{/* What You'll Learn */}
						<div className="bg-white rounded-lg shadow-md p-8">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								{i18n.language === "sw"
									? "Utajifunza Nini"
									: "What You'll Learn"}
							</h2>

							<div className="space-y-4">
								{[
									{
										en: "Industry-standard techniques and practices",
										sw: "Mbinu za kiwango cha kitaifa",
									},
									{
										en: "Hands-on practical experience",
										sw: "Uzoefu wa kufanya kazi",
									},
									{
										en: "Professional certification upon completion",
										sw: "Cheti cha kitaalamu baada ya kumalizia",
									},
									{
										en: "Career development guidance and support",
										sw: "Mwongozo wa maendeleo ya karera",
									},
									{
										en: "Access to modern facilities and equipment",
										sw: "Upatikanaji wa vifaa vya kisasa",
									},
									{
										en: "Networking opportunities with industry professionals",
										sw: "Fursa ya kuangalia wataalamu wa sekta",
									},
								].map((item, idx) => (
									<div key={idx} className="flex gap-3">
										<CheckCircle
											size={20}
											className="text-[#EE048B] flex-shrink-0 mt-1"
										/>
										<p className="text-gray-700">
											{i18n.language === "sw" ? item.sw : item.en}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right Column - Sidebar */}
					<div>
						{/* Pricing Card */}
						<div className="bg-white rounded-lg shadow-md p-8 sticky top-32 mb-6">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								{i18n.language === "sw"
									? "Bei na Kujiandikisha"
									: "Pricing & Enroll"}
							</h3>

							{/* Price Options */}
							<div className="space-y-4 mb-8">
								{/* Regular Price */}
								<div className="border-2 border-[#EE048B] rounded-lg p-4">
									<p className="text-sm text-gray-600 mb-1">
										{i18n.language === "sw"
											? "Bei Ya Kawaida"
											: "Regular Price"}
									</p>
									<p className="text-3xl font-bold text-gray-900">
										{(course.fee / 1000).toFixed(0)}k
									</p>
									<p className="text-xs text-gray-500 mt-2">
										{course.fee.toLocaleString()} TSh
									</p>
								</div>

								{/* Hostel Price */}
								<div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
									<p className="text-sm text-gray-600 mb-1">
										{i18n.language === "sw" ? "Na Hostel" : "With Hostel"}
									</p>
									<p className="text-3xl font-bold text-[#68226A]">
										{(course.feeWithHostel / 1000).toFixed(0)}k
									</p>
									<p className="text-xs text-gray-500 mt-2">
										{course.feeWithHostel.toLocaleString()} TSh
									</p>
								</div>
							</div>

							{/* Features */}
							<div className="space-y-2 mb-8 pb-8 border-b border-gray-200">
								<div className="flex items-center gap-2">
									<CheckCircle size={18} className="text-[#EE048B]" />
									<span className="text-sm text-gray-700">
										{i18n.language === "sw"
											? "Kumalizia Mwezi " + course.duration
											: `${course.duration} Month Course`}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle size={18} className="text-[#EE048B]" />
									<span className="text-sm text-gray-700">
										{i18n.language === "sw"
											? "Cheti Cha Kitaalamu"
											: "Professional Certificate"}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<CheckCircle size={18} className="text-[#EE048B]" />
									<span className="text-sm text-gray-700">
										{i18n.language === "sw"
											? "Vifaa Vya Kisasa"
											: "Modern Facilities"}
									</span>
								</div>
							</div>

							{/* Enroll Button */}
							<button
								onClick={() =>
									alert(
										i18n.language === "sw"
											? "Asante kwa kukamatia!"
											: "Thank you for your interest!",
									)
								}
								className="w-full bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300">
								{i18n.language === "sw" ? "Jiandikishe Sasa" : "Enroll Now"}
							</button>

							<p className="text-center text-xs text-gray-500 mt-4">
								{i18n.language === "sw"
									? "Hakuna Risiti ya Saini"
									: "No Credit Card Required"}
							</p>
						</div>
					</div>
				</div>

				{/* Related Courses */}
				<div className="mt-16 pt-16 border-t border-gray-200">
					<h2 className="text-3xl font-bold text-gray-900 mb-8">
						{i18n.language === "sw" ? "Kozi Zingine" : "Other Courses"}
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
									className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition group">
									<div className="text-4xl mb-3 opacity-50 group-hover:opacity-100 transition">
										{relatedCourse.icon}
									</div>
									<h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
										{i18n.language === "sw"
											? relatedCourse.name_sw
											: relatedCourse.name_en}
									</h3>
									<p className="text-sm text-gray-600 mb-4">
										{relatedCourse.duration}{" "}
										{relatedCourse.duration === 1 ? "month" : "months"}
									</p>
									<p className="text-lg font-bold text-[#EE048B]">
										{(relatedCourse.fee / 1000).toFixed(0)}k TSh
									</p>
								</Link>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}
