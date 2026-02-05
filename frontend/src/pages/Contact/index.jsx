import { useTranslation } from "react-i18next";
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	Instagram,
	Facebook,
	Send,
	MessageCircle,
	User,
	AtSign,
	FileText,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
	const { t, i18n } = useTranslation();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
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
		// Add your form submission logic here
		alert(
			i18n.language === "sw"
				? "Asante! Ujumbe wako umetumwa. Tutawasiliana nawe hivi karibuni."
				: "Thank you! Your message has been sent. We'll get back to you soon.",
		);
		setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
	};

	const contactInfo = [
		{
			icon: MapPin,
			titleKey: "contact.location.title",
			details: ["Tabata Kinyerezi", "Mwisho Songas", "Dar es Salaam, Tanzania"],
			color: "from-blue-500 to-blue-600",
			bgColor: "bg-blue-50",
			iconColor: "text-blue-600",
		},
		{
			icon: Phone,
			titleKey: "contact.phone.title",
			details: ["+255 763 493 716", "+255 654 806 567"],
			color: "from-green-500 to-green-600",
			bgColor: "bg-green-50",
			iconColor: "text-green-600",
		},
		{
			icon: Mail,
			titleKey: "contact.email.title",
			details: ["info@lisacollege.ac.tz", "admissions@lisacollege.ac.tz"],
			color: "from-pink-500 to-rose-600",
			bgColor: "bg-pink-50",
			iconColor: "text-pink-600",
		},
		{
			icon: Clock,
			titleKey: "contact.hours.title",
			details: [
				t("contact.hours.weekdays"),
				t("contact.hours.saturday"),
				t("contact.hours.sunday"),
			],
			color: "from-purple-500 to-purple-600",
			bgColor: "bg-purple-50",
			iconColor: "text-purple-600",
		},
	];

	const socialLinks = [
		{
			icon: Instagram,
			name: "Instagram",
			handle: "@lisacollege_tz",
			url: "#",
			color: "hover:text-pink-600",
		},
		{
			icon: Facebook,
			name: "Facebook",
			handle: "Lisa College Gharama",
			url: "#",
			color: "hover:text-blue-600",
		},
	];

	return (
		<>
			{/* Hero Section */}
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
							{t("contact.label")}
						</span>
						<span className="w-8 h-0.5 bg-[#EE048B]" />
					</div>

					<div className="flex items-center justify-center gap-4 mb-6">
						<MessageCircle size={56} className="text-[#EE048B]" />
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
							{t("contact.heroTitle")}
						</h1>
					</div>

					<p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
						{t("contact.heroDescription")}
					</p>
				</div>
			</section>

			{/* Contact Information Cards */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
						{contactInfo.map((info, idx) => {
							const Icon = info.icon;
							return (
								<div
									key={idx}
									className="group bg-white rounded-xl p-6 shadow-md hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#EE048B]">
									{/* Icon */}
									<div
										className={`w-14 h-14 rounded-lg ${info.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
										<Icon className={`${info.iconColor}`} size={28} />
									</div>

									{/* Title */}
									<h3 className="font-bold text-gray-900 mb-3 text-lg">
										{t(info.titleKey)}
									</h3>

									{/* Details */}
									<div className="space-y-2">
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

					{/* Main Contact Section - 2 Columns */}
					<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
						{/* Left Side - Contact Info & Map */}
						<div className="lg:col-span-2 space-y-6">
							{/* Why Contact Us */}
							<div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									{t("contact.whyContactUs.title")}
								</h3>
								<p className="text-gray-600 mb-4">
									{t("contact.whyContactUs.description")}
								</p>
								<ul className="space-y-3">
									{[
										"contact.whyContactUs.reason1",
										"contact.whyContactUs.reason2",
										"contact.whyContactUs.reason3",
										"contact.whyContactUs.reason4",
									].map((key, idx) => (
										<li key={idx} className="flex items-start gap-2">
											<div className="w-5 h-5 rounded-full bg-[#EE048B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
												<div className="w-2 h-2 rounded-full bg-[#EE048B]" />
											</div>
											<span className="text-gray-700 text-sm">{t(key)}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Social Media */}
							<div className="bg-gradient-to-br from-[#68226A] to-[#EE048B] rounded-xl p-6 text-white shadow-md">
								<h3 className="text-xl font-bold mb-4">
									{t("contact.followUs")}
								</h3>
								<div className="space-y-3">
									{socialLinks.map((social, idx) => {
										const Icon = social.icon;
										return (
											<a
												key={idx}
												href={social.url}
												className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 hover:bg-white/20 transition-all duration-300 group">
												<div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
													<Icon size={20} className="text-white" />
												</div>
												<div>
													<p className="font-semibold">{social.name}</p>
													<p className="text-sm text-white/80">
														{social.handle}
													</p>
												</div>
											</a>
										);
									})}
								</div>
							</div>

							{/* Google Map Placeholder */}
							<div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{t("contact.findUs")}
								</h3>
								<div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
									<div className="text-center">
										<MapPin className="mx-auto text-gray-400 mb-2" size={48} />
										<p className="text-gray-500 text-sm">
											{t("contact.mapPlaceholder")}
										</p>
									</div>
								</div>
								<a
									href="https://maps.google.com"
									target="_blank"
									rel="noopener noreferrer"
									className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#EE048B] text-white font-bold py-2.5 rounded-lg hover:bg-[#68226A] transition-colors">
									<MapPin size={18} />
									{t("contact.openMaps")}
								</a>
							</div>
						</div>

						{/* Right Side - Contact Form */}
						<div className="lg:col-span-3">
							<div className="bg-white rounded-xl p-8 border-2 border-gray-100">
								<div className="mb-6">
									<h3 className="text-3xl font-bold text-gray-900 mb-2">
										{t("contact.sendMessage")}
									</h3>
									<p className="text-gray-600">
										{t("contact.formDescription")}
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-5">
									{/* Name Input */}
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{t("contact.form.name")}
										</label>
										<div className="relative">
											<div className="absolute left-4 top-1/2 -translate-y-1/2">
												<User className="text-gray-400" size={18} />
											</div>
											<input
												type="text"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder={t("contact.form.namePlaceholder")}
												className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 transition-all"
												required
											/>
										</div>
									</div>

									{/* Email & Phone Row */}
									<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
										{/* Email Input */}
										<div>
											<label className="block text-sm font-semibold text-gray-700 mb-2">
												{t("contact.form.email")}
											</label>
											<div className="relative">
												<div className="absolute left-4 top-1/2 -translate-y-1/2">
													<AtSign className="text-gray-400" size={18} />
												</div>
												<input
													type="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													placeholder={t("contact.form.emailPlaceholder")}
													className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 transition-all"
													required
												/>
											</div>
										</div>

										{/* Phone Input */}
										<div>
											<label className="block text-sm font-semibold text-gray-700 mb-2">
												{t("contact.form.phone")}
											</label>
											<div className="relative">
												<div className="absolute left-4 top-1/2 -translate-y-1/2">
													<Phone className="text-gray-400" size={18} />
												</div>
												<input
													type="tel"
													name="phone"
													value={formData.phone}
													onChange={handleChange}
													placeholder={t("contact.form.phonePlaceholder")}
													className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 transition-all"
												/>
											</div>
										</div>
									</div>

									{/* Subject Input */}
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{t("contact.form.subject")}
										</label>
										<div className="relative">
											<div className="absolute left-4 top-1/2 -translate-y-1/2">
												<FileText className="text-gray-400" size={18} />
											</div>
											<input
												type="text"
												name="subject"
												value={formData.subject}
												onChange={handleChange}
												placeholder={t("contact.form.subjectPlaceholder")}
												className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 transition-all"
												required
											/>
										</div>
									</div>

									{/* Message Textarea */}
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{t("contact.form.message")}
										</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder={t("contact.form.messagePlaceholder")}
											rows="5"
											className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#EE048B] focus:ring-2 focus:ring-[#EE048B]/20 resize-none transition-all"
											required
										/>
									</div>

									{/* Submit Button */}
									<button
										type="submit"
										className="w-full bg-gradient-to-r from-[#EE048B] to-[#68226A] hover:from-[#68226A] hover:to-[#EE048B] text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
										<Send size={20} />
										{t("contact.form.submit")}
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-4 md:px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("contact.faq.title")}
						</h2>
						<p className="text-gray-600">{t("contact.faq.description")}</p>
					</div>

					<div className="space-y-4">
						{[1, 2, 3, 4].map((num) => (
							<div
								key={num}
								className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#EE048B] transition-all duration-300">
								<h3 className="text-lg font-bold text-gray-900 mb-2">
									{t(`contact.faq.question${num}`)}
								</h3>
								<p className="text-gray-600">{t(`contact.faq.answer${num}`)}</p>
							</div>
						))}
					</div>

					<div className="mt-8 text-center">
						<p className="text-gray-600 mb-4">
							{t("contact.faq.moreQuestions")}
						</p>
						<a
							href="tel:+255763493716"
							className="inline-flex items-center gap-2 bg-[#EE048B] text-white px-6 py-3 rounded-full font-bold hover:bg-[#68226A] transition-colors">
							<Phone size={18} />
							{t("contact.faq.callUs")}
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
