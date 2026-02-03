import { useTranslation } from "react-i18next";
import heroImage from "../../assets/images/demolandingimage.jpg";

export default function Hero() {
	const { t } = useTranslation();

	return (
		<section
			className="relative w-screen h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
			style={{
				backgroundImage: `url(${heroImage})`,
				height: "100vh",
			}}>
			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-[#68226A]/92"></div>
			<div className="relative max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
				<div className="max-w-2xl">
					{/* Subtitle */}
					<p className="text-[#FFC107] text-lg font-semibold mb-4 uppercase tracking-wider">
						Professional Vocational Training
					</p>

					{/* Main Title */}
					<h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
						{t("hero.mainTitle")}
					</h1>

					{/* Description */}
					<p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-xl">
						{t("hero.mainSubtitle")}
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="bg-[#EE048B] hover:bg-[#d60278] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
							{t("hero.tourBtn")}
						</button>
						<button className="border-2 border-white text-white hover:bg-white hover:text-[#68226A] px-8 py-4 rounded-lg font-bold text-lg transition-all">
							{t("hero.exploreBtn")}
						</button>
					</div>
				</div>
			</div>

			{/* Bottom Feature Bar */}
			<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl -mb-20 rounded-2xl bg-[#68226A] py-8">
				<div className="px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
						<div className="text-center">
							<p className="text-2xl font-bold text-white">20+</p>
							<p className="text-sm opacity-90">{t("hero.courses")}</p>
						</div>
						<div className="text-center">
							<p className="text-2xl font-bold text-white">2500+</p>
							<p className="text-sm opacity-90">{t("hero.graduates")}</p>
						</div>
						<div className="text-center">
							<p className="text-2xl font-bold text-white">14+</p>
							<p className="text-sm opacity-90">{t("hero.years")}</p>
						</div>
						<div className="text-center">
							<p className="text-2xl font-bold text-white">35+</p>
							<p className="text-sm opacity-90">{t("hero.countries")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
