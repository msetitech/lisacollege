import { Award, Users, BookOpen, Globe } from "lucide-react";

export default function About() {
	const stats = [
		{ icon: Award, label: "Years of Excellence", value: "14+" },
		{ icon: Users, label: "Students Graduated", value: "2500+" },
		{ icon: BookOpen, label: "Professional Courses", value: "20+" },
		{ icon: Globe, label: "Global Reach", value: "35+ Countries" },
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-6xl mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div>
						<h2 className="text-4xl font-bold text-gray-900 mb-6">
							About LISA College
						</h2>
						<p className="text-lg text-gray-600 mb-4">
							Since 2010, LISA College has been at the forefront of beauty and
							fashion education, producing highly skilled professionals who
							excel in their careers.
						</p>
						<p className="text-lg text-gray-600 mb-8">
							Our state-of-the-art facilities, experienced instructors, and
							industry partnerships ensure that our students receive world-class
							training and career opportunities.
						</p>
						<ul className="space-y-3">
							<li className="flex items-center space-x-3">
								<span className="w-2 h-2 bg-purple-600 rounded-full"></span>
								<span className="text-gray-700">
									Contemporary curriculum aligned with industry standards
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<span className="w-2 h-2 bg-purple-600 rounded-full"></span>
								<span className="text-gray-700">
									Hands-on training with professional equipment
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<span className="w-2 h-2 bg-purple-600 rounded-full"></span>
								<span className="text-gray-700">
									Career placement assistance and internships
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<span className="w-2 h-2 bg-purple-600 rounded-full"></span>
								<span className="text-gray-700">
									Internationally recognized certifications
								</span>
							</li>
						</ul>
					</div>

					{/* Stats Grid */}
					<div className="grid grid-cols-2 gap-6">
						{stats.map((stat, index) => {
							const IconComponent = stat.icon;
							return (
								<div
									key={index}
									className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6">
									<IconComponent className="text-purple-600 mb-3" size={32} />
									<div className="text-3xl font-bold text-gray-900 mb-1">
										{stat.value}
									</div>
									<div className="text-gray-600">{stat.label}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
