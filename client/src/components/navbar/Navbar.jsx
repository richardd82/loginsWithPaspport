import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
//
const Navbar = ({user}) => {
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
						src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
						alt=""
						className="avatar"
					/>
				</li>
				<li className="listItem">Richard</li>
				<li className="listItem">Logout</li>
			</ul>
			) : (<Link to='login' />)}
		</div>
	);
};

export default Navbar;
