import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<div className="min-h-screen bg-gray-50 flex flex-col">
				{/* Navigation */}
				<Navbar />

				{/* Main Content */}
				<main className="flex-grow">
					<Home />
				</main>

				{/* Footer */}
				<Footer />
			</div>
		</I18nextProvider>
	);
}

export default App;
