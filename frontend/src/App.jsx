import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";

function App() {
	return (
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
	);
}

export default App;
