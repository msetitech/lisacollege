export default function CTA() {
	return (
		<section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
			<div className="max-w-6xl mx-auto px-4 text-center">
				<h2 className="text-4xl font-bold mb-4">
					Ready to Start Your Journey?
				</h2>
				<p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
					Join hundreds of students who have transformed their passion into a
					successful career. Enroll now and get special discounts for early
					registrations.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
						Apply Now
					</button>
					<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
						Schedule a Tour
					</button>
				</div>
			</div>
		</section>
	);
}
