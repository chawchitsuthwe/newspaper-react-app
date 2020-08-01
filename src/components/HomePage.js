import React, {useState, useEffect} from 'react';
import ReactLoading from 'react-loading';
import './HomePage.css';

import Axios from "axios";
import {getApiUrl} from '../utils'

import Nav from './Nav';
import Footer from './Footer';
import ArticleCard from './ArticleCard';
import SideArticleCard from './SideArticleCard';
import SubscribeBox from './SubscribeBox';

const HomePage = () => {

	const [loading, setLoading] = useState(false);

	const [headNews, setHeadNews] = useState({});
	const [headHealth, setHeadHealth] = useState({});
	const [headTech, setHeadTech] = useState({});
	const [headSports, setHeadSports] = useState({});

	const [latestBusiness, setLatestBusiness] = useState([]);
	const [latestNews, setLatestNews] = useState([]);
	const [latestSports, setLatestSports] = useState([]);
	const [latestEntertainment, setLatestEntertainement] = useState([]);
	const [latestHealth, setLatestHealth] = useState([]);
	const [latestTech, setLatestTech] = useState([]);
	const [latestScience, setLatestScience] = useState([]);

	const fetchBusinessLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=business");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestBusiness(arr.slice(0, 4));
	      		setLoading(false);
	      	}
	      	else{
	      		setLoading(false);
	      		setLatestBusiness([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setLatestBusiness([]);
	    }
	}	

	const fetchNewsLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=general");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestNews(arr.slice(0, 3));
	      		setHeadNews(arr[0]);
	      		setLoading(false);
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

	const fetchSportsLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=sports");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestSports(arr.slice(0, 5));
	      		setHeadSports(arr[0]);
	      		setLoading(false);
	      	}
	      	else{
	      		setLoading(false);
	      		setLatestSports([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setLatestSports([]);
	    }
	}

	const fetchEntertainmentLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=entertainment");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestEntertainement(arr.slice(0, 5));
	      		setLoading(false);
	      	}
	      	else{
	      		setLoading(false);
	      		setLatestEntertainement([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setLatestEntertainement([]);
	    }
	}

	const fetchHealthLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=health");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestHealth(arr.slice(0, 5));
	      		setHeadHealth(arr[0]);
	      		setLoading(false);
	      	}
	      	else{
	      		setLoading(false);
	      		setLatestHealth([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setLatestHealth([]);
	    }
	}

	const fetchTechLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=technology");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestTech(arr.slice(0, 5));
	      		setHeadTech(arr[0]);
	      		setLoading(false);
	      	}
	      	else{
	      		setLoading(false);
	      		setLatestTech([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setLatestTech([]);
	    }
	}

	const fetchScienceLatest = async () =>{
		setLoading(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=science");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestScience(arr.slice(0, 5));
	      		setLoading(false);
	      	}
	      	else{
	      		setLoading(false);
	      		setLatestScience([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoading(false);
	      	setLatestScience([]);
	    }
	}

	useEffect(() => {
    	fetchBusinessLatest();
    	fetchNewsLatest();
    	fetchSportsLatest();
    	fetchEntertainmentLatest();
    	fetchHealthLatest();
    	fetchTechLatest();
    	fetchScienceLatest();
  	}, []);


  	const formatDate = (string) => {
    	var options = { year: 'numeric', month: 'long', day: 'numeric' };
    	return new Date(string).toLocaleDateString([],options);
	}

	return (
		<div>
			<Nav />

			{
				loading ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
			<div>
				{/* First Section */}
				<section>
					<div className="container-fluid">
						<div className="row mt-3">
							<div className="col-lg-6 col-md-12 col-sm-12 mb-2">
								<a href={headNews.url}>
									<div className="article-card">
										<span className="category-tag">NEWS</span>
								    	<h3 className="card-title font-weight-bold">{headNews.title}</h3>
								    	<p className="font-italic card-date-author">{headNews.author} - {formatDate(headNews.publishedAt)}</p>
									 	<img src={headNews.urlToImage || '/newspaper.jpg'} className="card-img" alt="news" />
									</div>
								</a>
							</div>
							<div className="col-lg-3 col-md-12 col-sm-12">
								<ArticleCard article={headHealth} category="HEALTH" formatDate={formatDate} includeDesc={false} />
								<ArticleCard article={headTech} category="TECHNOLOGY" formatDate={formatDate} includeDesc={false} />
								<ArticleCard article={headSports} category="SPORTS" formatDate={formatDate} includeDesc={false} />
							</div>
							<div className="col-lg-3 col-md-12 col-sm-12 border align-self-start">
								<h4 className="font-weight-bold font-pink my-3">BUSINESS</h4>
								{ latestBusiness && latestBusiness.map( (lbusiness, index) =>
									<SideArticleCard key={index} article={lbusiness} formatDate={formatDate} imageInclude={true} />
									)
								}
							</div>
						</div>
					</div>
				</section>

				{/* Second Section */}
				<section className="bg-dark-pink">
					<div className="container-fluid">
						<div className="row align-items-center">
							<div className="col-lg-4 col-md-12 col-sm-12">
								<SubscribeBox />
							</div>
							<div className="col-lg-8 col-md-12 col-sm-12">
								<h4 className="font-weight-bold font-dark my-3">LATEST NEWS</h4>
								<div className="row">
								{ latestNews && latestNews.map( (lnews, index) =>
									<div className="col-lg-4 col-md-12 col-sm-12" key={index}>
										<ArticleCard article={lnews} category="NEWS" formatDate={formatDate} includeDesc={false} />
									</div>
									)
								}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Third Section */}
				<section>
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-3 col-md-12 col-sm-12 border align-self-start">
								<h4 className="font-weight-bold font-pink my-3">SPORTS</h4>
								{ latestSports && latestSports.map( (lsports, index) =>
									<SideArticleCard key={index} article={lsports} formatDate={formatDate} imageInclude={false} />
									)
								}

								<div className="row my-3">
									<div className="col-12">
										<p className="ad">-Advertisement-</p>
										<img src="https://cdn.pixabay.com/photo/2018/11/10/20/13/coca-cola-3807410_960_720.jpg" className="w-100" alt="Advertisement" />
									</div>
								</div>

							</div>
							<div className="col-lg-5 col-md-12 col-sm-12">
								<h1 className="font-weight-bold font-pink my-3">LATEST HEALTH</h1>
								{ latestHealth && latestHealth.map( (lHealth, index) =>
									<ArticleCard key={index} article={lHealth} category="HEALTH" formatDate={formatDate} includeDesc={true} />
									)
								}
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 border align-self-start">
								<h4 className="font-weight-bold font-pink my-3">ENTERTAINMENT</h4>
								{ latestEntertainment && latestEntertainment.map( (lentertainment, index) =>
									<SideArticleCard key={index} article={lentertainment} formatDate={formatDate} imageInclude={true} />
									)
								}
							</div>
						</div>
					</div>
				</section>

				{/*Fourth Section*/}
				<section>
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-8 col-md-6 col-sm-12">
								<h1 className="font-weight-bold font-pink my-3">LATEST TECHNOLOGY</h1>
								{ latestTech && latestTech.map( (lTech, index) =>
									<ArticleCard key={index} article={lTech} category="TECHNOLOGY" formatDate={formatDate} includeDesc={true} />
									)
								}
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 bg-dark-pink align-self-start">
								<h1 className="font-weight-bold font-pink my-3">LATEST SCIENCE</h1>
								{ latestScience && latestScience.map( (lScience, index) =>
									<SideArticleCard key={index} article={lScience} formatDate={formatDate} imageInclude={true} />
									)
								}
								<div className="row my-3">
									<div className="col-12">
										<p className="ad">-Advertisement-</p>
										<img src="https://cdn.pixabay.com/photo/2018/11/10/20/13/coca-cola-3807410_960_720.jpg" className="w-100" alt="Advertisement" />
									</div>
								</div>
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

export default HomePage;