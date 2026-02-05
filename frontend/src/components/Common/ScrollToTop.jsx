import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!isVisible) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-24 right-6 z-50 p-3 rounded-full bg-[#68226A] text-white shadow-lg hover:bg-[#EE048B] transition-colors"
			title="Scroll to top">
			<ArrowUp size={20} />
		</button>
	);
}
