import { useTranslation } from "react-i18next";
import ownerImage from "../../assets/images/owner.jpeg";

export default function OwnerMessage() {
	const { t } = useTranslation();

	return (
		<section className="py-8 md:py-12 bg-gradient-to-r from-white via-[#68226A]/5 to-white">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
					{/* Owner Image - Left */}
					<div className="flex justify-center md:justify-start">
						<div className="w-full max-w-sm rounded-xl overflow-hidden shadow-2xl border-4 border-[#EE048B]/30">
							<img
								src={ownerImage}
								alt="Owner of LISA College"
								className="w-full h-auto object-cover"
							/>
						</div>
					</div>

					{/* Welcome Message - Right */}
					<div className="text-center md:text-left bg-gradient-to-br from-[#68226A]/10 via-[#EE048B]/5 to-[#FFC107]/5 p-6 md:p-8 rounded-xl border-l-4 border-[#EE048B]">
						<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#68226A] via-[#EE048B] to-[#68226A] bg-clip-text text-transparent mb-4">
							{t("owner.title")}
						</h2>
						<p className="text-base md:text-lg text-[#68226A] mb-4 leading-relaxed font-medium">
							{t("owner.message")}
						</p>
						<div className="mt-6 pt-4 border-t-2 border-[#EE048B]/40">
							<p className="font-bold text-lg bg-gradient-to-r from-[#EE048B] to-[#68226A] bg-clip-text text-transparent">
								{t("owner.name")}
							</p>
							<p className="text-[#68226A]/70 font-semibold text-sm">
								{t("owner.position")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
