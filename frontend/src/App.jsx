import { I18nextProvider } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import i18n from "./i18n/i18n";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import CourseDetail from "./pages/Programs/CourseDetail";
import ApplyForm from "./pages/Applying/ApplyForm";

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<Router>
				<div className="min-h-screen bg-gray-50 flex flex-col">
					{/* Navigation */}
					<Navbar />

					{/* Main Content */}
					<main className="flex-grow">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/programs" element={<Programs />} />
							<Route path="/programs/:id" element={<CourseDetail />} />
							<Route path="/apply/:courseId" element={<ApplyForm />} />
						</Routes>
					</main>

					{/* Footer */}
					<Footer />
				</div>
			</Router>
		</I18nextProvider>
	);
}

export default App;
