import { useRef, useState, useEffect, useCallback } from "react";
import { Star, Quote, StarsIcon } from "lucide-react";

export default function Testimonials() {
	const scrollRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardWidth, setCardWidth] = useState(300);
	const GAP = 20;

	// ── the big "featured" story shown on the left ──
	const featured = {
		name: "Amina Hussain",
		role: "Mwenye Saluni & Mfanyabiashara",
		course: "Kozi Nzima – Miezi 6",
		text: "Nilikuwa sina ujuzi wowote wa ususi. Baada ya miezi sita katika LISA College, nimefungua saluni yangu mwenyewe mjini Dar es Salaam. Wakufunzi walikuwa bora sana — walinifundisha kila kitu nilichohitaji na zaidi. Ni uwekezaji bora zaidi wa maisha yangu.",
		rating: 5,
		initials: "AH",
	};

	// ── carousel testimonials ──
	const testimonials = [
		{
			name: "Fatuma Mwangi",
			role: "Mtaalamu wa Makeup",
			course: "Urembo wa Uso na Nywele – Mwezi 1",
			text: "Programu ya makeup ilikuwa ya kushangaza. Sasa ninafanya kazi na washauri wa harusi na matukio makubwa. Asante LISA College!",
			rating: 5,
			initials: "FM",
		},
		{
			name: "Zara Mseleti",
			role: "Msanifu wa Mavazi",
			course: "Fashon, Ushonaji & Teknolojia – Miezi 6",
			text: "Nimesoma kuhusu fashon lakini hapa ndipo nilipojua kufanya. Sasa ninadesini mavazi yangu mwenyewe na ninayauza online.",
			rating: 5,
			initials: "ZM",
		},
		{
			name: "Hawa Rashidi",
			role: "Mtaalamu wa Kucha",
			course: "Nail Art – Miezi 2",
			text: "Nail art ilikuwa ndoto yangu tangu utotoni. LISA College ilifanya ndoto kuwa ukweli. Wateja wangu wanapenda kazi yangu!",
			rating: 5,
			initials: "HR",
		},
		{
			name: "Maryam Salim",
			role: "Mpamba wa Matukio",
			course: "Mapambo – Miezi 2",
			text: "Kozi ya decoration ilinisaidia sana. Sasa ninafanya mapambo ya harusi na matukio makubwa mjini. Mafunzo yalikuwa ya vitendo sana.",
			rating: 4,
			initials: "MS",
		},
		{
			name: "Nadia Osman",
			role: "Mpamba wa Keki",
			course: "Mapambo ya Keki – Mwezi 1",
			text: "Nimejifunza jinsi ya kupamba keki za kisasa. Sasa nina biashara yangu mwenyewe — kila weekend nina wateja wanaonitafuta!",
			rating: 5,
			initials: "NO",
		},
		{
			name: "Salima Baraka",
			role: "Ususi na Styling",
			course: "Ususi – Miezi 2",
			text: "Miezi miwili tu ilikuwa ya kutosha. Nimejifunza cut, color na styling. Sasa nafanya kazi saluni kubwa mjini Arusha.",
			rating: 5,
			initials: "SB",
		},
	];

	// ── resize observer → compute card width so 2 cards fit perfectly ──
	const recalc = useCallback(() => {
		if (!scrollRef.current) return;
		const w = scrollRef.current.clientWidth;
		setCardWidth((w - GAP) / 2);
	}, []);

	useEffect(() => {
		recalc();
		const obs = new ResizeObserver(recalc);
		if (scrollRef.current) obs.observe(scrollRef.current);
		return () => obs.disconnect();
	}, [recalc]);

	const scrollToIndex = (i) => {
		if (!scrollRef.current) return;
		scrollRef.current.scrollTo({
			left: i * (cardWidth + GAP),
			behavior: "smooth",
		});
		setCurrentIndex(i);
	};

	// ── auto-play ──
	useEffect(() => {
		const iv = setInterval(() => {
			setCurrentIndex((prev) => {
				const next = (prev + 1) % testimonials.length;
				if (scrollRef.current)
					scrollRef.current.scrollTo({
						left: next * (cardWidth + GAP),
						behavior: "smooth",
					});
				return next;
			});
		}, 5000);
		return () => clearInterval(iv);
	}, [testimonials.length, cardWidth]);

	// ── star row helper ──
	const Stars = ({ count }) => (
		<div className="flex gap-0.5">
			{[...Array(5)].map((_, i) => (
				<Star
					key={i}
					size={14}
					className={
						i < count
							? "fill-[#FFC107] text-[#FFC107]"
							: "text-white/20 fill-white/10"
					}
				/>
			))}
		</div>
	);

	return (
		<section
			className="py-20"
			style={{
				background:
					"linear-gradient(135deg, #68226A 0%, #4a1650 60%, #3d1245 100%)",
			}}>
			{/* subtle decorative circles */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border border-white/5" />
				<div className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full border border-white/5" />
				<div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full border border-white/4" />
			</div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* ── header ── */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
					<div>
						<div className="inline-flex items-center gap-2 mb-4">
							<span className="w-8 h-0.5 bg-[#EE048B]" />
							<span className="text-[#EE048B] font-bold text-xs uppercase tracking-widest">
								Mafanikio ya Wanafunzi
							</span>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
							Wanafunzi wetu
							<span className="text-[#EE048B]"> Wanasema Nini</span>
						</h2>
					</div>
					<p className="text-white/50 max-w-sm text-right text-sm">
						Sikiliza hadithi za kweli kutoka kwa wahusika wetu waliokamilisha
						mafunzo na wanafanya kazi vizuri sasa hivi.
					</p>
				</div>

				{/* ── two-column layout ── */}
				<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
					{/* ──── LEFT: big featured card ──── */}
					<div
						className="lg:col-span-2 bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-7 flex flex-col justify-between"
						style={{ background: "rgba(255,255,255,0.07)" }}>
						{/* quote icon */}
						<div>
							<div className="w-10 h-10 rounded-full bg-[#EE048B]/20 flex items-center justify-center mb-5">
								<Quote className="text-[#EE048B]" size={20} fill="#EE048B" />
							</div>

							{/* course tag */}
							<span className="inline-block bg-[#EE048B] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
								{featured.course}
							</span>

							{/* stars */}
							<StarsIcon count={featured.rating} />

							{/* text */}
							<p className="text-white/80 text-base leading-relaxed mt-4 mb-6">
								"{featured.text}"
							</p>
						</div>

						{/* person */}
						<div className="flex items-center gap-4 pt-5 border-t border-white/10">
							<div
								className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
								style={{
									background: "linear-gradient(135deg, #EE048B, #68226A)",
								}}>
								{featured.initials}
							</div>
							<div>
								<p className="text-white font-bold text-base">
									{featured.name}
								</p>
								<p className="text-white/50 text-xs">{featured.role}</p>
							</div>
						</div>
					</div>

					{/* ──── RIGHT: scrolling carousel ──── */}
					<div className="lg:col-span-3 flex flex-col gap-5">
						<div
							ref={scrollRef}
							className="flex overflow-x-hidden"
							style={{
								gap: GAP,
								scrollBehavior: "smooth",
								scrollbarWidth: "none",
								msOverflowStyle: "none",
							}}>
							<style>{`div::-webkit-scrollbar { display: none; }`}</style>

							{testimonials.map((t, i) => (
								<div
									key={i}
									className="flex-shrink-0 rounded-2xl p-5 flex flex-col justify-between border border-white/10 group hover:border-[#EE048B]/50 transition-all duration-300"
									style={{
										width: cardWidth,
										minHeight: 220,
										background: "rgba(255,255,255,0.06)",
									}}>
									<div>
										{/* top row: quote icon + stars */}
										<div className="flex items-start justify-between mb-3">
											<div className="w-8 h-8 rounded-full bg-[#EE048B]/15 flex items-center justify-center">
												<Quote
													className="text-[#EE048B]"
													size={15}
													fill="#EE048B"
												/>
											</div>
											<Stars count={t.rating} />
										</div>

										{/* course tag */}
										<span className="inline-block bg-white/10 text-white/70 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
											{t.course}
										</span>

										{/* text */}
										<p className="text-white/65 text-sm leading-relaxed line-clamp-3">
											"{t.text}"
										</p>
									</div>

									{/* person */}
									<div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/8">
										<div
											className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
											style={{
												background: "linear-gradient(135deg, #EE048B, #68226A)",
											}}>
											{t.initials}
										</div>
										<div>
											<p className="text-white font-semibold text-sm">
												{t.name}
											</p>
											<p className="text-white/40 text-xs">{t.role}</p>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* ── animated dots ── */}
						<div className="flex items-center justify-center gap-2.5">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => scrollToIndex(index)}
									aria-label={`Nenda testimoni ${index + 1}`}
									className="relative flex items-center justify-center"
									style={{
										width: currentIndex === index ? 32 : 10,
										height: 10,
										transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
									}}>
									<span
										className="absolute inset-0 rounded-full"
										style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
									/>
									<span
										className="absolute inset-0 rounded-full"
										style={{
											backgroundColor: "#EE048B",
											transform:
												currentIndex === index ? "scaleX(1)" : "scaleX(0)",
											transformOrigin: "left",
											transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
										}}
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
