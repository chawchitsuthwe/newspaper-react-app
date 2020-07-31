import React, {useState} from 'react';
import './NavBottom.css';

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
		                <a className="nav-item nav-link" href="/home">Home</a>
		                <a className="nav-item nav-link" href="/news">News</a>
		                <a className="nav-item nav-link" href="/business">Business</a>
		                <a className="nav-item nav-link" href="/entertainment">Entertainment</a>
		                <a className="nav-item nav-link" href="/health">Health</a>
		               	<a className="nav-item nav-link" href="/sports">Sports</a>
		                <a className="nav-item nav-link" href="/science">Science</a>
		                <a className="nav-item nav-link" href="/tech">Tech</a>
		                <button onClick={searchOnClick} className="nav-item nav-link"><i className="fas fa-search"></i></button>
		            </div>
		        </div>
		    </nav>
		    <SearchBar open={open} />
		</div>
	)
}

export default NavBottom;