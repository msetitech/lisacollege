import { useTranslation } from "react-i18next";
import {
	Award,
	Users,
	BookOpen,
	Globe,
	CheckCircle,
	Target,
	Heart,
	Lightbulb,
} from "lucide-react";

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

	const values = [
		{
			icon: Target,
			titleKey: "about.values.excellence.title",
			descKey: "about.values.excellence.description",
		},
		{
			icon: Heart,
			titleKey: "about.values.passion.title",
			descKey: "about.values.passion.description",
		},
		{
			icon: Lightbulb,
			titleKey: "about.values.innovation.title",
			descKey: "about.values.innovation.description",
		},
		{
			icon: Users,
			titleKey: "about.values.community.title",
			descKey: "about.values.community.description",
		},
	];

	return (
		<>
			{/* Hero Section - Matching Programs page style */}
			<section
				className="relative overflow-hidden pt-32 pb-16"
				style={{
					background:
						"linear-gradient(135deg, #68226A 0%, #4a1650 60%, #3d1245 100%)",
				}}>
				{/* Decorative circles */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
					<div className="absolute -top-20 -left-20 w-96 h-96 rounded-full border border-white/10" />
					<div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full border border-white/10" />
					<div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full border border-white/10" />
				</div>

				<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
					<div className="inline-flex items-center gap-2 mb-6">
						<span className="w-8 h-0.5 bg-[#EE048B]" />
						<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
							{t("about.label")}
						</span>
						<span className="w-8 h-0.5 bg-[#EE048B]" />
					</div>

					<div className="flex items-center justify-center gap-4 mb-6">
						<Award size={56} className="text-[#EE048B]" />
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
							{t("about.heroTitle")}
						</h1>
					</div>

					<p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
						{t("about.heroDescription")}
					</p>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="py-16 md:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					{/* Story Section */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
						{/* Left: Text Content */}
						<div>
							<div className="inline-flex items-center gap-2 mb-5">
								<span className="w-8 h-0.5 bg-[#EE048B]" />
								<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
									{t("about.ourStory.label")}
								</span>
							</div>

							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
								{t("about.ourStory.title")}
								<span className="text-[#68226A]">
									{" "}
									{t("about.ourStory.titleHighlight")}
								</span>
							</h2>

							<p className="text-gray-600 leading-relaxed mb-4">
								{t("about.ourStory.description1")}
							</p>
							<p className="text-gray-600 leading-relaxed mb-8">
								{t("about.ourStory.description2")}
							</p>

							{/* Bullet list */}
							<ul className="space-y-3">
								{highlights.map((key, i) => (
									<li key={i} className="flex items-start gap-3">
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

						{/* Right: Stats Grid */}
						<div className="grid grid-cols-2 gap-5">
							{stats.map((stat, index) => {
								const Icon = stat.icon;
								return (
									<div
										key={index}
										className="relative group bg-white border border-gray-100 rounded-xl p-6 overflow-hidden transition-all duration-300 hover:border-[#EE048B] hover:shadow-lg hover:shadow-pink-100">
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

					{/* Values Section */}
					<div className="mb-20">
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 mb-5">
								<span className="w-8 h-0.5 bg-[#EE048B]" />
								<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
									{t("about.values.label")}
								</span>
								<span className="w-8 h-0.5 bg-[#EE048B]" />
							</div>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
								{t("about.values.title")}
							</h2>
							<p className="text-gray-600 max-w-2xl mx-auto">
								{t("about.values.description")}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{values.map((value, index) => {
								const Icon = value.icon;
								return (
									<div
										key={index}
										className="group bg-white border border-gray-100 rounded-xl p-6 hover:border-[#EE048B] hover:shadow-lg hover:shadow-pink-100 transition-all duration-300">
										<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#68226A] to-[#EE048B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
											<Icon className="text-white" size={28} />
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#68226A] transition-colors">
											{t(value.titleKey)}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{t(value.descKey)}
										</p>
									</div>
								);
							})}
						</div>
					</div>

					{/* Mission & Vision Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
						{/* Mission */}
						<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#EE048B] transition-all duration-300 hover:shadow-xl">
							<div className="w-16 h-16 rounded-full bg-[#EE048B] bg-opacity-10 flex items-center justify-center mb-6">
								<Target className="text-[#EE048B]" size={32} />
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								{t("about.mission.title")}
							</h3>
							<p className="text-gray-600 leading-relaxed">
								{t("about.mission.description")}
							</p>
						</div>

						{/* Vision */}
						<div className="bg-gradient-to-br from-[#68226A] to-[#EE048B] rounded-2xl p-8 text-white hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-6">
								<Lightbulb className="text-white" size={32} />
							</div>
							<h3 className="text-2xl font-bold mb-4">
								{t("about.vision.title")}
							</h3>
							<p className="text-white text-opacity-90 leading-relaxed">
								{t("about.vision.description")}
							</p>
						</div>
					</div>

					{/* Why Choose Us Section */}
					<div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								{t("about.whyChooseUs.title")}
							</h2>
							<p className="text-gray-600 max-w-2xl mx-auto">
								{t("about.whyChooseUs.description")}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								"about.whyChooseUs.reason1",
								"about.whyChooseUs.reason2",
								"about.whyChooseUs.reason3",
								"about.whyChooseUs.reason4",
								"about.whyChooseUs.reason5",
								"about.whyChooseUs.reason6",
							].map((key, idx) => (
								<div key={idx} className="flex items-start gap-4">
									<CheckCircle
										className="text-[#EE048B] flex-shrink-0 mt-1"
										size={24}
									/>
									<p className="text-gray-700 font-medium">{t(key)}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-[#68226A] to-[#EE048B]">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						{t("about.cta.title")}
					</h2>
					<p className="text-xl text-white text-opacity-90 mb-8">
						{t("about.cta.description")}
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<a
							href="/programs"
							className="bg-white text-[#68226A] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
							<BookOpen size={20} />
							{t("about.cta.viewCourses")}
						</a>
						<a
							href="/contact"
							className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#68226A] transition-colors">
							{t("about.cta.contactUs")}
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
