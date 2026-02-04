import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function HelpChat() {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			id: 1,
			type: "bot",
			text:
				i18n.language === "sw"
					? "Habari! Ninafanya kazi kwa LISA College. Unastahili msaada?"
					: "Hello! Welcome to LISA College support. How can I help you?",
			showQuestions: true,
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [showCustomInput, setShowCustomInput] = useState(false);

	const courseData = {
		beautyAndFashion: [
			{
				name_en: "Hair styling, Makeup & Beauty",
				name_sw: "Ususi, Makeup & Styling",
				duration_en: "6 Months",
				duration_sw: "Miezi 6",
				fee: "600,000",
				hostel: "780,000",
			},
			{
				name_en: "Hair styling, Makeup & Beauty",
				name_sw: "Ususi, Makeup & Styling",
				duration_en: "3 Months",
				duration_sw: "Miezi 3",
				fee: "300,000",
				hostel: "390,000",
			},
			{
				name_en: "Hair Styling Only",
				name_sw: "Ususi Pekee",
				duration_en: "2 Months",
				duration_sw: "Miezi 2",
				fee: "250,000",
				hostel: "310,000",
			},
			{
				name_en: "Full Makeup & Hair Styling",
				name_sw: "Makeup Kamili & Hair Styling",
				duration_en: "1 Month",
				duration_sw: "Mwezi 1",
				fee: "150,000",
				hostel: "180,000",
			},
			{
				name_en: "Nail Art",
				name_sw: "Urembo wa Kucha",
				duration_en: "2 Months",
				duration_sw: "Miezi 2",
				fee: "300,000",
				hostel: "360,000",
			},
		],
		otherCourses: [
			{
				name_en: "Decoration/Event Decor",
				name_sw: "Mapambo (Decoration)",
				duration_en: "2 Months",
				duration_sw: "Miezi 2",
				fee: "400,000",
				hostel: "460,000",
			},
			{
				name_en: "Cake Decoration",
				name_sw: "Mapambo ya Keki",
				duration_en: "1 Month",
				duration_sw: "Mwezi 1",
				fee: "300,000",
				hostel: "330,000",
			},
			{
				name_en: "Fashion Design, Sewing & Cloth Tech",
				name_sw: "Ubunifu wa Mavazi, Ushonaji & Teknolojia ya Nguo",
				duration_en: "6 Months",
				duration_sw: "Miezi 6",
				fee: "600,000",
				hostel: "780,000",
			},
			{
				name_en: "Henna/Hina/Piko",
				name_sw: "Henna (Hina/Piko)",
				duration_en: "1 Month",
				duration_sw: "Mwezi 1",
				fee: "150,000",
				hostel: "180,000",
			},
		],
	};

	const quickQuestions = [
		{
			id: "courses",
			label:
				i18n.language === "sw"
					? "Kozi zipi unayopatikana?"
					: "What courses are available?",
			contentType: "courses",
		},
		{
			id: "hostel",
			label:
				i18n.language === "sw"
					? "Je! Tunatoa huduma ya hostel?"
					: "Do you offer hostel facilities?",
			answer:
				i18n.language === "sw"
					? "Ndiyo! Tunatoa huduma ya hostel kwa wanafunzi wanaotoka nje. Bei ya hostel inaongezwa kwenye ada ya kozi."
					: "Yes! We provide hostel facilities for students from outside the city. Hostel fees are added to the course fees.",
		},
		{
			id: "admission",
			label:
				i18n.language === "sw"
					? "Jinsi ya kuomba kujiunga?"
					: "How do I apply?",
			answer:
				i18n.language === "sw"
					? "Unaweza kuomba kwa moja ya njia: (1) Njia ya mtandaoni kwenye kurasa yetu, (2) Kuja mwenyewe ofisini, au (3) Kumpigia simu timu yetu. Tupo mnamo Dar es Salaam."
					: "You can apply in three ways: (1) Online through our website, (2) Visit us in person at our office, or (3) Call our team. We're located in Dar es Salaam.",
		},
		{
			id: "schedule",
			label:
				i18n.language === "sw"
					? "Ratiba za mafunzo?"
					: "What are the class schedules?",
			answer:
				i18n.language === "sw"
					? "Tunatoa mafunzo ya asubuhi, mchana, na jioni kwa ajili ya kurahisisha wanafunzi. Tafadhali wasiliana nasi kwa ratiba kamili."
					: "We offer morning, afternoon, and evening classes to accommodate all students. Please contact us for the full schedule.",
		},
		{
			id: "other",
			label: i18n.language === "sw" ? "Swali jingine" : "Ask something else",
			isCustom: true,
		},
	];

	const CourseTable = ({ data, title }) => (
		<div className="text-xs space-y-2">
			<h4 className="font-bold text-gray-900 mb-2">{title}</h4>
			<div className="overflow-x-auto">
				<table className="w-full border-collapse border border-gray-300">
					<thead>
						<tr className="bg-[#68226A] text-white">
							<th className="border border-gray-300 px-2 py-1 text-left">
								{i18n.language === "sw" ? "Kozi" : "Course"}
							</th>
							<th className="border border-gray-300 px-2 py-1 text-left">
								{i18n.language === "sw" ? "Muda" : "Duration"}
							</th>
							<th className="border border-gray-300 px-2 py-1 text-left">
								{i18n.language === "sw" ? "Ada" : "Fee"}
							</th>
							<th className="border border-gray-300 px-2 py-1 text-left">
								{i18n.language === "sw" ? "Pamoja na Hostel" : "With Hostel"}
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((course, idx) => (
							<tr
								key={idx}
								className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
								<td className="border border-gray-300 px-2 py-1">
									{i18n.language === "sw" ? course.name_sw : course.name_en}
								</td>
								<td className="border border-gray-300 px-2 py-1">
									{i18n.language === "sw"
										? course.duration_sw
										: course.duration_en}
								</td>
								<td className="border border-gray-300 px-2 py-1">
									{course.fee}
								</td>
								<td className="border border-gray-300 px-2 py-1">
									{course.hostel}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);

	const handleQuickQuestion = (question) => {
		if (question.isCustom) {
			setShowCustomInput(true);
			return;
		}

		const userMessage = {
			id: messages.length + 1,
			type: "user",
			text: question.label,
		};

		const updatedMessages = messages.map((msg) => ({
			...msg,
			showQuestions: false,
		}));

		setMessages([...updatedMessages, userMessage]);

		setTimeout(() => {
			let botResponse;

			if (question.contentType === "courses") {
				botResponse = {
					id: messages.length + 2,
					type: "bot",
					contentType: "courses",
					showQuestions: true,
				};
			} else {
				botResponse = {
					id: messages.length + 2,
					type: "bot",
					text: question.answer,
					showQuestions: true,
				};
			}

			setMessages((prev) => [...prev, botResponse]);
		}, 600);

		setShowCustomInput(false);
	};

	const getButtonClass = (q) => {
		const baseClass =
			"w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200";
		const customClass = q.isCustom
			? "bg-gray-200 text-gray-800 hover:bg-gray-300"
			: "bg-purple-100 text-[#68226A] hover:bg-[#68226A] hover:text-white";
		return `${baseClass} ${customClass}`;
	};

	const handleSendMessage = () => {
		if (!inputValue.trim()) return;

		const userMessage = {
			id: messages.length + 1,
			type: "user",
			text: inputValue,
		};

		const updatedMessages = messages.map((msg) => ({
			...msg,
			showQuestions: false,
		}));

		setMessages([...updatedMessages, userMessage]);

		setTimeout(() => {
			const botResponse = {
				id: messages.length + 2,
				type: "bot",
				text:
					i18n.language === "sw"
						? "Asante kwa swali lako! Timu yetu itakabidhiana naye karibu sana. Unaweza pia kuwasiliana nasi kupitia kurasa ya wasiliano."
						: "Thank you for your question! Our team will get back to you shortly. You can also reach us through the contact page.",
				showQuestions: true,
			};
			setMessages((prev) => [...prev, botResponse]);
		}, 600);

		setInputValue("");
		setShowCustomInput(false);
	};

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{/* Chat Box */}
			{isOpen && (
				<div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col max-h-96">
					{/* Header */}
					<div className="bg-[#68226A] text-white p-4 rounded-t-lg flex items-center justify-between">
						<div className="flex items-center gap-2">
							<MessageCircle className="w-5 h-5" />
							<div>
								<h3 className="font-bold text-sm">{t("help.title")}</h3>
								<p className="text-xs opacity-90">{t("help.subtitle")}</p>
							</div>
						</div>
						<button
							onClick={() => setIsOpen(false)}
							className="hover:bg-[#EE048B] p-1 rounded transition-colors">
							<X className="w-5 h-5" />
						</button>
					</div>

					{/* Messages Container */}
					<div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3 max-h-80">
						{messages.map((msg) => (
							<div key={msg.id}>
								{/* Message Bubble */}
								<div
									className={`flex ${
										msg.type === "user" ? "justify-end" : "justify-start"
									}`}>
									<div
										className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
											msg.type === "user"
												? "bg-[#EE048B] text-white rounded-br-none"
												: "bg-white border border-gray-200 text-gray-900 rounded-bl-none"
										}`}>
										{msg.contentType === "courses" ? (
											<div className="space-y-3">
												<CourseTable
													data={courseData.beautyAndFashion}
													title="💄 Kozi za Urembo na Saluni"
												/>
												<CourseTable
													data={courseData.otherCourses}
													title="🎨 Kozi Nyingine za Ufundi"
												/>
											</div>
										) : (
											msg.text
										)}
									</div>
								</div>

								{/* Quick Questions (show if showQuestions is true) */}
								{msg.showQuestions && (
									<div className="mt-3 space-y-2">
										{quickQuestions.map((q) => (
											<button
												key={q.id}
												onClick={() => handleQuickQuestion(q)}
												className={getButtonClass(q)}>
												{q.label}
											</button>
										))}
									</div>
								)}
							</div>
						))}
					</div>

					{/* Input Area */}
					<div className="border-t border-gray-200 p-3 bg-white rounded-b-lg">
						{showCustomInput ? (
							<div className="space-y-2">
								<label className="text-xs text-gray-600 font-medium">
									{i18n.language === "sw"
										? "Andika swali lako:"
										: "Type your question:"}
								</label>
								<div className="flex gap-2">
									<input
										type="text"
										value={inputValue}
										onChange={(e) => setInputValue(e.target.value)}
										onKeyPress={(e) => {
											if (e.key === "Enter") {
												handleSendMessage();
											}
										}}
										autoFocus
										placeholder={t("help.inputPlaceholder")}
										className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#68226A]"
									/>
									<button
										onClick={handleSendMessage}
										className="bg-[#68226A] hover:bg-[#EE048B] text-white p-2 rounded-lg transition-colors">
										<Send className="w-4 h-4" />
									</button>
								</div>
							</div>
						) : (
							<div className="flex gap-2">
								<input
									type="text"
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									onKeyPress={(e) => {
										if (e.key === "Enter") {
											handleSendMessage();
										}
									}}
									placeholder={t("help.inputPlaceholder")}
									className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#68226A]"
								/>
								<button
									onClick={handleSendMessage}
									className="bg-[#68226A] hover:bg-[#EE048B] text-white p-2 rounded-lg transition-colors">
									<Send className="w-4 h-4" />
								</button>
							</div>
						)}
					</div>
				</div>
			)}

			{/* Floating Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="bg-[#EE048B] hover:bg-[#68226A] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border-4 border-white">
				{isOpen ? (
					<X className="w-6 h-6" />
				) : (
					<MessageCircle className="w-6 h-6" />
				)}
			</button>
		</div>
	);
}
