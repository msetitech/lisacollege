import { useTranslation } from "react-i18next";
import { Users, BookOpen, Globe, Award } from "lucide-react";

export default function Stats() {
	useTranslation();

	const stats = [
		{
			icon: Users,
			number: "2,500+",
			label: "students",
		},
		{
			icon: BookOpen,
			number: "15+",
			label: "courses",
		},
		{
			icon: Award,
			number: "98%",
			label: "successRate",
		},
		{
			icon: Globe,
			number: "25+",
			label: "countries",
		},
	];

	const labels = {
		students_en: "Students Trained",
		students_sw: "Wanafunzi Walifunzwa",
		courses_en: "Professional Courses",
		courses_sw: "Kozi za Kitaalamu",
		successRate_en: "Success Rate",
		successRate_sw: "Kiwango cha Mafaniko",
		countries_en: "Countries Reached",
		countries_sw: "Nchi Zilizofika",
	};

	return (
		<section className="py-16 bg-gradient-to-r from-[#68226A] to-[#EE048B]">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					{stats.map((stat, idx) => {
						const Icon = stat.icon;
						return (
							<div key={idx} className="text-center">
								<Icon className="w-12 h-12 text-white mx-auto mb-4" />
								<h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
									{stat.number}
								</h3>
								<p className="text-white text-sm opacity-90">
									{labels[stat.label + "_en"]}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
