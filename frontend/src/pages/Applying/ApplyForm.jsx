import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	ArrowLeft,
	ArrowRight,
	User,
	Mail,
	Phone,
	MapPin,
	Calendar,
	GraduationCap,
	CheckCircle,
	Home,
	Clock,
} from "lucide-react";
import { coursesData } from "../Programs/coursesData";

export default function ApplyForm() {
	const { courseId } = useParams();
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		dateOfBirth: "",
		gender: "",
		region: "",
		district: "",
		educationLevel: "",
		emergencyName: "",
		emergencyPhone: "",
		includeHostel: false,
		termsAccepted: false,
	});
	const [errors, setErrors] = useState({});

	const course = coursesData.find((c) => c.id === parseInt(courseId));

	useEffect(() => {
		if (!course) navigate("/programs");
	}, [course, navigate]);

	if (!course) return null;

	const steps = [
		{
			id: 1,
			label: { en: "Personal Info", sw: "Taarifa Binafsi" },
			icon: User,
		},
		{ id: 2, label: { en: "Details", sw: "Maelezo" }, icon: MapPin },
		{ id: 3, label: { en: "Course", sw: "Kozi" }, icon: GraduationCap },
		{ id: 4, label: { en: "Review", sw: "Kagua" }, icon: CheckCircle },
	];

	const regions = [
		"Dar es Salaam",
		"Arusha",
		"Dodoma",
		"Mwanza",
		"Mbeya",
		"Morogoro",
		"Tanga",
	];

	const educationLevels = [
		{ en: "Primary Education", sw: "Elimu ya Msingi" },
		{ en: "Secondary Education", sw: "Elimu ya Sekondari" },
		{ en: "Certificate/Diploma", sw: "Cheti/Stashahada" },
		{ en: "Degree", sw: "Shahada" },
	];

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
		if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const validate = (step) => {
		const newErrors = {};
		if (step === 1) {
			if (!formData.firstName.trim())
				newErrors.firstName =
					i18n.language === "sw" ? "Jina linahitajika" : "Required";
			if (!formData.lastName.trim())
				newErrors.lastName =
					i18n.language === "sw" ? "Jina linahitajika" : "Required";
			if (!formData.email.trim())
				newErrors.email =
					i18n.language === "sw" ? "Barua pepe inahitajika" : "Required";
			if (!formData.phone.trim())
				newErrors.phone =
					i18n.language === "sw" ? "Simu inahitajika" : "Required";
			if (!formData.dateOfBirth)
				newErrors.dateOfBirth =
					i18n.language === "sw" ? "Tarehe inahitajika" : "Required";
			if (!formData.gender)
				newErrors.gender =
					i18n.language === "sw" ? "Jinsia inahitajika" : "Required";
		}
		if (step === 2) {
			if (!formData.region)
				newErrors.region =
					i18n.language === "sw" ? "Mkoa unahitajika" : "Required";
			if (!formData.district.trim())
				newErrors.district =
					i18n.language === "sw" ? "Wilaya inahitajika" : "Required";
			if (!formData.educationLevel)
				newErrors.educationLevel =
					i18n.language === "sw" ? "Elimu inahitajika" : "Required";
			if (!formData.emergencyName.trim())
				newErrors.emergencyName =
					i18n.language === "sw" ? "Jina linahitajika" : "Required";
			if (!formData.emergencyPhone.trim())
				newErrors.emergencyPhone =
					i18n.language === "sw" ? "Simu inahitajika" : "Required";
		}
		if (step === 4) {
			if (!formData.termsAccepted)
				newErrors.termsAccepted =
					i18n.language === "sw" ? "Kubali masharti" : "Accept terms";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const nextStep = () => {
		if (validate(currentStep)) {
			setCurrentStep((prev) => Math.min(prev + 1, 4));
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const prevStep = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 1));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validate(currentStep)) {
			console.log("Submitted:", formData);
			alert(
				i18n.language === "sw"
					? "Maombi yamekubaliwa!"
					: "Application submitted!",
			);
			navigate("/programs");
		}
	};

	const courseName = i18n.language === "sw" ? course.name_sw : course.name_en;
	const selectedFee = formData.includeHostel
		? course.feeWithHostel
		: course.fee;

	return (
		<div className="min-h-screen bg-gray-50 py-16">
			<div className="max-w-4xl mx-auto px-4 md:px-6">
				<Link
					to={`/programs/${courseId}`}
					className="inline-flex items-center gap-2 text-[#EE048B] hover:text-[#68226A] font-semibold mb-8 transition group">
					<ArrowLeft
						size={20}
						className="group-hover:-translate-x-1 transition-transform"
					/>
					{i18n.language === "sw" ? "Rudi nyuma" : "Back"}
				</Link>

				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						{i18n.language === "sw" ? "Fomu ya Maombi" : "Application Form"}
					</h1>
					<p className="text-lg text-gray-600">
						<span className="font-semibold text-[#EE048B]">{courseName}</span>
					</p>
				</div>

				{/* Progress */}
				<div className="mb-12">
					<div className="flex items-center justify-between">
						{steps.map((step, idx) => {
							const Icon = step.icon;
							const isActive = currentStep === step.id;
							const isCompleted = currentStep > step.id;
							return (
								<div key={step.id} className="flex-1 flex items-center">
									<div className="flex flex-col items-center flex-1">
										<div
											className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition ${
												isCompleted
													? "bg-[#EE048B] border-[#EE048B]"
													: isActive
														? "bg-white border-[#EE048B]"
														: "bg-gray-100 border-gray-300"
											}`}>
											<Icon
												size={20}
												className={
													isCompleted
														? "text-white"
														: isActive
															? "text-[#EE048B]"
															: "text-gray-400"
												}
											/>
										</div>
										<p
											className={`mt-2 text-xs md:text-sm font-semibold ${
												isActive ? "text-[#EE048B]" : "text-gray-500"
											}`}>
											{i18n.language === "sw" ? step.label.sw : step.label.en}
										</p>
									</div>
									{idx < steps.length - 1 && (
										<div
											className={`h-0.5 flex-1 mx-2 ${
												isCompleted ? "bg-[#EE048B]" : "bg-gray-200"
											}`}
										/>
									)}
								</div>
							);
						})}
					</div>
				</div>

				<form
					onSubmit={handleSubmit}
					className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
					{/* Step 1: Personal */}
					{currentStep === 1 && (
						<div className="space-y-6">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								{i18n.language === "sw"
									? "Taarifa Binafsi"
									: "Personal Information"}
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">
										{i18n.language === "sw" ? "Jina la Kwanza" : "First Name"} *
									</label>
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
											errors.firstName ? "border-red-500" : "border-gray-200"
										}`}
									/>
									{errors.firstName && (
										<p className="text-red-500 text-xs mt-1">
											{errors.firstName}
										</p>
									)}
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">
										{i18n.language === "sw" ? "Jina la Mwisho" : "Last Name"} *
									</label>
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
											errors.lastName ? "border-red-500" : "border-gray-200"
										}`}
									/>
									{errors.lastName && (
										<p className="text-red-500 text-xs mt-1">
											{errors.lastName}
										</p>
									)}
								</div>
								<div>
									<label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
										<Mail size={16} className="text-[#EE048B]" />
										{i18n.language === "sw" ? "Barua Pepe" : "Email"} *
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
											errors.email ? "border-red-500" : "border-gray-200"
										}`}
									/>
									{errors.email && (
										<p className="text-red-500 text-xs mt-1">{errors.email}</p>
									)}
								</div>
								<div>
									<label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
										<Phone size={16} className="text-[#EE048B]" />
										{i18n.language === "sw" ? "Simu" : "Phone"} *
									</label>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
											errors.phone ? "border-red-500" : "border-gray-200"
										}`}
									/>
									{errors.phone && (
										<p className="text-red-500 text-xs mt-1">{errors.phone}</p>
									)}
								</div>
								<div>
									<label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
										<Calendar size={16} className="text-[#EE048B]" />
										{i18n.language === "sw"
											? "Tarehe ya Kuzaliwa"
											: "Date of Birth"}{" "}
										*
									</label>
									<input
										type="date"
										name="dateOfBirth"
										value={formData.dateOfBirth}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
											errors.dateOfBirth ? "border-red-500" : "border-gray-200"
										}`}
									/>
									{errors.dateOfBirth && (
										<p className="text-red-500 text-xs mt-1">
											{errors.dateOfBirth}
										</p>
									)}
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-700 mb-2">
										{i18n.language === "sw" ? "Jinsia" : "Gender"} *
									</label>
									<select
										name="gender"
										value={formData.gender}
										onChange={handleChange}
										className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
											errors.gender ? "border-red-500" : "border-gray-200"
										}`}>
										<option value="">
											{i18n.language === "sw" ? "Chagua" : "Select"}
										</option>
										<option value="male">
											{i18n.language === "sw" ? "Mume" : "Male"}
										</option>
										<option value="female">
											{i18n.language === "sw" ? "Mke" : "Female"}
										</option>
									</select>
									{errors.gender && (
										<p className="text-red-500 text-xs mt-1">{errors.gender}</p>
									)}
								</div>
							</div>
						</div>
					)}

					{/* Step 2: Details */}
					{currentStep === 2 && (
						<div className="space-y-8">
							<div>
								<h2 className="text-2xl font-bold text-gray-900 mb-6">
									{i18n.language === "sw"
										? "Anwani na Elimu"
										: "Address & Education"}
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{i18n.language === "sw" ? "Mkoa" : "Region"} *
										</label>
										<select
											name="region"
											value={formData.region}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
												errors.region ? "border-red-500" : "border-gray-200"
											}`}>
											<option value="">
												{i18n.language === "sw" ? "Chagua" : "Select"}
											</option>
											{regions.map((r) => (
												<option key={r} value={r}>
													{r}
												</option>
											))}
										</select>
										{errors.region && (
											<p className="text-red-500 text-xs mt-1">
												{errors.region}
											</p>
										)}
									</div>
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{i18n.language === "sw" ? "Wilaya" : "District"} *
										</label>
										<input
											type="text"
											name="district"
											value={formData.district}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
												errors.district ? "border-red-500" : "border-gray-200"
											}`}
										/>
										{errors.district && (
											<p className="text-red-500 text-xs mt-1">
												{errors.district}
											</p>
										)}
									</div>
									<div className="md:col-span-2">
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{i18n.language === "sw"
												? "Kiwango cha Elimu"
												: "Education Level"}{" "}
											*
										</label>
										<select
											name="educationLevel"
											value={formData.educationLevel}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
												errors.educationLevel
													? "border-red-500"
													: "border-gray-200"
											}`}>
											<option value="">
												{i18n.language === "sw" ? "Chagua" : "Select"}
											</option>
											{educationLevels.map((level, i) => (
												<option
													key={i}
													value={i18n.language === "sw" ? level.sw : level.en}>
													{i18n.language === "sw" ? level.sw : level.en}
												</option>
											))}
										</select>
										{errors.educationLevel && (
											<p className="text-red-500 text-xs mt-1">
												{errors.educationLevel}
											</p>
										)}
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{i18n.language === "sw"
										? "Mtu wa Dharura"
										: "Emergency Contact"}
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{i18n.language === "sw" ? "Jina" : "Name"} *
										</label>
										<input
											type="text"
											name="emergencyName"
											value={formData.emergencyName}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
												errors.emergencyName
													? "border-red-500"
													: "border-gray-200"
											}`}
										/>
										{errors.emergencyName && (
											<p className="text-red-500 text-xs mt-1">
												{errors.emergencyName}
											</p>
										)}
									</div>
									<div>
										<label className="block text-sm font-semibold text-gray-700 mb-2">
											{i18n.language === "sw" ? "Simu" : "Phone"} *
										</label>
										<input
											type="tel"
											name="emergencyPhone"
											value={formData.emergencyPhone}
											onChange={handleChange}
											className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#EE048B] ${
												errors.emergencyPhone
													? "border-red-500"
													: "border-gray-200"
											}`}
										/>
										{errors.emergencyPhone && (
											<p className="text-red-500 text-xs mt-1">
												{errors.emergencyPhone}
											</p>
										)}
									</div>
								</div>
							</div>
						</div>
					)}

					{/* Step 3: Course */}
					{currentStep === 3 && (
						<div className="space-y-6">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								{i18n.language === "sw" ? "Chaguo la Kozi" : "Course Selection"}
							</h2>

							<div className="bg-gradient-to-r from-[#EE048B]/10 to-[#68226A]/10 border-2 border-[#EE048B] rounded-xl p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{courseName}
								</h3>
								<div className="flex items-center gap-3 text-sm">
									<Clock size={16} className="text-[#EE048B]" />
									<span>
										{course.duration}{" "}
										{i18n.language === "sw" ? "miezi" : "months"}
									</span>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									{i18n.language === "sw" ? "Chagua Bei" : "Select Pricing"}
								</h3>
								<div className="space-y-4">
									<label className="flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer hover:border-[#EE048B] has-[:checked]:border-[#EE048B] has-[:checked]:bg-pink-50">
										<input
											type="radio"
											name="includeHostel"
											checked={!formData.includeHostel}
											onChange={() =>
												setFormData((prev) => ({
													...prev,
													includeHostel: false,
												}))
											}
											className="mt-1 w-5 h-5 accent-[#EE048B]"
										/>
										<div>
											<p className="font-semibold text-gray-900">
												{i18n.language === "sw" ? "Bila Hostel" : "No Hostel"}
											</p>
											<p className="text-2xl font-bold text-[#EE048B]">
												{(course.fee / 1000).toFixed(0)}k TSh
											</p>
										</div>
									</label>

									<label className="flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer hover:border-[#EE048B] has-[:checked]:border-[#EE048B] has-[:checked]:bg-pink-50">
										<input
											type="radio"
											name="includeHostel"
											checked={formData.includeHostel}
											onChange={() =>
												setFormData((prev) => ({
													...prev,
													includeHostel: true,
												}))
											}
											className="mt-1 w-5 h-5 accent-[#EE048B]"
										/>
										<div>
											<p className="font-semibold text-gray-900 flex items-center gap-2">
												<Home size={18} className="text-[#68226A]" />
												{i18n.language === "sw" ? "Na Hostel" : "With Hostel"}
											</p>
											<p className="text-2xl font-bold text-[#68226A]">
												{(course.feeWithHostel / 1000).toFixed(0)}k TSh
											</p>
										</div>
									</label>
								</div>
							</div>
						</div>
					)}

					{/* Step 4: Review */}
					{currentStep === 4 && (
						<div className="space-y-6">
							<h2 className="text-2xl font-bold text-gray-900 mb-6">
								{i18n.language === "sw" ? "Kagua Taarifa" : "Review"}
							</h2>

							<div className="bg-gray-50 rounded-xl p-6 border">
								<h3 className="font-bold mb-4">
									{i18n.language === "sw" ? "Taarifa" : "Information"}
								</h3>
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div>
										<p className="text-gray-600">
											{i18n.language === "sw" ? "Jina" : "Name"}:
										</p>
										<p className="font-semibold">
											{formData.firstName} {formData.lastName}
										</p>
									</div>
									<div>
										<p className="text-gray-600">Email:</p>
										<p className="font-semibold">{formData.email}</p>
									</div>
									<div>
										<p className="text-gray-600">
											{i18n.language === "sw" ? "Simu" : "Phone"}:
										</p>
										<p className="font-semibold">{formData.phone}</p>
									</div>
									<div>
										<p className="text-gray-600">
											{i18n.language === "sw" ? "Mkoa" : "Region"}:
										</p>
										<p className="font-semibold">{formData.region}</p>
									</div>
								</div>
							</div>

							<div className="bg-gradient-to-r from-[#EE048B]/10 to-[#68226A]/10 rounded-xl p-6 border-2 border-[#EE048B]">
								<h3 className="font-bold mb-2">{courseName}</h3>
								<p className="text-2xl font-bold text-[#EE048B]">
									{selectedFee.toLocaleString()} TSh
								</p>
								{formData.includeHostel && (
									<p className="text-sm text-[#68226A] font-semibold mt-2">
										{i18n.language === "sw"
											? "Pamoja na Hostel"
											: "With Hostel"}
									</p>
								)}
							</div>

							<label className="flex items-start gap-3 cursor-pointer">
								<input
									type="checkbox"
									name="termsAccepted"
									checked={formData.termsAccepted}
									onChange={handleChange}
									className="mt-1 w-5 h-5 accent-[#EE048B]"
								/>
								<div>
									<p className="text-sm text-gray-700">
										{i18n.language === "sw"
											? "Ninakubali masharti"
											: "I accept the terms"}
									</p>
									{errors.termsAccepted && (
										<p className="text-red-500 text-xs mt-1">
											{errors.termsAccepted}
										</p>
									)}
								</div>
							</label>
						</div>
					)}

					{/* Navigation */}
					<div className="flex justify-between pt-8 mt-8 border-t">
						{currentStep > 1 && (
							<button
								type="button"
								onClick={prevStep}
								className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-[#EE048B] transition">
								<ArrowLeft size={20} />
								{i18n.language === "sw" ? "Nyuma" : "Back"}
							</button>
						)}
						<div className="ml-auto">
							{currentStep < 4 ? (
								<button
									type="button"
									onClick={nextStep}
									className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold rounded-lg transition">
									{i18n.language === "sw" ? "Endelea" : "Next"}
									<ArrowRight size={20} />
								</button>
							) : (
								<button
									type="submit"
									className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#EE048B] to-[#68226A] text-white font-bold rounded-lg transition">
									<CheckCircle size={20} />
									{i18n.language === "sw" ? "Tuma" : "Submit"}
								</button>
							)}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
