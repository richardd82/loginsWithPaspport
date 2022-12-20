import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
//
const Navbar = ({ user }) => {
	const logout = () => {		
		window.open(process.env.REACT_APP_API_URL+"/auth/logout", "_self");
	};
	// const GOOGLE_CLIENT_ID = "AIzaSyBQVj2X9xWCr-pgiJDzR0K5TXNVaaUoeec";
	// const img = user.photos;
	// console.log(img)
	return (
		<div className="navbar">
			<span className="logo">
				<Link className="link" to="/">
					PF APP
				</Link>
			</span>
			{user ? (
				<ul className="list">
					<li className="listItem">
						<img
							src={
								user.photos[0].value
							}
							alt=""
							className="avatar"
						/>
					</li>
					<li className="listItem">{user.displayName}</li>
					<li className="listItem" onClick={logout}>
						Logout
					</li>
				</ul>
			) : (
				<Link className="link" to="/login">
					Login
				</Link>
			)}
		</div>
	);
};

export default Navbar;
