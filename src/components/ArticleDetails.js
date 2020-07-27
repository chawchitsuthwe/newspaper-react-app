import React,{useState, useEffect} from 'react';
import ReactLoading from 'react-loading';
import './ArticleDetails.css';

import Axios from "axios";
import {getApiUrl} from '../utils';

import Nav from './Nav';
import ArticleCard from './ArticleCard';

const ArticleDetails = ({match}) => {

	const [article, setArticle] = useState({});
	const [latestNews, setLatestNews] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchArticle = async(title) => {
		setLoading(true);

		const link = getApiUrl(`/v2/everything?qInTitle=${title}`);
		const encodedUrl = encodeURI(link);
		console.log(encodedUrl)
		try {
	      	const res = await Axios.get(encodedUrl);
	      	setLoading(false);
	      	setArticle(res.data.articles[0]);
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setArticle({});
	    }
	}

	const fetchNewsLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=general");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLoading(false);
	      		setLatestNews(arr.slice(0, 4));
	      	}
	      	else{
	      		setLoading(false);
	      		setLatestNews([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setLatestNews([]);
	    }
	}	

	useEffect(() => {
	    fetchArticle(match.params.title);
	    fetchNewsLatest();
	  }, [match.params.title]);

	const formatDate = (string) => {
    	var options = { year: 'numeric', month: 'long', day: 'numeric' };
    	return new Date(string).toLocaleDateString([],options);
	}
	return (
		<div>
		<Nav />
		{
			loading ? <ReactLoading type="cubes" color="#F3DFC1" height={100} width={100} className="loader" /> :
			
			article && article.length !== null ? (
				<div>
					<section className="mt-3">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<p className="font-italic text-center card-date-author">{article.author} - {formatDate(article.publishedAt)}</p>
									<h1 className="text-center">{article.title}</h1>
									<img src={article.urlToImage || '/newspaper.jpg'} className="card-img" alt="article" />
									<a href={article.url} className="h4">Link to original source.</a>
								</div>
								<div className="row">
									<div className="col-12">
										<h4 className="font-weight-bold font-dark my-3">LATEST NEWS</h4>
										<div className="row">
										{ latestNews && latestNews.map( (lnews, index) =>
											<div className="col-lg-3 col-md-6 col-sm-12" key={index}>
												<ArticleCard article={lnews} category="NEWS" formatDate={formatDate} includeDesc={false} />
											</div>
											)
										}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>  ) : (

				<div>
					<section className="mt-3">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<h1 className="text-center">Result cannot be retrieved.</h1>
								</div>
							</div>
						</div>
					</section>
				</div>
			)
		}
		</div>
	)
}

export default ArticleDetails