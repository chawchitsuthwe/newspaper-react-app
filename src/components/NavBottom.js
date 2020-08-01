import React, {useState} from 'react';
import './NavBottom.css';
import { NavLink } from 'react-router-dom';

import SearchBar from './SearchBar'

const NavBottom = () => {
	const [open, setOpen] = useState(false)

	const searchOnClick = () => {
		setOpen(!open);
	}

	return (
		<div>

			<nav className="navbar navbar-expand-lg nav-bottom">
		        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		        	<span className="navbar-toggler-icon"></span>
		    	</button>
		        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		            <div className="navbar-nav mx-auto">
			            <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/"
					    >
					      Home
					    </NavLink>
					    <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/news"
					    >
					      News
					    </NavLink>
					    <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/business"
					    >
					      Business
					    </NavLink>
					    <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/entertainment"
					    >
					      Entertainment
					    </NavLink>
					    <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/health"
					    >
					      Health
					    </NavLink>
					    <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/sports"
					    >
					      Sports
					    </NavLink>
					    <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/science"
					    >
					      Science
					    </NavLink>
					    <NavLink
					      exact
					      activeClassName="active"
					      className="nav-item nav-link"
					      to="/tech"
					    >
					      Tech
					    </NavLink>
					    <button onClick={searchOnClick} className="nav-item nav-link"><i className="fas fa-search"></i></button>
		            </div>
		        </div>
		    </nav>
		    <SearchBar open={open} />
		</div>
	)
}

export default NavBottom;