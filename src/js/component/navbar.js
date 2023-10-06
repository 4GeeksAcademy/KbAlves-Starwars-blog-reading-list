import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKdFlDMA2TkrUQ8EiOkFz_uuXzuH781dNJw&usqp=CAU" alt="Logotipo da Empresa"/>
			</Link>
			<div className="ml-auto">
				<Link>
					<div class="dropdown">
						<button class="btn btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.Favorites.length}
						</button>
						<ul class="dropdown-menu">
							{store.Favorites.map(
							(item,index)=> {
							return(
								<div  className="favorite-item">
									<li>
										<a class="dropdown-item" href="#">{item} 
											<i className="fas fa-trash-alt test" onClick={()=>actions.getDeleteFavorite(item)}></i>
										</a>									
									</li>
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
