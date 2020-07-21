import React from 'react';
import './NavTop.css'

const NavTop = () => {
	return (
		<div>
			<nav className="navbar nav-top">
				<div>
					<a className="logo" href="/">NEWSPAPER</a>
					<p className="todayDate">Tuesday, July 21, 2020</p>
				</div>
			</nav>
		</div>
	)
}

export default NavTop