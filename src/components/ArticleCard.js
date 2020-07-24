import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({article, category, formatDate, includeDesc}) => {
	return (
		<div>
		{!includeDesc && 
			<div className="row my-3">
				<div className="col-12">
					<a href="#">
						<div className="article-card">
			  				<img src={article.urlToImage} className="card-img crop" alt="article image" />
			  				<span className="category-tag" style={{position:"absolute"}}>{category}</span>
			    			<h6 className="card-title font-weight-bold mt-1">{article.title}</h6>
							<p className="font-italic card-date-author">{article.author} - {formatDate(article.publishedAt)}</p>
						</div>
					</a>
				</div>
			</div>
		}

		{includeDesc && 
			<div className="row my-3">
				<div className="col-4">
					<img src={article.urlToImage} className="card-img crop-side" alt="article image" />
					<span className="category-tag" style={{position:"absolute"}}>{category}</span>
				</div>
				<div className="col-8">
					<a href="#">
						<div className="article-card">
			    			<h6 className="card-title font-weight-bold">{article.title}</h6>
							<p className="font-italic card-date-author">{article.author} - {formatDate(article.publishedAt)}</p>
							<p className="desc">{article.description}</p>
						</div>
					</a>
				</div>
			</div>
		}
		</div>
	)
}

export default ArticleCard