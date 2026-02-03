import { Star } from "lucide-react";

export default function Testimonials() {
	const testimonials = [
		{
			name: "Sarah Johnson",
			role: "Makeup Artist & Brand Owner",
			image: "SJ",
			text: "LISA College completely transformed my career. The hands-on training and mentorship I received helped me launch my own makeup line. Best decision ever!",
			rating: 5,
		},
		{
			name: "Emma Chen",
			role: "Fashion Designer",
			image: "EC",
			text: "The fashion design program is incredible. The instructors are industry professionals who taught me everything I needed to know to work with top fashion brands.",
			rating: 5,
		},
		{
			name: "Maria Rodriguez",
			role: "Certified Hair Stylist",
			image: "MR",
			text: "From zero experience to opening my own salon in just 10 months. LISA College's curriculum and support made it all possible.",
			rating: 5,
		},
	];

	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-6xl mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Student Success Stories
					</h2>
					<p className="text-lg text-gray-600">
						Hear from our successful graduates who are making waves in the
						beauty and fashion industry.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div key={index} className="bg-white rounded-lg shadow-md p-8">
							<div className="flex items-center mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										size={18}
										className="text-yellow-400 fill-current"
									/>
								))}
							</div>
							<p className="text-gray-600 mb-6">"{testimonial.text}"</p>
							<div className="flex items-center">
								<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
									{testimonial.image}
								</div>
								<div>
									<p className="font-semibold text-gray-900">
										{testimonial.name}
									</p>
									<p className="text-sm text-gray-600">{testimonial.role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
