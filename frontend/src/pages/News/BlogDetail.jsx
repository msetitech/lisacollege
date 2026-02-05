import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	ArrowLeft,
	Calendar,
	User,
	Clock,
	Facebook,
	Twitter,
	Linkedin,
	ArrowRight,
} from "lucide-react";
import courseImage from "../../assets/images/course.png";
import BlogSidebar from "./BlogSidebar";

const CategoryBadge = ({ category }) => {
	const colors = {
		Hair: "bg-pink-100 text-pink-700",
		Makeup: "bg-purple-100 text-purple-700",
		Fashion: "bg-blue-100 text-blue-700",
		Nails: "bg-amber-100 text-amber-700",
		Decoration: "bg-green-100 text-green-700",
		Business: "bg-indigo-100 text-indigo-700",
	};
	return (
		<span
			className={`text-xs font-bold px-3 py-1 rounded-full ${colors[category] || "bg-gray-100 text-gray-700"}`}>
			{category}
		</span>
	);
};

export default function BlogDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { i18n } = useTranslation();

	// Scroll to top when component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	// Blog data - in real app, this would come from API/database
	const allBlogs = [
		{
			id: 1,
			title_en: "Hair Styling Tips for Beginners",
			title_sw: "Vidokezo vya Ususi kwa Waanzilishi",
			excerpt_en:
				"Learn the essential hair styling techniques that will transform your look and boost your confidence.",
			excerpt_sw:
				"Jifunze mbinu za ususi muhimu ambazo zitabadilisha muonekano wako.",
			content_en: `
				<h2>Introduction to Hair Styling</h2>
				<p>Hair styling is an art that combines technique, creativity, and practice. Whether you're looking to enhance your personal style or start a career in the beauty industry, mastering the fundamentals is crucial.</p>
				
				<h2>Essential Tools Every Beginner Needs</h2>
				<p>Before diving into techniques, you'll need the right tools:</p>
				<ul>
					<li><strong>Quality Hair Dryer:</strong> Invest in a dryer with multiple heat and speed settings</li>
					<li><strong>Round Brushes:</strong> Different sizes for various styling effects</li>
					<li><strong>Flat Iron:</strong> For sleek, straight styles</li>
					<li><strong>Curling Iron:</strong> Multiple barrel sizes for versatility</li>
					<li><strong>Hair Products:</strong> Heat protectant, styling spray, and finishing products</li>
				</ul>
				
				<h2>Basic Techniques to Master</h2>
				<h3>1. Blow Drying</h3>
				<p>The foundation of most hairstyles. Always use a heat protectant and work in sections. Direct the airflow down the hair shaft to seal the cuticle and add shine.</p>
				
				<h3>2. Creating Volume</h3>
				<p>Lift hair at the roots while blow-drying. Use a round brush to create lift and movement. Finish with cool air to set the style.</p>
				
				<h3>3. Straightening</h3>
				<p>Work with small sections for best results. Always use heat protectant and don't apply too much heat in one area.</p>
				
				<h2>Common Mistakes to Avoid</h2>
				<p>Even experienced stylists make mistakes. Here's what to watch out for:</p>
				<ul>
					<li>Using too much product - less is often more</li>
					<li>Styling wet hair without proper protection</li>
					<li>Rushing through the process</li>
					<li>Using the wrong tools for your hair type</li>
				</ul>
				
				<h2>Building Your Skills</h2>
				<p>Practice is key to becoming proficient in hair styling. Start with simple techniques and gradually work your way up to more complex styles. Consider taking professional courses to accelerate your learning.</p>
				
				<h2>Conclusion</h2>
				<p>Hair styling is a rewarding skill that combines artistry with technique. With the right tools, proper training, and consistent practice, you can master the fundamentals and create stunning hairstyles.</p>
			`,
			content_sw: `
				<h2>Utangulizi wa Ususi</h2>
				<p>Ususi ni sanaa inayochanganya mbinu, ubunifu, na mazoezi. Iwe unataka kuboresha mtindo wako binafsi au kuanza kazi katika sekta ya urembo, kujifunza misingi ni muhimu.</p>
				
				<h2>Vyombo Muhimu kwa Waanzilishi</h2>
				<p>Kabla ya kuanza mbinu, utahitaji vyombo sahihi:</p>
				<ul>
					<li><strong>Kikausha Nywele cha Ubora:</strong> Wekeza katika kikausha chenye mipangilio mingi ya joto</li>
					<li><strong>Brashi za Duara:</strong> Ukubwa tofauti kwa matokeo mbalimbali</li>
					<li><strong>Chuma cha Kunyoosha:</strong> Kwa mitindo laini na nyooka</li>
					<li><strong>Chuma cha Kuzungusha:</strong> Ukubwa wa pipa mbalimbali</li>
					<li><strong>Bidhaa za Nywele:</strong> Ulinzi wa joto, spray ya mtindo, na bidhaa za kumalizia</li>
				</ul>
				
				<h2>Mbinu za Msingi za Kujifunza</h2>
				<h3>1. Kukausha kwa Upepo</h3>
				<p>Msingi wa mitindo mingi ya nywele. Tumia ulinzi wa joto na fanya kazi kwa sehemu. Elekeza upepo chini ya nywele ili kuongeza mng'ao.</p>
				
				<h3>2. Kuunda Ukubwa</h3>
				<p>Inua nywele kwenye mizizi wakati wa kukausha. Tumia brashi ya duara kuunda kuinua na mwendo. Malizia kwa hewa baridi kuweka mtindo.</p>
				
				<h3>3. Kunyoosha</h3>
				<p>Fanya kazi na sehemu ndogo kwa matokeo bora. Daima tumia ulinzi wa joto na usitumie joto nyingi sana mahali pamoja.</p>
				
				<h2>Makosa ya Kawaida ya Kuepuka</h2>
				<p>Hata wasusi wenye uzoefu hufanya makosa. Hapa kuna jambo la kutazama:</p>
				<ul>
					<li>Kutumia bidhaa nyingi sana - kidogo mara nyingi ni zaidi</li>
					<li>Kupanga nywele zilizolowa bila ulinzi sahihi</li>
					<li>Kuharakisha mchakato</li>
					<li>Kutumia vyombo visivyofaa kwa aina yako ya nywele</li>
				</ul>
				
				<h2>Kujenga Ujuzi Wako</h2>
				<p>Mazoezi ni muhimu kuwa stadi katika ususi. Anza na mbinu rahisi na kwa kadiri uendavyo juu kwa mitindo ngumu zaidi. Zingatia kuchukua kozi za kitaalamu kuharakisha kujifunza kwako.</p>
				
				<h2>Hitimisho</h2>
				<p>Ususi ni ujuzi wenye thawabu unaochanganya sanaa na mbinu. Kwa vyombo sahihi, mafunzo sahihi, na mazoezi ya kudumu, unaweza kujifunza misingi na kuunda mitindo ya nywele nzuri.</p>
			`,
			date: "Feb 4, 2026",
			author_en: "Expert Trainer",
			author_sw: "Mfunzi Mahiri",
			category: "Hair",
			image: courseImage,
			readTime: "5 min",
		},
		{
			id: 2,
			title_en: "Makeup Trends 2026",
			title_sw: "Maamuzi ya Makeup 2026",
			excerpt_en:
				"Discover the hottest makeup trends that are taking over social media and the beauty industry.",
			excerpt_sw:
				"Tambua maamuzi ya makeup yanayojifanya katika sekta ya urembo.",
			content_en: `
				<h2>The Evolution of Beauty</h2>
				<p>The beauty industry is constantly evolving, and 2026 brings exciting new trends that blend innovation with timeless elegance.</p>
				
				<h2>Top Makeup Trends for 2026</h2>
				<h3>1. Natural Glam</h3>
				<p>The "no-makeup" makeup look continues to dominate, with a focus on enhancing natural features rather than masking them.</p>
				
				<h3>2. Bold Lips</h3>
				<p>Statement lip colors are making a comeback, from classic reds to unconventional purples and oranges.</p>
				
				<h3>3. Graphic Eyeliner</h3>
				<p>Creative eyeliner designs that go beyond the traditional wing are trending across social media platforms.</p>
				
				<h2>Essential Products for 2026</h2>
				<p>To stay on-trend, consider investing in:</p>
				<ul>
					<li>Multi-use cream products for a dewy finish</li>
					<li>Long-lasting lip stains in bold colors</li>
					<li>Precision eyeliner pens for graphic looks</li>
					<li>Illuminating primers and highlighters</li>
				</ul>
				
				<h2>Application Techniques</h2>
				<p>Modern makeup application focuses on skin preparation and strategic placement. The goal is to enhance rather than transform.</p>
				
				<h2>Sustainability in Beauty</h2>
				<p>2026 sees a continued emphasis on eco-friendly and sustainable beauty products. Consumers are increasingly conscious of packaging and ingredient sourcing.</p>
			`,
			content_sw: `
				<h2>Mageuzi ya Urembo</h2>
				<p>Sekta ya urembo inabadilika kila wakati, na 2026 inaleta maamuzi mapya ya kusisimua yanayochanganya ubunifu na uzuri wa kudumu.</p>
				
				<h2>Maamuzi Bora ya Makeup ya 2026</h2>
				<h3>1. Uzuri wa Asili</h3>
				<p>Muonekano wa "makeup isiyo ya makeup" unaendelea kutawala, kwa kuzingatia kuimarisha sifa za asili badala ya kuzificha.</p>
				
				<h3>2. Midomo ya Ujasiri</h3>
				<p>Rangi za midomo zinazodhihirisha zinarudi, kutoka nyekundu za kawaida hadi zambarau na machungwa zisizo za kawaida.</p>
				
				<h3>3. Eyeliner ya Kigraphics</h3>
				<p>Miundo ya ubunifu ya eyeliner inayozidi mabawa ya jadi inaendelea kupanda juu kwenye mitandao ya kijamii.</p>
				
				<h2>Bidhaa Muhimu kwa 2026</h2>
				<p>Ili kubaki kwenye mwenendo, zingatia kuwekeza katika:</p>
				<ul>
					<li>Bidhaa za cream zenye matumizi mengi kwa kumaliza kwa umande</li>
					<li>Rangi za midomo zinazodumu kwa rangi za ujasiri</li>
					<li>Kalamu za eyeliner za usahihi kwa mitazamo ya kigraphics</li>
					<li>Primers na highlighters zinazong'aa</li>
				</ul>
				
				<h2>Mbinu za Utumiaji</h2>
				<p>Utumiaji wa makeup wa kisasa unazingatia maandalizi ya ngozi na uwekaji wa kimkakati. Lengo ni kuimarisha badala ya kubadilisha.</p>
				
				<h2>Uendelevu katika Urembo</h2>
				<p>2026 inaona msisitizo unaoendelea kwenye bidhaa za urembo rafiki za mazingira. Watumiaji wanazidi kuwa na ufahamu juu ya ufungaji na chanzo cha viungo.</p>
			`,
			date: "Feb 1, 2026",
			author_en: "Beauty Expert",
			author_sw: "Mtaalamu wa Urembo",
			category: "Makeup",
			image: courseImage,
			readTime: "4 min",
		},
		{
			id: 3,
			title_en: "Fashion Design Career Paths",
			title_sw: "Njia za Ajira katika Muundo wa Mavazi",
			excerpt_en:
				"Explore different career opportunities in the fashion industry and how to start your journey.",
			excerpt_sw:
				"Tukilicha furaha juu ya ajira mbalimbali katika sekta ya mavazi.",
			content_en: `
				<h2>The Fashion Industry Landscape</h2>
				<p>The fashion industry offers diverse career paths for creative professionals, from design to marketing and beyond.</p>
				
				<h2>Career Opportunities</h2>
				<h3>Fashion Designer</h3>
				<p>Create original clothing, accessories, and footwear. Requires strong design skills and understanding of textiles.</p>
				
				<h3>Fashion Stylist</h3>
				<p>Curate looks for photoshoots, events, and personal clients. Combines creativity with trend awareness.</p>
				
				<h3>Pattern Maker</h3>
				<p>Technical role creating templates for garment construction. Essential for production process.</p>
				
				<h2>Getting Started</h2>
				<p>Build a strong portfolio, network within the industry, and consider formal education in fashion design or related fields.</p>
			`,
			content_sw: `
				<h2>Mazingira ya Sekta ya Mavazi</h2>
				<p>Sekta ya mavazi inatoa njia za ajira mbalimbali kwa wataalamu wa ubunifu, kutoka muundo hadi masoko na zaidi.</p>
				
				<h2>Fursa za Ajira</h2>
				<h3>Mbunifu wa Mavazi</h3>
				<p>Unda nguo za asili, vifaa vya ziada, na viatu. Inahitaji ujuzi mkubwa wa muundo na ufahamu wa vitambaa.</p>
				
				<h3>Mpangaji wa Mavazi</h3>
				<p>Panga mitazamo kwa picha, matukio, na wateja wa kibinafsi. Inachanganya ubunifu na ufahamu wa mwenendo.</p>
				
				<h3>Mtengenezaji wa Mifumo</h3>
				<p>Jukumu la kiufundi la kuunda violezo kwa ujenzi wa nguo. Muhimu kwa mchakato wa uzalishaji.</p>
				
				<h2>Kuanza</h2>
				<p>Jenga mkusanyo imara, unda mitandao ndani ya sekta, na zingatia elimu rasmi katika muundo wa mavazi au nyanja zinazohusiana.</p>
			`,
			date: "Jan 28, 2026",
			author_en: "Fashion Consultant",
			author_sw: "Mshauri wa Mavazi",
			category: "Fashion",
			image: courseImage,
			readTime: "6 min",
		},
		{
			id: 4,
			title_en: "Nail Art: From Basics to Advanced",
			title_sw: "Sanaa ya Kucha: Kutoka Msingi hadi Kwa Kiwango Cha Juu",
			excerpt_en:
				"Master the art of nail design with our comprehensive guide covering all skill levels.",
			excerpt_sw: "Dikika sanaa ya kucha na mbinu za kitaalamu.",
			content_en: `
				<h2>The Art of Nail Design</h2>
				<p>Nail art has evolved from simple polish to intricate designs that showcase creativity and technical skill.</p>
				
				<h2>Basic Techniques</h2>
				<p>Start with proper nail preparation, base coat application, and clean polish application techniques.</p>
				
				<h2>Advanced Designs</h2>
				<p>Progress to 3D nail art, gel extensions, and complex patterns using various tools and materials.</p>
			`,
			content_sw: `
				<h2>Sanaa ya Muundo wa Kucha</h2>
				<p>Sanaa ya kucha imebadilika kutoka rangi rahisi hadi miundo tata inayoonyesha ubunifu na ujuzi wa kiufundi.</p>
				
				<h2>Mbinu za Msingi</h2>
				<p>Anza na maandalizi sahihi ya kucha, utumiaji wa safu ya msingi, na mbinu za utumiaji wa rangi safi.</p>
				
				<h2>Miundo ya Hali ya Juu</h2>
				<p>Endelea kwa sanaa ya kucha ya 3D, upanuzi wa gel, na ruwaza ngumu kwa kutumia vyombo na vifaa mbalimbali.</p>
			`,
			date: "Jan 25, 2026",
			author_en: "Nail Specialist",
			author_sw: "Mtaalamu wa Kucha",
			category: "Nails",
			image: courseImage,
			readTime: "5 min",
		},
		{
			id: 5,
			title_en: "Building Your Beauty Business",
			title_sw: "Kujenga Biashara Yako ya Urembo",
			excerpt_en:
				"Essential strategies for starting and growing a successful beauty business in today's market.",
			excerpt_sw:
				"Mikakati muhimu ya kuanza na kukuza biashara ya urembo yenye mafanikio.",
			content_en: `
				<h2>Starting Your Beauty Business</h2>
				<p>Starting a beauty business requires more than just skills – it demands business acumen, marketing knowledge, and dedication.</p>
				
				<h2>Key Steps to Success</h2>
				<ul>
					<li>Develop a solid business plan</li>
					<li>Understand your target market</li>
					<li>Create a strong brand identity</li>
					<li>Build an online presence</li>
					<li>Provide exceptional customer service</li>
				</ul>
			`,
			content_sw: `
				<h2>Kuanza Biashara Yako ya Urembo</h2>
				<p>Kuanza biashara ya urembo kunahitaji zaidi ya ujuzi tu – inahitaji ujuzi wa biashara, maarifa ya masoko, na kujitolea.</p>
				
				<h2>Hatua Muhimu za Mafanikio</h2>
				<ul>
					<li>Tengeneza mpango imara wa biashara</li>
					<li>Elewa soko lako lengwa</li>
					<li>Unda utambulisho imara wa chapa</li>
					<li>Jenga uwepo mkubwa kwenye mtandao</li>
					<li>Toa huduma bora kwa wateja</li>
				</ul>
			`,
			date: "Jan 22, 2026",
			author_en: "Business Coach",
			author_sw: "Mkufunzi wa Biashara",
			category: "Business",
			image: courseImage,
			readTime: "7 min",
		},
		{
			id: 6,
			title_en: "Event Decoration Masterclass",
			title_sw: "Darasa Kuu la Upambaji wa Matukio",
			excerpt_en:
				"Learn professional event decoration techniques that wow clients and create memorable experiences.",
			excerpt_sw:
				"Jifunze mbinu za kitaalamu za upambaji wa matukio zinazoshangaza.",
			content_en: `
				<h2>The Power of Event Decoration</h2>
				<p>Event decoration is about creating atmosphere and memories that last long after the event ends.</p>
				
				<h2>Essential Elements</h2>
				<p>Color schemes, lighting, centerpieces, and backdrops work together to create a cohesive theme.</p>
				
				<h2>Professional Tips</h2>
				<p>Plan ahead, understand client vision, and always have backup supplies for unexpected situations.</p>
			`,
			content_sw: `
				<h2>Nguvu ya Upambaji wa Matukio</h2>
				<p>Upambaji wa matukio ni kuhusu kuunda mazingira na kumbukumbu zinazodumu muda mrefu baada ya tukio kumalizika.</p>
				
				<h2>Vipengele Muhimu</h2>
				<p>Mipango ya rangi, mwanga, vitu vya katikati, na mandharinyuma hufanya kazi pamoja kuunda mada moja.</p>
				
				<h2>Vidokezo vya Kitaalamu</h2>
				<p>Panga mapema, elewa maono ya mteja, na daima kuwa na vifaa vya hifadhi kwa hali zisizotarajiwa.</p>
			`,
			date: "Jan 20, 2026",
			author_en: "Decoration Expert",
			author_sw: "Mtaalamu wa Upambaji",
			category: "Decoration",
			image: courseImage,
			readTime: "6 min",
		},
	];

	const blog = allBlogs.find((b) => b.id === parseInt(id));

	if (!blog) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						{i18n.language === "sw" ? "Makala Haijapatikana" : "Blog Not Found"}
					</h2>
					<button
						onClick={() => navigate("/news")}
						className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all">
						<ArrowLeft size={20} />
						{i18n.language === "sw" ? "Rudi kwa Blogu" : "Back to Blogs"}
					</button>
				</div>
			</div>
		);
	}

	const getTitle = (blog) =>
		i18n.language === "sw" ? blog.title_sw : blog.title_en;
	const getContent = (blog) =>
		i18n.language === "sw" ? blog.content_sw : blog.content_en;
	const getAuthor = (blog) =>
		i18n.language === "sw" ? blog.author_sw : blog.author_en;

	// Get related blogs (same category, excluding current)
	const relatedBlogs = allBlogs
		.filter((b) => b.category === blog.category && b.id !== blog.id)
		.slice(0, 3);

	const handleShare = (platform) => {
		const url = window.location.href;
		const title = getTitle(blog);
		let shareUrl = "";

		switch (platform) {
			case "facebook":
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
				break;
			case "twitter":
				shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
				break;
			case "linkedin":
				shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
				break;
			default:
				break;
		}

		if (shareUrl) {
			window.open(shareUrl, "_blank", "width=600,height=400");
		}
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section with Background */}
			<section
				className="relative overflow-hidden pt-32 pb-20"
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

				<div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
					{/* Back Button */}
					<button
						onClick={() => navigate("/news")}
						className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors mb-8 group">
						<ArrowLeft
							size={20}
							className="group-hover:-translate-x-1 transition-transform"
						/>
						{i18n.language === "sw" ? "Rudi kwa Blogu" : "Back to Blogs"}
					</button>

					{/* Category Badge */}
					<div className="mb-6">
						<CategoryBadge category={blog.category} />
					</div>

					{/* Title */}
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
						{getTitle(blog)}
					</h1>

					{/* Meta Info */}
					<div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80">
						<div className="flex items-center gap-2">
							<User size={18} className="text-[#EE048B]" />
							<span className="font-medium">{getAuthor(blog)}</span>
						</div>
						<span className="hidden md:inline">•</span>
						<div className="flex items-center gap-2">
							<Calendar size={18} className="text-[#EE048B]" />
							<span>{blog.date}</span>
						</div>
						<span className="hidden md:inline">•</span>
						<div className="flex items-center gap-2">
							<Clock size={18} className="text-[#EE048B]" />
							<span>{blog.readTime} read</span>
						</div>

						{/* Share Icons - Direct */}
						<div className="ml-auto flex items-center gap-3">
							<span className="text-sm font-medium hidden md:inline">
								{i18n.language === "sw" ? "Shiriki:" : "Share:"}
							</span>
							<button
								onClick={() => handleShare("facebook")}
								className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
								title="Share on Facebook">
								<Facebook size={18} className="text-white" />
							</button>
							<button
								onClick={() => handleShare("twitter")}
								className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
								title="Share on Twitter">
								<Twitter size={18} className="text-white" />
							</button>
							<button
								onClick={() => handleShare("linkedin")}
								className="p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all hover:scale-110"
								title="Share on LinkedIn">
								<Linkedin size={18} className="text-white" />
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Image */}
			<section className="relative -mt-16 mb-16">
				<div className="max-w-5xl mx-auto px-4 md:px-6">
					<div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
						<img
							src={blog.image}
							alt={getTitle(blog)}
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
					</div>
				</div>
			</section>

			{/* Article Content with Sidebar */}
			<div className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Content - Left Side (2/3) */}
					<div className="lg:col-span-2">
						<article>
							{/* Intro/Excerpt in larger text */}
							<div className="mb-12">
								<p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
									{i18n.language === "sw" ? blog.excerpt_sw : blog.excerpt_en}
								</p>
							</div>

							{/* Article Body */}
							<div
								className="prose prose-lg max-w-none
								prose-headings:font-bold prose-headings:text-gray-900
								prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
								prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
								prose-p:text-gray-700 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6
								prose-ul:my-6 prose-ul:list-none prose-ul:pl-0
								prose-li:text-gray-700 prose-li:text-lg prose-li:mb-3 prose-li:pl-6 prose-li:relative
								prose-li:before:content-['→'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-[#EE048B] prose-li:before:font-bold
								prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-[#68226A]
								prose-a:text-[#EE048B] prose-a:no-underline hover:prose-a:underline"
								dangerouslySetInnerHTML={{ __html: getContent(blog) }}
							/>

							{/* Article Footer - Tags/Share */}
							<div className="mt-16 pt-8 border-t border-gray-200">
								<div className="flex flex-wrap items-center justify-between gap-4">
									<div className="flex items-center gap-3">
										<span className="text-sm font-medium text-gray-500">
											{i18n.language === "sw" ? "Aina:" : "Category:"}
										</span>
										<CategoryBadge category={blog.category} />
									</div>

									<div className="flex items-center gap-3">
										<span className="text-sm font-medium text-gray-500">
											{i18n.language === "sw" ? "Shiriki:" : "Share:"}
										</span>
										<button
											onClick={() => handleShare("facebook")}
											className="p-2 hover:bg-gray-100 rounded-full transition-colors">
											<Facebook size={20} className="text-gray-600" />
										</button>
										<button
											onClick={() => handleShare("twitter")}
											className="p-2 hover:bg-gray-100 rounded-full transition-colors">
											<Twitter size={20} className="text-gray-600" />
										</button>
										<button
											onClick={() => handleShare("linkedin")}
											className="p-2 hover:bg-gray-100 rounded-full transition-colors">
											<Linkedin size={20} className="text-gray-600" />
										</button>
									</div>
								</div>
							</div>
						</article>
					</div>

					{/* Sidebar - Right Side (1/3) */}
					<div className="lg:col-span-1">
						<BlogSidebar currentBlogId={blog.id} allBlogs={allBlogs} />
					</div>
				</div>
			</div>

			{/* Author Section */}
			<section className="bg-gradient-to-br from-purple-50 to-pink-50 py-12">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					<div className="lg:pr-[calc(33.333%+2rem)]">
						<div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
							<div className="flex items-start gap-6">
								<div className="flex-shrink-0">
									<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#EE048B] to-[#68226A] flex items-center justify-center text-white text-2xl font-bold">
										{getAuthor(blog).charAt(0)}
									</div>
								</div>
								<div className="flex-1">
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										{getAuthor(blog)}
									</h3>
									<p className="text-gray-600 leading-relaxed mb-4">
										{i18n.language === "sw"
											? "Mtaalamu wa urembo na mavazi aliye na uzoefu wa miaka mingi katika sekta."
											: "Expert in beauty and fashion with years of experience in the industry."}
									</p>
									<div className="flex items-center gap-3 text-sm text-gray-500">
										<Calendar size={16} />
										<span>
											{i18n.language === "sw"
												? "Amechapisha makala"
												: "Published"}{" "}
											{blog.date}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Related Articles */}
			{relatedBlogs.length > 0 && (
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4 md:px-6">
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 mb-4">
								<span className="w-8 h-0.5 bg-[#EE048B]" />
								<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
									{i18n.language === "sw" ? "Soma Zaidi" : "Read More"}
								</span>
								<span className="w-8 h-0.5 bg-[#EE048B]" />
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								{i18n.language === "sw"
									? "Makala Zinazohusiana"
									: "Related Articles"}
							</h2>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{relatedBlogs.map((relatedBlog) => (
								<div
									key={relatedBlog.id}
									onClick={() => navigate(`/news/${relatedBlog.id}`)}
									className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#EE048B]/50">
									{/* Image */}
									<div className="relative h-56 overflow-hidden bg-gray-200">
										<img
											src={relatedBlog.image}
											alt={getTitle(relatedBlog)}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
										<div className="absolute top-4 left-4">
											<CategoryBadge category={relatedBlog.category} />
										</div>
									</div>

									{/* Content */}
									<div className="p-6">
										<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#EE048B] transition-colors duration-300 leading-tight">
											{getTitle(relatedBlog)}
										</h3>
										<div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
											<div className="flex items-center gap-1">
												<Calendar size={14} className="text-[#EE048B]" />
												<span>{relatedBlog.date}</span>
											</div>
											<span>•</span>
											<span>{relatedBlog.readTime}</span>
										</div>
										<div className="flex items-center gap-2 text-[#EE048B] font-semibold text-sm group-hover:gap-3 transition-all">
											{i18n.language === "sw" ? "Soma Zaidi" : "Read More"}
											<ArrowRight size={16} />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			)}

			{/* CTA Section */}
			<section
				className="relative overflow-hidden py-20"
				style={{
					background:
						"linear-gradient(135deg, #68226A 0%, #4a1650 60%, #3d1245 100%)",
				}}>
				{/* Decorative elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
					<div className="absolute -top-20 -left-20 w-96 h-96 rounded-full border border-white" />
					<div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full border border-white" />
				</div>

				<div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
						{i18n.language === "sw"
							? "Je! Tayari Kujifunza Zaidi?"
							: "Ready to Learn More?"}
					</h2>
					<p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
						{i18n.language === "sw"
							? "Jiunge na programu zetu za mafunzo na ubadilishe maisha yako leo."
							: "Join our training programs and transform your life today."}
					</p>
					<button
						onClick={() => navigate("/programs")}
						className="inline-flex items-center gap-3 bg-white text-[#68226A] font-bold py-4 px-10 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
						{i18n.language === "sw" ? "Angalia Programu" : "View Programs"}
						<ArrowRight size={22} />
					</button>
				</div>
			</section>
		</div>
	);
}
