import { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingBag, User, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/useLanguage";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { t } = useTranslation();
	const { changeLanguage, currentLanguage } = useLanguage();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ key: "home", label: t("nav.home"), href: "#" },
		{ key: "programs", label: t("nav.programs"), href: "#" },
		{ key: "about", label: t("nav.about"), href: "#" },
		{ key: "gallery", label: t("nav.gallery"), href: "#" },
		{ key: "events", label: t("nav.events"), href: "#" },
		{ key: "news", label: t("nav.news"), href: "#" },
		{ key: "contact", label: t("nav.contact"), href: "#" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
			}`}>
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
						<span
							className={`text-2xl font-bold ${
								isScrolled ? "text-gray-900" : "text-white"
							}`}>
							LISA COLLEGE
						</span>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-1">
						{navLinks.map((link) => (
							<a
								key={link.key}
								href={link.href}
								className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
									isScrolled
										? "text-gray-700 hover:bg-gray-100"
										: "text-white hover:bg-white hover:bg-opacity-10"
								}`}>
								{link.label}
							</a>
						))}
					</div>

					{/* Right Side Icons */}
					<div className="hidden md:flex items-center space-x-4">
						<button
							className={`p-2 rounded-lg transition-colors ${
								isScrolled
									? "text-gray-700 hover:bg-gray-100"
									: "text-white hover:bg-white hover:bg-opacity-10"
							}`}>
							<Search size={20} />
						</button>
						<button
							className={`p-2 rounded-lg transition-colors ${
								isScrolled
									? "text-gray-700 hover:bg-gray-100"
									: "text-white hover:bg-white hover:bg-opacity-10"
							}`}>
							<ShoppingBag size={20} />
						</button>
						<button
							className={`p-2 rounded-lg transition-colors ${
								isScrolled
									? "text-gray-700 hover:bg-gray-100"
									: "text-white hover:bg-white hover:bg-opacity-10"
							}`}>
							<User size={20} />
						</button>

						{/* Language Switcher */}
						<div className="flex items-center space-x-2 ml-2 pl-2 border-l border-gray-400 border-opacity-50">
							<button
								onClick={() => changeLanguage("en")}
								className={`px-3 py-2 rounded-lg font-medium transition-colors flex items-center space-x-1 ${
									currentLanguage === "en"
										? isScrolled
											? "bg-purple-100 text-purple-700"
											: "bg-white bg-opacity-20 text-white"
										: isScrolled
											? "text-gray-700 hover:bg-gray-100"
											: "text-white hover:bg-white hover:bg-opacity-10"
								}`}>
								<Globe size={16} />
								<span>EN</span>
							</button>
							<button
								onClick={() => changeLanguage("sw")}
								className={`px-3 py-2 rounded-lg font-medium transition-colors flex items-center space-x-1 ${
									currentLanguage === "sw"
										? isScrolled
											? "bg-purple-100 text-purple-700"
											: "bg-white bg-opacity-20 text-white"
										: isScrolled
											? "text-gray-700 hover:bg-gray-100"
											: "text-white hover:bg-white hover:bg-opacity-10"
								}`}>
								<span className="text-lg">🇹🇿</span>
								<span>SW</span>
							</button>
						</div>
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className={`p-2 rounded-lg transition-colors ${
								isScrolled
									? "text-gray-700 hover:bg-gray-100"
									: "text-white hover:bg-white hover:bg-opacity-10"
							}`}>
							{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div
						className={`md:hidden py-4 ${
							isScrolled ? "bg-white" : "bg-gray-900 bg-opacity-95"
						}`}>
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
									isScrolled
										? "text-gray-700 hover:bg-gray-100"
										: "text-white hover:bg-white hover:bg-opacity-10"
								}`}>
								{link.label}
							</a>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
