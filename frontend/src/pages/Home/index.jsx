import Hero from "../../components/Sections/Hero";
import OwnerMessage from "../../components/Sections/OwnerMessage";
import Programs from "../../components/Sections/Programs";
import About from "../../components/Sections/About";
import Testimonials from "../../components/Sections/Testimonials";
import CTA from "../../components/Sections/CTA";

export default function Home() {
	return (
		<div>
			<Hero />
			<OwnerMessage />
			<Programs />
			<About />
			<Testimonials />
			<CTA />
		</div>
	);
}
