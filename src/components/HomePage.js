import React, {useState, useEffect} from 'react';
import './HomePage.css';

import Axios from "axios";
import {getApiUrl} from '../utils'

import Nav from './Nav';
import ArticleCard from './ArticleCard';

const HomePage = () => {

	const [headNews, setHeadNews] = useState({});
	const [headHealth, setHeadHealth] = useState({});
	const [headTech, setHeadTech] = useState({});
	const [headSports, setHeadSports] = useState({});

	const fetchGeneralHeadLine = async () =>{
		const link = getApiUrl("/v2/top-headlines?country=us&category=general");

		try {
	      	const res = await Axios.get(link);
	      	setHeadNews(res.data.articles[0]);
	    } 
	    catch (error) {
	      	console.log(error);
	      	setHeadNews({});
	    }

	}

	const fetchHealthHeadLine = async () =>{
		const link = getApiUrl("/v2/top-headlines?country=us&category=health");

		try {
	      	const res = await Axios.get(link);
	      	setHeadHealth(res.data.articles[0]);
	    } 
	    catch (error) {
	      	console.log(error);
	      	setHeadHealth({});
	    }

	}

	const fetchTechHeadLine = async () =>{
		const link = getApiUrl("/v2/top-headlines?country=us&category=technology");

		try {
	      	const res = await Axios.get(link);
	      	setHeadTech(res.data.articles[0]);
	    } 
	    catch (error) {
	      	console.log(error);
	      	setHeadTech({});
	    }

	}

	const fetchSportsHeadLine = async () =>{
		const link = getApiUrl("/v2/top-headlines?country=us&category=sports");

		try {
	      	const res = await Axios.get(link);
	      	setHeadSports(res.data.articles[0]);
	    } 
	    catch (error) {
	      	console.log(error);
	      	setHeadSports({});
	    }

	}

	useEffect(() => {
    	fetchGeneralHeadLine();
    	fetchSportsHeadLine();
    	fetchTechHeadLine();
    	fetchHealthHeadLine();
  	}, []);


  	const formatDate = (string) => {
    	var options = { year: 'numeric', month: 'long', day: 'numeric' };
    	return new Date(string).toLocaleDateString([],options);
	}

	return (
		<div>
			<Nav />

			{/* First Section */}
			<section>
				<div className="container-fluid">
					<div className="row mt-3">
						<div className="col-lg-6 col-md-12 col-sm-12 mb-2">
							<a href="#">
								<div className="article-card">
									<span className="category-tag">GENERAL</span>
							    	<h3 className="card-title font-weight-bold">{headNews.title}</h3>
							    	<p className="font-italic card-date-author">{headNews.author} - {formatDate(headNews.publishedAt)}</p>
								 	<img src={headNews.urlToImage} className="card-img" alt="news" />
								</div>
							</a>
						</div>
						<div className="col-lg-3 col-md-12 col-sm-12">
							<ArticleCard article={headHealth} category="HEALTH" formatDate={formatDate} />
							<ArticleCard article={headTech} category="TECH" formatDate={formatDate} />
							<ArticleCard article={headSports} category="SPORTS" formatDate={formatDate} />
						</div>
					</div>
				</div>
			</section>

		</div>
	)
}

export default HomePage