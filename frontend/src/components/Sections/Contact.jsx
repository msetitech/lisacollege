import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useState } from "react";
import locationImage from "../../assets/images/location.png";

export default function Contact() {
	const { i18n } = useTranslation();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	const contactInfo = [
		{
			icon: MapPin,
			title_en: "Location",
			title_sw: "Mahali",
			details: ["Tabata Kinyerezi", "Mwisho Songas, Dar es Salaam"],
			color: "from-blue-500 to-blue-600",
		},
		{
			icon: Phone,
			title_en: "Phone",
			title_sw: "Simu",
			details: ["+255 763 493 716", "+255 654 806 567"],
			color: "from-green-500 to-green-600",
		},
		{
			icon: Mail,
			title_en: "Email",
			title_sw: "Barua Pepe",
			details: ["info@lisacollege.com", "admissions@lisacollege.com"],
			color: "from-pink-500 to-rose-600",
		},
		{
			icon: Instagram,
			title_en: "Instagram",
			title_sw: "Instagram",
			details: ["@lisa-college", "Follow us for updates"],
			color: "from-purple-500 to-pink-600",
		},
	];

	return (
		<section className="py-20 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{i18n.language === "sw" ? "Wasiliana Nasi" : "Get in Touch"}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{i18n.language === "sw"
							? "Una maswali? Tupo hapa kuwasaidia. Wasiliana nasi leo!"
							: "Have questions? We're here to help. Contact us today!"}
					</p>
				</div>

				{/* Main Layout - 2 Columns */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					{/* Left Side - Background Image with Info Cards */}
					<div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[600px] lg:min-h-[700px]">
						{/* Background Image - Pure White */}
						<img
							src={locationImage}
							alt="World Location"
							className="absolute inset-0 w-full h-full object-cover brightness-200 contrast-200 grayscale"
						/>

						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-[#EE048B]/70 via-[#68226A]/60 to-[#2D1B4E]/70" />

						{/* Content Cards Overlay */}
						<div className="absolute inset-0 flex flex-col justify-center p-6 md:p-8 space-y-4">
							{contactInfo.map((info, idx) => {
								const Icon = info.icon;
								return (
									<div
										key={idx}
										className="bg-white/10 backdrop-blur-md border border-white/30 rounded-lg p-4">
										<div className="flex items-start gap-3">
											{/* Icon */}
											<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-white/30 to-white/10 flex-shrink-0 border border-white/50">
												<Icon className="w-5 h-5 text-white drop-shadow-lg" />
											</div>

											{/* Content */}
											<div>
												<h3 className="font-bold text-white mb-1 drop-shadow-lg">
													{i18n.language === "sw"
														? info.title_sw
														: info.title_en}
												</h3>
												<div className="space-y-1">
													{info.details.map((detail, i) => (
														<p
															key={i}
															className="text-white/90 text-sm drop-shadow">
															{detail}
														</p>
													))}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Right Side - Contact Form */}
					<div className="bg-white rounded-lg shadow-md p-6 lg:p-8 border-l-4 border-[#EE048B]">
						<h3 className="text-2xl font-bold text-gray-900 mb-6">
							{i18n.language === "sw" ? "Tuma Ujumbe" : "Send us a Message"}
						</h3>

						<form onSubmit={handleSubmit} className="space-y-4">
							{/* Name Input */}
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									{i18n.language === "sw" ? "Jina" : "Your Name"}
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									placeholder={
										i18n.language === "sw"
											? "Ingiza jina lako"
											: "Enter your name"
									}
									className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20"
									required
								/>
							</div>

							{/* Email Input */}
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									{i18n.language === "sw" ? "Barua Pepe" : "Email"}
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									placeholder={
										i18n.language === "sw"
											? "example@email.com"
											: "your@email.com"
									}
									className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20"
									required
								/>
							</div>

							{/* Subject Input */}
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									{i18n.language === "sw" ? "Mada" : "Subject"}
								</label>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									placeholder={
										i18n.language === "sw"
											? "Mada ya ujumbe"
											: "Message subject"
									}
									className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20"
									required
								/>
							</div>

							{/* Message Textarea */}
							<div>
								<label className="block text-sm font-semibold text-gray-700 mb-2">
									{i18n.language === "sw" ? "Ujumbe" : "Message"}
								</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									placeholder={
										i18n.language === "sw"
											? "Andika ujumbe wako hapa..."
											: "Type your message here..."
									}
									rows="4"
									className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 resize-none"
									required
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full bg-[#EE048B] hover:bg-[#68226A] text-white font-bold py-2.5 rounded-lg transition-colors duration-300">
								{i18n.language === "sw" ? "Tuma Ujumbe" : "Send Message"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
