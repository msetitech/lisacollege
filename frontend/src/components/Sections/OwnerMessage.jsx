import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import ownerImage from "../../assets/images/owner.jpeg";

export default function OwnerMessage() {
	const { t } = useTranslation();

	return (
		<section className="pt-0 pb-8 bg-white relative z-0">
			<div className="max-w-7xl mx-auto px-8 ">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-80">
					{/* Left: Owner Image */}
					<div className="flex items-center justify-center overflow-hidden h-full">
						<img
							src={ownerImage}
							alt="Owner of LISA College"
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Right: Dark Background with Content */}
					<div className="bg-[#68226A] px-8 md:px-12 py-8 md:py-12 flex flex-col justify-center">
						<h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
							{t("owner.title")}
						</h2>
						<p className="text-gray-200 text-sm md:text-base leading-relaxed mb-6">
							{t("owner.message")}
						</p>
						<div className="mb-6">
							<p className="text-base font-bold text-white">
								{t("owner.name")}
							</p>
							<p className="text-[#FFC107] font-semibold text-xs">
								{t("owner.position")}
							</p>
						</div>
						<button className="inline-flex items-center gap-2 bg-[#EE048B] hover:bg-[#d60278] text-white font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 w-fit text-sm">
							{t("owner.cta")}
							<ArrowRight className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
