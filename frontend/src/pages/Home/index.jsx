import Hero from "../../components/Sections/Hero";
import OwnerMessage from "../../components/Sections/OwnerMessage";
import Programs from "../../components/Sections/Programs";
import About from "../../components/Sections/About";
import Stats from "../../components/Sections/Stats";
import Gallery from "../../components/Sections/Gallery";
import Environment from "../../components/Sections/Environment";
import Testimonials from "../../components/Sections/Testimonials";
import Contact from "../../components/Sections/Contact";
import CTA from "../../components/Sections/CTA";
import HelpChat from "../../components/Common/HelpChat";
import RecentBlogs from "../../components/Sections/RecentBlogs";

export default function Home() {
	return (
		<div>
			<Hero />
			<OwnerMessage />
			<About />
			<Programs />
			<Stats />
			<RecentBlogs />
			<Gallery />
			<Environment />
			<Testimonials />
			<Contact />
			<CTA />
			<HelpChat />
		</div>
	);
}
