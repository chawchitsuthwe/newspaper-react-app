import React from 'react';
import './ArticleCard.css';

const ArticleCard = ({article, category, formatDate}) => {
	return (
		<div className="row">
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
	)
}

export default ArticleCard