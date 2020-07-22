import React from 'react';
import './SearchBar.css';

const SearchBar = ({open}) => {
	return (
		<div>
		{ open && 
				<form className="searchbar">
				  	<div className="form-row">
				    	<div className="col-10">
				      		<input type="text" className="form-control" placeholder="Search ... " />
				    	</div>
				    	<div className="col-2">
				      		<button className="btn btn-search my-2 my-sm-0 w-100" type="submit"><i className="fas fa-search"></i></button>
				    	</div>
				  	</div>
				</form>
			
		}
		</div>
	)
}

export default SearchBar