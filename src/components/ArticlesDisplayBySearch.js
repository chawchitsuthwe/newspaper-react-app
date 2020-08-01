import React,{useState, useEffect} from 'react';
import ReactLoading from 'react-loading';
import Pagination from './Pagination';

import Axios from "axios";
import {getApiUrl} from '../utils';

import Nav from './Nav';
import Footer from './Footer';
import ArticleCard from './ArticleCard';

const ArticlesDisplayBySearch = ({match}) => {
	const [loading, setLoading] = useState(false);

	const [articles, setArticles] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [articlesPerPage] = useState(10);
	const [totalResults, setTotalResults] = useState(0);

	useEffect(() => {
		const fetchArticles = async (keyword) => {
			setLoading(true);

			const link = getApiUrl(`/v2/everything?q=${keyword}&pageSize=${articlesPerPage}&page=${currentPage}`)
			const encodedUrl = encodeURI(link);
			console.log(encodedUrl)

			try {
		      	const res = await Axios.get(encodedUrl);
		      	setArticles(res.data.articles);
		      	setTotalResults(res.data.totalResults);
		      	setLoading(false);
		    } 
		    catch (error) {
		      	console.log(error);
		      	setLoading(false);
		      	setArticles([]);
		    }
		}

		fetchArticles(match.params.keyword);
	}, [match.params.keyword,articlesPerPage,currentPage])

	const formatDate = (string) => {
    	var options = { year: 'numeric', month: 'long', day: 'numeric' };
    	return new Date(string).toLocaleDateString([],options);
	}

	// Change page
  	const paginate = (pageNumber) => {
  		setCurrentPage(pageNumber);
  	} 

	return (
		<div>
			<Nav />

			{
				loading ? <ReactLoading type="cubes" color="#F3DFC1" height={100} width={100} className="loader" /> :

			<div>

				<h1 className="font-weight-bold text-center mt-5 mb-3">SEARCH RESULTS OF "{match.params.keyword}"</h1>

				{/*content*/}
				<section>
					<div className="container">
						<div className="row">
							<div className="col-lg-9 col-md-9 col-sm-12">
								{ articles && articles.map( (article, index) =>
									<ArticleCard key={index} article={article} category="SEARCH" formatDate={formatDate} includeDesc={true} />
									)
								}
							</div>
							<div className="col-lg-3 col-md-12 col-sm-12"></div>
						</div>
						<div className="row">
							<div className="col-12">
								<Pagination
						        articlesPerPage={articlesPerPage}
						        totalResults={totalResults}
						        paginate={paginate}
						        currentPage={currentPage}
						      />
							</div>
						</div>
					</div>
				</section>

				{/*Footer*/}
				<Footer />
			</div>

			}

		</div>
	)
}

export default ArticlesDisplayBySearch