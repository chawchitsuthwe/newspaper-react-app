import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			{/*Footer*/}
			<section>
				<div className="container-fluid">
					<div>
						<button className="btn btn-social mx-1"><i className="fab fa-facebook-f"></i></button>
						<button className="btn btn-social mx-1"><i className="fab fa-instagram"></i></button>
						<button className="btn btn-social mx-1"><i className="fab fa-twitter"></i></button>
						<button className="btn btn-social mx-1"><i className="fab fa-youtube"></i></button>
					</div>
					<div className="separator">&nbsp;&nbsp;NEWSPAPER&nbsp;&nbsp;</div>
					<p>Copyright &copy; 2020, NEWSPAPER. All Rights Reserved.</p>
				</div>
			</section>
		</div>
	)
}

export default Footer