import { Palette, Scissors, Sparkles, Shirt } from "lucide-react";

export default function Programs() {
	const programs = [
		{
			icon: Palette,
			title: "Makeup Artistry",
			description:
				"Master the art of makeup from basics to advanced techniques. Learn color theory, skin care, and special effects makeup.",
		},
		{
			icon: Scissors,
			title: "Hair Styling",
			description:
				"Professional hair cutting, coloring, and styling courses. From trendy cuts to bridal styles and everything in between.",
		},
		{
			icon: Sparkles,
			title: "Beauty Therapy",
			description:
				"Complete beauty therapy training including skincare, waxing, threading, and wellness therapies.",
		},
		{
			icon: Shirt,
			title: "Fashion Design",
			description:
				"Learn fashion design principles, pattern making, sewing, and collection creation from industry experts.",
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our Programs
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Comprehensive training in beauty and fashion with hands-on
						experience from industry professionals.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{programs.map((program, index) => {
						const IconComponent = program.icon;
						return (
							<div
								key={index}
								className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
								<IconComponent className="text-purple-600 mb-4" size={40} />
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{program.title}
								</h3>
								<p className="text-gray-600">{program.description}</p>
								<button className="mt-4 text-purple-600 font-semibold hover:text-purple-700 transition-colors">
									Learn More →
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
