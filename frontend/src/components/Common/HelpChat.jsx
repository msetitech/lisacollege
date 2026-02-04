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
		},
	]);
	const [inputValue, setInputValue] = useState("");

	const handleSendMessage = () => {
		if (!inputValue.trim()) return;

		// Add user message
		const userMessage = {
			id: messages.length + 1,
			type: "user",
			text: inputValue,
		};

		setMessages([...messages, userMessage]);

		// Simulate bot response after a short delay
		setTimeout(() => {
			const botResponse = {
				id: messages.length + 2,
				type: "bot",
				text:
					i18n.language === "sw"
						? "Asante kwa swali lako! Timu yetu itakabidhiana naye karibu sana. Unaweza pia kuwasiliana nasi kupitia kurasa ya wasiliano."
						: "Thank you for your question! Our team will get back to you shortly. You can also reach us through the contact page.",
			};
			setMessages((prev) => [...prev, botResponse]);
		}, 600);

		setInputValue("");
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
					<div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3 max-h-64">
						{messages.map((msg) => (
							<div
								key={msg.id}
								className={`flex ${
									msg.type === "user" ? "justify-end" : "justify-start"
								}`}>
								<div
									className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
										msg.type === "user"
											? "bg-[#EE048B] text-white rounded-br-none"
											: "bg-white border border-gray-200 text-gray-900 rounded-bl-none"
									}`}>
									{msg.text}
								</div>
							</div>
						))}
					</div>

					{/* Input Area */}
					<div className="border-t border-gray-200 p-3 bg-white rounded-b-lg">
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
