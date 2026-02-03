import { useTranslation } from "react-i18next";
import { BookOpen, Scissors, Sparkles, Users } from "lucide-react";
import courseImage from "../../assets/images/course.png";

export default function Environment() {
	const { t } = useTranslation();

	const features = [
		{
			icon: Scissors,
			titleKey: "environment.features.salon.title",
			descKey: "environment.features.salon.desc",
		},
		{
			icon: Sparkles,
			titleKey: "environment.features.modern.title",
			descKey: "environment.features.modern.desc",
		},
		{
			icon: BookOpen,
			titleKey: "environment.features.library.title",
			descKey: "environment.features.library.desc",
		},
		{
			icon: Users,
			titleKey: "environment.features.mentors.title",
			descKey: "environment.features.mentors.desc",
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-6">
				{/* ── Section Header ── */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
					<div>
						<div className="inline-flex items-center gap-2 mb-4">
							<span className="w-8 h-0.5 bg-[#EE048B]" />
							<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
								{t("environment.label")}
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
							{t("environment.title")}
							<span className="text-[#68226A]">
								{" "}
								{t("environment.titleHighlight")}
							</span>
						</h2>
					</div>
					<p className="text-gray-500 max-w-md text-right">
						{t("environment.subtitle")}
					</p>
				</div>

				{/* ── Main Grid: mosaic left + features right ── */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* ──── LEFT 2/3 : image mosaic ──── */}
					<div
						className="lg:col-span-2 grid grid-cols-12 grid-rows-2 gap-4"
						style={{ height: 520 }}>
						{/* Big hero image — left tall block */}
						<div className="col-span-5 row-span-2 relative rounded-2xl overflow-hidden group">
							<img
								src={courseImage}
								alt={t("environment.heroAlt")}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							{/* dark gradient overlay at bottom */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
							{/* text on image */}
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<span className="inline-block bg-[#EE048B] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
									{t("environment.heroTag")}
								</span>
								<h3 className="text-white text-xl font-bold leading-snug">
									{t("environment.heroTitle")}
								</h3>
								<p className="text-gray-300 text-xs mt-1">
									{t("environment.heroDesc")}
								</p>
							</div>
						</div>

						{/* Top-right: two side-by-side images */}
						<div className="col-span-4 row-span-1 relative rounded-2xl overflow-hidden group">
							<img
								src={courseImage}
								alt={t("environment.labAlt")}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 p-4">
								<span className="text-white text-sm font-bold">
									{t("environment.labTitle")}
								</span>
							</div>
						</div>

						<div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden group">
							<img
								src={courseImage}
								alt={t("environment.classAlt")}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 p-4">
								<span className="text-white text-sm font-bold">
									{t("environment.classTitle")}
								</span>
							</div>
						</div>

						{/* Bottom-right: two side-by-side images */}
						<div className="col-span-3 row-span-1 relative rounded-2xl overflow-hidden group">
							<img
								src={courseImage}
								alt={t("environment.hostelAlt")}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 p-4">
								<span className="text-white text-sm font-bold">
									{t("environment.hostelTitle")}
								</span>
							</div>
						</div>

						<div className="col-span-4 row-span-1 relative rounded-2xl overflow-hidden group">
							<img
								src={courseImage}
								alt={t("environment.practiceAlt")}
								className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
							<div className="absolute bottom-0 left-0 p-4">
								<span className="text-white text-sm font-bold">
									{t("environment.practiceTitle")}
								</span>
							</div>
						</div>
					</div>

					{/* ──── RIGHT 1/3 : feature cards stacked ──── */}
					<div className="lg:col-span-1 flex flex-col gap-4">
						{features.map((feat, i) => {
							const Icon = feat.icon;
							return (
								<div
									key={i}
									className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-start group hover:border-[#EE048B] hover:shadow-lg hover:shadow-pink-100 transition-all duration-300 relative overflow-hidden">
									{/* pink sliding bottom bar */}
									<div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#EE048B] group-hover:w-full transition-all duration-500 ease-out" />

									{/* icon circle */}
									<div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#68226A] bg-opacity-10 flex items-center justify-center">
										<Icon className="text-[#68226A]" size={22} />
									</div>

									<div>
										<h4 className="text-sm font-bold text-gray-900 mb-0.5">
											{t(feat.titleKey)}
										</h4>
										<p className="text-xs text-gray-500 leading-relaxed">
											{t(feat.descKey)}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
