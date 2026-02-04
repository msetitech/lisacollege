import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Clock, DollarSign, Home, ArrowRight } from "lucide-react";

export default function CourseCard({ course }) {
	const { i18n } = useTranslation();
	const courseName = i18n.language === "sw" ? course.name_sw : course.name_en;
	const courseDesc =
		i18n.language === "sw" ? course.description_sw : course.description_en;

	return (
		<Link to={`/programs/${course.id}`} className="group block h-full">
			<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col group-hover:scale-105 transform">
				{/* Header with Category Icon */}
				<div className="bg-gradient-to-r from-[#EE048B] to-[#68226A] p-6 relative overflow-hidden">
					<div className="absolute -right-8 -top-8 text-6xl opacity-20">
						{course.icon}
					</div>
					<div className="relative z-10">
						<div className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full mb-3">
							<span className="text-white text-xs font-semibold">
								{course.icon}{" "}
								{i18n.language === "sw"
									? course.category_sw
									: course.category_en}
							</span>
						</div>
						<h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
							{courseName}
						</h3>
						<p className="text-white/80 text-sm line-clamp-2">{courseDesc}</p>
					</div>
				</div>

				{/* Course Details */}
				<div className="p-6">
					{/* Duration and Fee Grid */}
					<div className="grid grid-cols-2 gap-3 mb-6">
						{/* Duration */}
						<div className="bg-gray-50 rounded-lg p-3">
							<div className="flex items-center gap-2 mb-1">
								<Clock size={16} className="text-[#EE048B]" />
								<span className="text-xs font-semibold text-gray-600">
									{i18n.language === "sw" ? "Muda" : "Duration"}
								</span>
							</div>
							<p className="text-lg font-bold text-gray-900">
								{course.duration}
								<span className="text-xs text-gray-600 ml-1">
									{course.duration === 1
										? i18n.language === "sw"
											? "mwezi"
											: "mo"
										: i18n.language === "sw"
											? "miezi"
											: "mos"}
								</span>
							</p>
						</div>

						{/* Base Fee */}
						<div className="bg-[#F8F8F8] rounded-lg p-3 border-l-4 border-[#EE048B]">
							<div className="flex items-center gap-2 mb-1">
								<DollarSign size={16} className="text-[#EE048B]" />
								<span className="text-xs font-semibold text-gray-600">
									{i18n.language === "sw" ? "Bei" : "Fee"}
								</span>
							</div>
							<p className="text-lg font-bold text-gray-900">
								{(course.fee / 1000).toFixed(0)}k
							</p>
						</div>
					</div>

					{/* Hostel Option */}
					<div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-lg p-3 mb-6">
						<div className="flex items-center gap-2 mb-2">
							<Home size={16} className="text-[#68226A]" />
							<span className="text-sm font-semibold text-gray-700">
								{i18n.language === "sw" ? "Na Hostel" : "With Hostel"}
							</span>
						</div>
						<p className="text-lg font-bold text-[#68226A]">
							{(course.feeWithHostel / 1000).toFixed(0)}k TSh
						</p>
						<p className="text-xs text-gray-500 mt-1">
							{i18n.language === "sw"
								? `+ ${((course.feeWithHostel - course.fee) / 1000).toFixed(0)}k za hostel`
								: `+ ${((course.feeWithHostel - course.fee) / 1000).toFixed(0)}k hostel fee`}
						</p>
					</div>

					{/* Price Comparison Badge */}
					<div className="flex items-center justify-between text-xs text-gray-600 mb-6 pb-6 border-b border-gray-100">
						<span>
							{i18n.language === "sw" ? "Bei Bila Hostel" : "Regular Price"}
						</span>
						<span className="font-semibold text-gray-900">
							{course.fee.toLocaleString()} TSh
						</span>
					</div>

					{/* Enroll Button */}
					<button className="w-full bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
						{i18n.language === "sw" ? "Jifunze Sasa" : "Enroll Now"}
						<ArrowRight
							size={18}
							className="group-hover/btn:translate-x-1 transition-transform"
						/>
					</button>

					{/* Additional Info */}
					<p className="text-center text-xs text-gray-500 mt-4">
						{i18n.language === "sw"
							? "Tuma maombi yako leo"
							: "Start your journey today"}
					</p>
				</div>
			</div>
		</Link>
	);
}
