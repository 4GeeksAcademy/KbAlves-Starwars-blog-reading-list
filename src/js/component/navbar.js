import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul class="dropdown-menu">
							{store.Favorites.map(
							(item,index)=> {
							return(
								<div>
									<li><a class="dropdown-item" href="#">{item}</a></li>
								</div>
								)
							})}
						</ul> 
					</div>
				</Link>
			</div>
		</nav>
	);
};
