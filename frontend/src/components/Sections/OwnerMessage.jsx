import { useTranslation } from "react-i18next";
import ownerImage from "../../assets/images/owner.jpeg";

export default function OwnerMessage() {
	const { t } = useTranslation();

	return (
		<section className="py-16 md:py-24 bg-white">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
					{/* Owner Image - Left */}
					<div className="flex justify-center md:justify-start">
						<div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
							<img
								src={ownerImage}
								alt="Owner of LISA College"
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>

					{/* Welcome Message - Right */}
					<div className="text-center md:text-left">
						<h2 className="text-4xl md:text-5xl font-bold text-[#68226A] mb-6">
							{t("owner.title")}
						</h2>
						<p className="text-lg text-gray-700 mb-4 leading-relaxed">
							{t("owner.message")}
						</p>
						<div className="mt-8 pt-6 border-t-2 border-[#68226A]/20">
							<p className="font-semibold text-[#68226A] text-lg">
								{t("owner.name")}
							</p>
							<p className="text-gray-600">{t("owner.position")}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
