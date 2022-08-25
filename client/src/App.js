import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./App.css";

const user = false;

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar user={user}/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={user ? <Navigate to="/" /> : <Login />}
					/>
					<Route path="/post/:id" element={<Post />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
