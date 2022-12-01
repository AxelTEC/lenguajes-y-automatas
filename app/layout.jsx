// These styles apply to every route in the application
import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body className="max-w-full overflow-x-hidden bg-gradient-to-r from-zinc-900 to-slate-700 scrollbar hover:scrollbar-thumb-indigo-600 scrollbar-thumb-indigo-500 scrollbar-track-slate-600">
				<Header />
				{children}
			</body>
		</html>
	);
}
