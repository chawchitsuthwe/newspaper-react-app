import React from 'react';
import './SearchBar.css';

const SearchBar = ({open}) => {
	return (
		<div>
		{ open && 
			<div className="searchbar">
				<form className="justify-content-center">
					<div className="form-row">
					    <div className="form-group col-md-10">
					     	<input className="form-control" type="search" placeholder="Search" aria-label="Search" />
					    </div>
					    <div className="form-group col-md-2">
					      	<button className="btn btn-search my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
					    </div>
					</div>
				</form>
			</div>
			
		}
		</div>
	)
}

export default SearchBar