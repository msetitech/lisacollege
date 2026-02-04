import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	Clock,
	DollarSign,
	Home,
	ArrowRight,
	Sparkles,
	Palette,
} from "lucide-react";

export default function CourseCard({ course }) {
	const { i18n } = useTranslation();
	const courseName = i18n.language === "sw" ? course.name_sw : course.name_en;
	const courseDesc =
		i18n.language === "sw" ? course.description_sw : course.description_en;

	// Get icon based on category
	const getCategoryIcon = () => {
		return course.category === "beauty" ? (
			<Sparkles size={18} className="text-white" />
		) : (
			<Palette size={18} className="text-white" />
		);
	};

	return (
		<Link to={`/programs/${course.id}`} className="group block h-full">
			<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
				{/* Header with Category Icon */}
				<div className="bg-gradient-to-r from-[#EE048B] to-[#68226A] p-4 relative overflow-hidden">
					<div className="absolute -right-6 -top-6 text-5xl opacity-10">
						{getCategoryIcon()}
					</div>
					<div className="relative z-10">
						<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 rounded-full mb-2">
							{getCategoryIcon()}
							<span className="text-white text-xs font-semibold">
								{i18n.language === "sw"
									? course.category_sw
									: course.category_en}
							</span>
						</div>
						<h3 className="text-lg font-bold text-white mb-1.5 line-clamp-2">
							{courseName}
						</h3>
						<p className="text-white/80 text-xs line-clamp-2">{courseDesc}</p>
					</div>
				</div>

				{/* Course Details */}
				<div className="p-4">
					{/* Duration and Fee Grid */}
					<div className="grid grid-cols-2 gap-2 mb-4">
						{/* Duration */}
						<div className="bg-gray-50 rounded-lg p-2.5">
							<div className="flex items-center gap-1.5 mb-0.5">
								<Clock size={14} className="text-[#EE048B]" />
								<span className="text-xs font-semibold text-gray-600">
									{i18n.language === "sw" ? "Muda" : "Duration"}
								</span>
							</div>
							<p className="text-sm font-bold text-gray-900">
								{course.duration}
								<span className="text-xs text-gray-600 ml-0.5">
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
						<div className="bg-[#F8F8F8] rounded-lg p-2.5 border-l-4 border-[#EE048B]">
							<div className="flex items-center gap-1.5 mb-0.5">
								<DollarSign size={14} className="text-[#EE048B]" />
								<span className="text-xs font-semibold text-gray-600">
									{i18n.language === "sw" ? "Bei" : "Fee"}
								</span>
							</div>
							<p className="text-sm font-bold text-gray-900">
								{(course.fee / 1000).toFixed(0)}k
							</p>
						</div>
					</div>

					{/* Hostel Option */}
					<div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-lg p-2.5 mb-4">
						<div className="flex items-center gap-1.5 mb-1">
							<Home size={14} className="text-[#68226A]" />
							<span className="text-xs font-semibold text-gray-700">
								{i18n.language === "sw" ? "Na Hostel" : "With Hostel"}
							</span>
						</div>
						<p className="text-sm font-bold text-[#68226A]">
							{(course.feeWithHostel / 1000).toFixed(0)}k TSh
						</p>
						<p className="text-xs text-gray-500 mt-0.5">
							{i18n.language === "sw"
								? `+ ${((course.feeWithHostel - course.fee) / 1000).toFixed(0)}k za hostel`
								: `+ ${((course.feeWithHostel - course.fee) / 1000).toFixed(0)}k hostel fee`}
						</p>
					</div>

					{/* Price Comparison Badge */}
					<div className="flex items-center justify-between text-xs text-gray-600 mb-4 pb-4 border-b border-gray-100">
						<span>
							{i18n.language === "sw" ? "Bei Bila Hostel" : "Regular Price"}
						</span>
						<span className="font-semibold text-gray-900">
							{course.fee.toLocaleString()} TSh
						</span>
					</div>

					{/* Enroll Button */}
					<button className="w-full bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-2.5 px-3 rounded-lg hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group/btn text-sm">
						{i18n.language === "sw" ? "Jifunze Sasa" : "Enroll Now"}
						<ArrowRight
							size={16}
							className="group-hover/btn:translate-x-1 transition-transform"
						/>
					</button>

					{/* Additional Info */}
					<p className="text-center text-xs text-gray-500 mt-2">
						{i18n.language === "sw"
							? "Tuma maombi yako leo"
							: "Start your journey today"}
					</p>
				</div>
			</div>
		</Link>
	);
}
