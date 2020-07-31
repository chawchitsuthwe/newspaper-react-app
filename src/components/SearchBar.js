import React,{useState} from 'react';
import './SearchBar.css';
import {useHistory} from 'react-router-dom';

const SearchBar = ({open}) => {
	const [searchText, setSearchText] = useState("");

	const history = useHistory();

	const searchOnClick = () => {
		history.push(`/search/${searchText}`);
	}

	return (
		<div>
		{ open && 
				<div className="searchbar">
				  	<div className="form-row">
				    	<div className="col-10">
				      		<input type="text" className="form-control" placeholder="Search by keywords or phrases "
				      		value={searchText} 
				      		onChange={e => setSearchText(e.target.value)} />
				    	</div>
				    	<div className="col-2">
				      		<button onClick={searchOnClick} className="btn btn-search my-2 my-sm-0 w-100"><i className="fas fa-search"></i></button>
				    	</div>
				  	</div>
				</div>
			
		}
		</div>
	)
}

export default SearchBar