import React from 'react';
import './Page404.css';

import Nav from './Nav';

const Page404 =() => {
	return (
		<div>
			<Nav/>
			<div className="wrapper">
				<span>
					<i className="fa fa-chain-broken fa-5"></i>
				</span>
				<h2>
					<span> 4</span><span>0</span><span>4</span>
				</h2>
	  			<h1>Page Not Found</h1>
	  			<a href="/home"><button id="abutton">Go Back Home</button></a>
  			</div>
		</div>
	)
}

export default Page404;