export default function Hero() {
	return (
		<section className="pt-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-32">
			<div className="max-w-6xl mx-auto px-4 text-center">
				<h1 className="text-6xl font-bold mb-4 leading-tight">
					Welcome to LISA College
				</h1>
				<p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
					Excellence in Beauty & Fashion Education. Transform Your Passion into
					a Career.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
						Explore Programs
					</button>
					<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
						Learn More
					</button>
				</div>
			</div>
		</section>
	);
}
