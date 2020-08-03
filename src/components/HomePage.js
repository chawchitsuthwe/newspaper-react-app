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

	const [loadingNews, setLoadingNews] = useState(false);
	const [loadingBusiness, setLoadingBusiness] = useState(false);
	const [loadingHealth, setLoadingHealth] = useState(false);
	const [loadingSports, setLoadingSports] = useState(false);
	const [loadingEntertainment, setLoadingEntertainment] = useState(false);
	const [loadingTech, setLoadingTech] = useState(false);
	const [loadingScience, setLoadingScience] = useState(false);


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
		setLoadingBusiness(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=business");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestBusiness(arr.slice(0, 4));
	      		setLoadingBusiness(false);
	      	}
	      	else{
	      		setLoadingBusiness(false);
	      		setLatestBusiness([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoadingBusiness(false);
	      	setLatestBusiness([]);
	    }
	}	

	const fetchNewsLatest = async () =>{
		setLoadingNews(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=general");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestNews(arr.slice(0, 3));
	      		setHeadNews(arr[0]);
	      		setLoadingNews(false);
	      	}
	      	else{
	      		setLoadingNews(false);
	      		setLatestNews([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoadingNews(false);
	      	setLatestNews([]);
	    }
	}	

	const fetchSportsLatest = async () =>{
		setLoadingSports(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=sports");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestSports(arr.slice(0, 5));
	      		setHeadSports(arr[0]);
	      		setLoadingSports(false);
	      	}
	      	else{
	      		setLoadingSports(false);
	      		setLatestSports([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoadingSports(false);
	      	setLatestSports([]);
	    }
	}

	const fetchEntertainmentLatest = async () =>{
		setLoadingEntertainment(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=entertainment");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestEntertainement(arr.slice(0, 5));
	      		setLoadingEntertainment(false);
	      	}
	      	else{
	      		setLoadingEntertainment(false);
	      		setLatestEntertainement([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoadingEntertainment(false);
	      	setLatestEntertainement([]);
	    }
	}

	const fetchHealthLatest = async () =>{
		setLoadingHealth(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=health");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestHealth(arr.slice(0, 5));
	      		setHeadHealth(arr[0]);
	      		setLoadingHealth(false);
	      	}
	      	else{
	      		setLoadingHealth(false);
	      		setLatestHealth([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoadingHealth(false);
	      	setLatestHealth([]);
	    }
	}

	const fetchTechLatest = async () =>{
		setLoadingTech(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=technology");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestTech(arr.slice(0, 5));
	      		setHeadTech(arr[0]);
	      		setLoadingTech(false);
	      	}
	      	else{
	      		setLoadingTech(false);
	      		setLatestTech([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoadingTech(false);
	      	setLatestTech([]);
	    }
	}

	const fetchScienceLatest = async () =>{
		setLoadingScience(true);
		const link = getApiUrl("/v2/top-headlines?country=us&category=science");

		try {
	      	const res = await Axios.get(link);
	      	const arr = res.data.articles;
	      	if(arr && arr.length > 0){
	      		setLatestScience(arr.slice(0, 5));
	      		setLoadingScience(false);
	      	}
	      	else{
	      		setLoadingScience(false);
	      		setLatestScience([]);
	      	}
	    } 
	    catch (error) {
	      	console.log(error);
	      	setLoadingScience(false);
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

			<div>
				{/* First Section */}
				<section>
					<div className="container-fluid">
						<div className="row mt-3">
							<div className="col-lg-6 col-md-12 col-sm-12 mb-2">
							{
								loadingNews ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
								<a href={headNews.url}>
									<div className="article-card">
										<span className="category-tag">NEWS</span>
								    	<h3 className="card-title font-weight-bold">{headNews.title}</h3>
								    	<p className="font-italic card-date-author">{headNews.author} - {formatDate(headNews.publishedAt)}</p>
									 	<img src={headNews.urlToImage || '/newspaper.jpg'} className="card-img" alt="news" />
									</div>
								</a>
							}
							</div>
							<div className="col-lg-3 col-md-12 col-sm-12">
							{
								loadingHealth ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
				
								<ArticleCard article={headHealth} category="HEALTH" formatDate={formatDate} includeDesc={false} />
							}
							{
								loadingTech ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
								<ArticleCard article={headTech} category="TECHNOLOGY" formatDate={formatDate} includeDesc={false} />
							}
							{
								loadingSports ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
								<ArticleCard article={headSports} category="SPORTS" formatDate={formatDate} includeDesc={false} />
							}
							</div>
							<div className="col-lg-3 col-md-12 col-sm-12 border align-self-start">
								<h4 className="font-weight-bold font-pink my-3">BUSINESS</h4>
								{
									loadingBusiness ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
									latestBusiness && latestBusiness.map( (lbusiness, index) =>
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
								{
									loadingNews ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
									latestNews && latestNews.map( (lnews, index) =>
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
								{
									loadingSports ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
									latestSports && latestSports.map( (lsports, index) =>
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
								{
									loadingHealth ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
									latestHealth && latestHealth.map( (lHealth, index) =>
										<ArticleCard key={index} article={lHealth} category="HEALTH" formatDate={formatDate} includeDesc={true} />
										)
								}
							</div>
							<div className="col-lg-4 col-md-12 col-sm-12 border align-self-start">
								<h4 className="font-weight-bold font-pink my-3">ENTERTAINMENT</h4>
								{
									loadingEntertainment ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
									latestEntertainment && latestEntertainment.map( (lentertainment, index) =>
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
								{
									loadingTech ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
									latestTech && latestTech.map( (lTech, index) =>
									<ArticleCard key={index} article={lTech} category="TECHNOLOGY" formatDate={formatDate} includeDesc={true} />
									)
								}
							</div>
							<div className="col-lg-4 col-md-6 col-sm-12 bg-dark-pink align-self-start">
								<h1 className="font-weight-bold font-pink my-3">LATEST SCIENCE</h1>
								{
									loadingScience ? <ReactLoading type="cubes" color="#3C545C" height={100} width={100} className="loader" /> :
			
									latestScience && latestScience.map( (lScience, index) =>
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

		</div>
	)
}

export default HomePage;