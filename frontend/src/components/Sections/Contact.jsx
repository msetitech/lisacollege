import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
	useTranslation();

	const contactInfo = [
		{
			icon: MapPin,
			title_en: "Address",
			title_sw: "Anwani",
			details: ["123 Fashion Street", "Dar es Salaam, Tanzania"],
		},
		{
			icon: Phone,
			title_en: "Phone",
			title_sw: "Simu",
			details: ["+255 (22) 123-4567", "+255 (67) 123-4567"],
		},
		{
			icon: Mail,
			title_en: "Email",
			title_sw: "Barua Pepe",
			details: ["info@lisacollege.com", "admissions@lisacollege.com"],
		},
		{
			icon: Clock,
			title_en: "Hours",
			title_sw: "Wakat wa Kufungua",
			details: ["Mon - Fri: 8am - 5pm", "Sat: 9am - 2pm"],
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						📞 Get in Touch
					</h2>
					<p className="text-gray-600 text-lg max-w-2xl mx-auto">
						Have questions? We're here to help. Contact us today!
					</p>
				</div>

				{/* Contact Info Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					{contactInfo.map((info, idx) => {
						const Icon = info.icon;
						return (
							<div
								key={idx}
								className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
								<Icon className="w-8 h-8 text-[#EE048B] mb-4" />
								<h3 className="font-bold text-gray-900 mb-3">
									{info.title_en}
								</h3>
								<div className="space-y-1">
									{info.details.map((detail, i) => (
										<p key={i} className="text-gray-600 text-sm">
											{detail}
										</p>
									))}
								</div>
							</div>
						);
					})}
				</div>

				{/* Contact Form */}
				<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
					<h3 className="text-2xl font-bold text-gray-900 mb-6">
						Send us a Message
					</h3>
					<form className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<input
								type="text"
								placeholder="Your Name"
								className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#68226A]"
							/>
							<input
								type="email"
								placeholder="Your Email"
								className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#68226A]"
							/>
						</div>
						<input
							type="text"
							placeholder="Subject"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#68226A]"
						/>
						<textarea
							placeholder="Your Message"
							rows="5"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#68226A]"></textarea>
						<button
							type="submit"
							className="w-full bg-[#EE048B] hover:bg-[#68226A] text-white font-bold py-3 rounded-lg transition-colors duration-300">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
