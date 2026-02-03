import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import courseImage from "../../assets/images/course.png";

export default function Programs() {
	const { t } = useTranslation();

	const programs = [
		{
			id: 1,
			title: t("programs.makeup"),
			description: t("programs.makeupDesc"),
		},
		{
			id: 2,
			title: t("programs.hair"),
			description: t("programs.hairDesc"),
		},
		{
			id: 3,
			title: t("programs.beauty"),
			description: t("programs.beautyDesc"),
		},
		{
			id: 4,
			title: t("programs.fashion"),
			description: t("programs.fashionDesc"),
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{t("programs.title")}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{t("programs.subtitle")}
					</p>
				</div>

				{/* Course Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{programs.map((program) => (
						<div
							key={program.id}
							className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
							{/* Course Image */}
							<div className="relative h-48 overflow-hidden bg-gray-200">
								<img
									src={courseImage}
									alt={program.title}
									className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
								/>
								{/* Overlay on hover */}
								<div className="absolute inset-0 bg-[#68226A]/0 hover:bg-[#68226A]/40 transition-colors duration-300"></div>
							</div>

							{/* Course Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{program.title}
								</h3>
								<p className="text-gray-600 text-sm mb-4 line-clamp-3">
									{program.description}
								</p>
								<button className="inline-flex items-center gap-2 text-[#EE048B] font-bold hover:text-[#68226A] transition-colors duration-300">
									{t("programs.learnMore")}
									<ArrowRight className="w-4 h-4" />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
