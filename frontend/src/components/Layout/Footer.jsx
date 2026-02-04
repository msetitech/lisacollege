import {
	Facebook,
	Instagram,
	Twitter,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-100">
			{/* Main Footer */}
			<div className="max-w-6xl mx-auto px-4 py-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* About Section */}
					<div>
						<h3 className="text-2xl font-bold text-white mb-4">LISA COLLEGE</h3>
						<p className="text-gray-400 mb-4">
							Excellence in beauty and fashion education since 2010. Empowering
							students with skills and confidence.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="hover:text-[#EE048B] transition-colors">
								<Facebook size={20} />
							</a>
							<a href="#" className="hover:text-[#EE048B] transition-colors">
								<Instagram size={20} />
							</a>
							<a href="#" className="hover:text-[#EE048B] transition-colors">
								<Twitter size={20} />
							</a>
							<a href="#" className="hover:text-[#EE048B] transition-colors">
								<Linkedin size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Programs
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Gallery
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Events
								</a>
							</li>
						</ul>
					</div>

					{/* Programs */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Makeup Artistry
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Fashion Design
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Hair Styling
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Beauty Therapy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-400 hover:text-white transition-colors">
									Styling & Wardrobe
								</a>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-semibold text-white mb-4">
							Contact Us
						</h4>
						<ul className="space-y-4">
							<li className="flex items-start space-x-3">
								<MapPin
									size={20}
									className="text-[#EE048B] flex-shrink-0 mt-1"
								/>
								<div>
									<p className="text-gray-400">Tabata Kinyerezi</p>
									<p className="text-gray-400">Mwisho Songas, Dar es Salaam</p>
								</div>
							</li>
							<li className="flex items-center space-x-3">
								<Phone size={20} className="text-[#EE048B]" />
								<a
									href="tel:+255763493716"
									className="text-gray-400 hover:text-white transition-colors">
									+255 763 493 716
								</a>
							</li>
							<li className="flex items-center space-x-3">
								<Phone size={20} className="text-[#EE048B]" />
								<a
									href="tel:+255654806567"
									className="text-gray-400 hover:text-white transition-colors">
									+255 654 806 567
								</a>
							</li>
							<li className="flex items-center space-x-3">
								<Mail size={20} className="text-[#EE048B]" />
								<a
									href="mailto:info@lisacollege.com"
									className="text-gray-400 hover:text-white transition-colors">
									info@lisacollege.com
								</a>
							</li>
							<li className="flex items-center space-x-3">
								<Instagram size={20} className="text-[#EE048B]" />
								<a
									href="https://instagram.com/lisa-college"
									className="text-gray-400 hover:text-white transition-colors">
									@lisa-college
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-700 mt-12 pt-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<p className="text-gray-400">
							&copy; 2024 LISA College. All rights reserved.
						</p>
						<div className="md:text-right space-x-4">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors">
								Privacy Policy
							</a>
							<span className="text-gray-700">|</span>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors">
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
