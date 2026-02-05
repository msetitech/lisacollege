import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
	Camera,
	X,
	ChevronLeft,
	ChevronRight,
	ZoomIn,
	Filter,
	Grid3x3,
	LayoutGrid,
} from "lucide-react";
import courseImage from "../../assets/images/course.png";

// Sample gallery data - replace with your actual images
const galleryImages = [
	{
		id: 1,
		url: courseImage,
		title_en: "Hair Styling Workshop",
		title_sw: "Warsha ya Ususi",
		category: "Hair",
		date: "Feb 2026",
	},
	{
		id: 2,
		url: courseImage,
		title_en: "Makeup Masterclass",
		title_sw: "Darasa Kuu la Makeup",
		category: "Makeup",
		date: "Feb 2026",
	},
	{
		id: 3,
		url: courseImage,
		title_en: "Fashion Design Students",
		title_sw: "Wanafunzi wa Muundo wa Mavazi",
		category: "Fashion",
		date: "Jan 2026",
	},
	{
		id: 4,
		url: courseImage,
		title_en: "Nail Art Training",
		title_sw: "Mafunzo ya Sanaa ya Kucha",
		category: "Nails",
		date: "Jan 2026",
	},
	{
		id: 5,
		url: courseImage,
		title_en: "Event Decoration Setup",
		title_sw: "Upangaji wa Upambaji wa Tukio",
		category: "Decoration",
		date: "Jan 2026",
	},
	{
		id: 6,
		url: courseImage,
		title_en: "Graduation Ceremony 2025",
		title_sw: "Sherehe ya Uzamilifu 2025",
		category: "Events",
		date: "Dec 2025",
	},
	{
		id: 7,
		url: courseImage,
		title_en: "Professional Hair Styling",
		title_sw: "Ususi wa Kitaalamu",
		category: "Hair",
		date: "Dec 2025",
	},
	{
		id: 8,
		url: courseImage,
		title_en: "Makeup Competition Winners",
		title_sw: "Washindi wa Mashindano ya Makeup",
		category: "Makeup",
		date: "Nov 2025",
	},
	{
		id: 9,
		url: courseImage,
		title_en: "Fashion Show 2025",
		title_sw: "Onyesho la Mavazi 2025",
		category: "Fashion",
		date: "Nov 2025",
	},
	{
		id: 10,
		url: courseImage,
		title_en: "Student Achievement Awards",
		title_sw: "Tuzo za Mafanikio ya Wanafunzi",
		category: "Events",
		date: "Oct 2025",
	},
	{
		id: 11,
		url: courseImage,
		title_en: "Bridal Makeup Session",
		title_sw: "Kipindi cha Makeup ya Harusi",
		category: "Makeup",
		date: "Oct 2025",
	},
	{
		id: 12,
		url: courseImage,
		title_en: "Nail Art Showcase",
		title_sw: "Maonyesho ya Sanaa ya Kucha",
		category: "Nails",
		date: "Sep 2025",
	},
];

export default function GalleryPage() {
	const { i18n } = useTranslation();
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentImage, setCurrentImage] = useState(0);
	const [viewMode, setViewMode] = useState("masonry"); // masonry or grid

	const categories = [
		"All",
		"Hair",
		"Makeup",
		"Fashion",
		"Nails",
		"Decoration",
		"Events",
	];

	const getTitle = (image) =>
		i18n.language === "sw" ? image.title_sw : image.title_en;

	// Filter images
	const filteredImages =
		selectedCategory === "All"
			? galleryImages
			: galleryImages.filter((img) => img.category === selectedCategory);

	const openLightbox = (index) => {
		setCurrentImage(index);
		setLightboxOpen(true);
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
		document.body.style.overflow = "auto";
	};

	const nextImage = () => {
		setCurrentImage((prev) =>
			prev === filteredImages.length - 1 ? 0 : prev + 1,
		);
	};

	const prevImage = () => {
		setCurrentImage((prev) =>
			prev === 0 ? filteredImages.length - 1 : prev - 1,
		);
	};

	// Handle keyboard navigation
	const handleKeyDown = (e) => {
		if (!lightboxOpen) return;
		if (e.key === "ArrowRight") nextImage();
		if (e.key === "ArrowLeft") prevImage();
		if (e.key === "Escape") closeLightbox();
	};

	// Add event listener for keyboard
	useState(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [lightboxOpen, currentImage]);

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
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

				<div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
					<div className="inline-flex items-center gap-2 mb-6">
						<span className="w-8 h-0.5 bg-[#EE048B]" />
						<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
							{i18n.language === "sw" ? "Picha Zetu" : "Our Gallery"}
						</span>
						<span className="w-8 h-0.5 bg-[#EE048B]" />
					</div>

					<div className="flex items-center justify-center gap-4 mb-6">
						<Camera size={56} className="text-[#EE048B]" />
						<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
							{i18n.language === "sw" ? "Galari" : "Gallery"}
						</h1>
					</div>

					<p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
						{i18n.language === "sw"
							? "Tazama picha za matukio yetu, mafanikio ya wanafunzi, na kazi za kipekee kutoka kwa programu zetu za mafunzo."
							: "Explore photos from our events, student achievements, and exceptional work from our training programs."}
					</p>
				</div>
			</section>

			{/* Filter & View Controls */}
			<section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
					<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
						{/* Category Filter */}
						<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
							<Filter size={20} className="text-gray-500 flex-shrink-0" />
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 ${
										selectedCategory === category
											? "bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white shadow-md"
											: "bg-gray-100 text-gray-700 hover:bg-gray-200"
									}`}>
									{category}
								</button>
							))}
						</div>

						{/* View Mode Toggle */}
						<div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
							<button
								onClick={() => setViewMode("masonry")}
								className={`p-2 rounded-full transition-all ${
									viewMode === "masonry"
										? "bg-white shadow-md text-[#EE048B]"
										: "text-gray-500 hover:text-gray-700"
								}`}
								title="Masonry View">
								<LayoutGrid size={20} />
							</button>
							<button
								onClick={() => setViewMode("grid")}
								className={`p-2 rounded-full transition-all ${
									viewMode === "grid"
										? "bg-white shadow-md text-[#EE048B]"
										: "text-gray-500 hover:text-gray-700"
								}`}
								title="Grid View">
								<Grid3x3 size={20} />
							</button>
						</div>
					</div>

					{/* Results Count */}
					<div className="mt-4 text-sm text-gray-600">
						{i18n.language === "sw"
							? `Picha ${filteredImages.length} zimepatikana`
							: `${filteredImages.length} images found`}
					</div>
				</div>
			</section>

			{/* Gallery Grid */}
			<section className="py-16">
				<div className="max-w-7xl mx-auto px-4 md:px-6">
					{filteredImages.length === 0 ? (
						<div className="text-center py-20">
							<Camera size={64} className="mx-auto text-gray-300 mb-4" />
							<p className="text-xl text-gray-600">
								{i18n.language === "sw"
									? "Hakuna picha zilizopatikana."
									: "No images found."}
							</p>
						</div>
					) : (
						<div
							className={
								viewMode === "masonry"
									? "columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
									: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
							}>
							{filteredImages.map((image, index) => (
								<div
									key={image.id}
									onClick={() => openLightbox(index)}
									className="group relative overflow-hidden rounded-2xl cursor-pointer break-inside-avoid bg-gray-100"
									style={viewMode === "masonry" ? {} : { aspectRatio: "4/3" }}>
									{/* Image */}
									<img
										src={image.url}
										alt={getTitle(image)}
										className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>

									{/* Overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										{/* Zoom Icon */}
										<div className="absolute top-4 right-4">
											<div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
												<ZoomIn size={20} className="text-white" />
											</div>
										</div>

										{/* Info */}
										<div className="absolute bottom-0 left-0 right-0 p-6">
											<h3 className="text-white font-bold text-lg mb-2">
												{getTitle(image)}
											</h3>
											<div className="flex items-center gap-3 text-white/80 text-sm">
												<span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">
													{image.category}
												</span>
												<span>{image.date}</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</section>

			{/* Lightbox */}
			{lightboxOpen && (
				<div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
					{/* Close Button */}
					<button
						onClick={closeLightbox}
						className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all z-50 group">
						<X size={24} className="text-white" />
					</button>

					{/* Previous Button */}
					<button
						onClick={prevImage}
						className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all z-50 group">
						<ChevronLeft
							size={32}
							className="text-white group-hover:-translate-x-1 transition-transform"
						/>
					</button>

					{/* Next Button */}
					<button
						onClick={nextImage}
						className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all z-50 group">
						<ChevronRight
							size={32}
							className="text-white group-hover:translate-x-1 transition-transform"
						/>
					</button>

					{/* Image Container */}
					<div className="relative max-w-7xl max-h-[90vh] mx-auto px-20">
						<img
							src={filteredImages[currentImage].url}
							alt={getTitle(filteredImages[currentImage])}
							className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
						/>

						{/* Image Info */}
						<div className="absolute -bottom-20 left-0 right-0 text-center">
							<h3 className="text-white text-2xl font-bold mb-2">
								{getTitle(filteredImages[currentImage])}
							</h3>
							<div className="flex items-center justify-center gap-4 text-white/70">
								<span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
									{filteredImages[currentImage].category}
								</span>
								<span>{filteredImages[currentImage].date}</span>
								<span>
									{currentImage + 1} / {filteredImages.length}
								</span>
							</div>
						</div>
					</div>

					{/* Thumbnails Strip (Optional) */}
					<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-4xl px-4">
						{filteredImages.map((image, index) => (
							<button
								key={image.id}
								onClick={() => setCurrentImage(index)}
								className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
									index === currentImage
										? "ring-4 ring-[#EE048B] scale-110"
										: "opacity-50 hover:opacity-100"
								}`}>
								<img
									src={image.url}
									alt={getTitle(image)}
									className="w-full h-full object-cover"
								/>
							</button>
						))}
					</div>
				</div>
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
						{i18n.language === "sw" ? "Jiunge Nasi Leo" : "Join Us Today"}
					</h2>
					<p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
						{i18n.language === "sw"
							? "Kuwa sehemu ya hadithi za mafanikio. Jiandikishe katika programu zetu za mafunzi."
							: "Be part of our success stories. Enroll in our training programs."}
					</p>
					<button
						onClick={() => (window.location.href = "/programs")}
						className="inline-flex items-center gap-3 bg-white text-[#68226A] font-bold py-4 px-10 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
						{i18n.language === "sw" ? "Angalia Programu" : "View Programs"}
						<Camera size={22} />
					</button>
				</div>
			</section>
		</div>
	);
}
