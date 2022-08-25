import React from "react";
import './navbar.css'
// 
const Navbar = () => {
	return (
		<div className="navbar">
			<span className="logo">PF APP</span>
			<ul className="list">
				<li className="listItem">
					<img
						src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
						alt=""
						className="avatar"
					/>
				</li>
				<li className="listItem">Richard</li>
				<li className="listItem">Logout</li>
			</ul>
		</div>
	);
};

export default Navbar;
