import { useTranslation } from "react-i18next";
import { Award, Users, BookOpen, Globe } from "lucide-react";

export default function About() {
	const { t } = useTranslation();

	const stats = [
		{ icon: Award, labelKey: "about.stats.years", value: "14+" },
		{ icon: Users, labelKey: "about.stats.graduates", value: "2,500+" },
		{ icon: BookOpen, labelKey: "about.stats.courses", value: "11+" },
		{ icon: Globe, labelKey: "about.stats.countries", value: "35+" },
	];

	const highlights = [
		"about.highlights.curriculum",
		"about.highlights.training",
		"about.highlights.career",
		"about.highlights.certification",
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* ── Left: Text Content ── */}
					<div>
						{/* Label pill */}
						<div className="inline-flex items-center gap-2 mb-5">
							<span className="w-8 h-0.5 bg-[#EE048B]" />
							<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
								{t("about.label")}
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
							{t("about.title")}
							<span className="text-[#68226A]">
								{" "}
								{t("about.titleHighlight")}
							</span>
						</h2>

						<p className="text-gray-600 leading-relaxed mb-4">
							{t("about.description1")}
						</p>
						<p className="text-gray-600 leading-relaxed mb-8">
							{t("about.description2")}
						</p>

						{/* Bullet list */}
						<ul className="space-y-3">
							{highlights.map((key, i) => (
								<li key={i} className="flex items-start gap-3">
									{/* Pink check circle */}
									<span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#EE048B] flex items-center justify-center">
										<svg width="11" height="9" viewBox="0 0 11 9" fill="none">
											<path
												d="M1 4.5L3.8 7.3L9.5 1"
												stroke="white"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<span className="text-gray-700 font-medium">{t(key)}</span>
								</li>
							))}
						</ul>
					</div>

					{/* ── Right: Stats Grid ── */}
					<div className="grid grid-cols-2 gap-5">
						{stats.map((stat, index) => {
							const Icon = stat.icon;
							return (
								<div
									key={index}
									className="relative group bg-gray-50 border border-gray-100 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-[#EE048B] hover:shadow-lg hover:shadow-pink-100">
									{/* subtle accent corner on hover */}
									<div className="absolute top-0 right-0 w-16 h-16 bg-[#68226A] opacity-0 group-hover:opacity-5 rounded-bl-3xl transition-opacity duration-300" />

									{/* Icon inside a tinted circle */}
									<div className="w-12 h-12 rounded-full bg-[#68226A] bg-opacity-10 flex items-center justify-center mb-4">
										<Icon className="text-[#68226A]" size={24} />
									</div>

									<div className="text-3xl font-bold text-gray-900 mb-1">
										{stat.value}
									</div>
									<div className="text-sm text-gray-500">
										{t(stat.labelKey)}
									</div>

									{/* thin pink bottom bar that slides in on hover */}
									<div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#EE048B] group-hover:w-full transition-all duration-500 ease-out" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
