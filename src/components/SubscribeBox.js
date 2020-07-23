import React from 'react';
import './SubscribeBox.css';

const SubscribeBox = () => {
	return (
		<div className="row">
			<div className="col-12 ">
				<h4>Sign up to receive news and update</h4>
				<p>To be updated with all the latest news, offers and special announcements.</p>
				<form className="form-inline d-flex justify-content-center">
				  <div className="form-group mx-sm-2 mb-2">
				    <label className="sr-only">email</label>
				    <input type="text" className="form-control" placeholder="Your email address" />
				  </div>
				  <button type="submit" className="btn btn-subscribe mb-2">Subscribe</button>
				</form>
			</div>
		</div>
	)
}

export default SubscribeBox;